"use client";

/**
 * Realistic page-flip sound via granular synthesis.
 *
 * Paper rustle is NOT a smooth whoosh — it is dozens of very short, very
 * bright micro-clicks happening in fast succession as the fibres of the
 * paper unbend. We synthesise that directly:
 *
 *   1.  finger pickup transient (~3 ms)            — single sharp click
 *   2.  granular rustle (~200 ms)                  — 35–50 tiny high-passed
 *                                                    noise grains, each
 *                                                    ~8–25 ms, randomly
 *                                                    placed
 *   3.  page settle thump (~80 ms)                 — short low-pass burst +
 *                                                    sub-bass sine bump
 *
 * Each play is randomised so consecutive flips don't sound identical.
 */

let ctx: AudioContext | null = null;
let noiseBuffer: AudioBuffer | null = null;

function getCtx(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (!ctx) {
    const AC =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext })
        .webkitAudioContext;
    if (!AC) return null;
    ctx = new AC();
  }
  if (ctx.state === "suspended") void ctx.resume();
  return ctx;
}

// 1-second white noise buffer, generated once and re-sliced into grains.
function getNoise(audio: AudioContext): AudioBuffer {
  if (noiseBuffer && noiseBuffer.sampleRate === audio.sampleRate) {
    return noiseBuffer;
  }
  const len = audio.sampleRate; // 1s
  const buf = audio.createBuffer(1, len, audio.sampleRate);
  const data = buf.getChannelData(0);
  for (let i = 0; i < len; i++) data[i] = Math.random() * 2 - 1;
  noiseBuffer = buf;
  return buf;
}

type ChainOpts = {
  start: number;
  duration: number;
  offset: number; // where in the noise buffer to start playing
  rate?: number;
  gainPeak: number;
  attack?: number;
  filter?:
    | { type: "highpass" | "lowpass"; freq: number; q?: number }
    | { type: "bandpass"; freq: number; q?: number; sweepTo?: number }
    | { type: "peaking"; freq: number; q?: number; dB: number };
  destination: AudioNode;
};

function fireGrain(audio: AudioContext, opts: ChainOpts) {
  const src = audio.createBufferSource();
  src.buffer = getNoise(audio);
  src.playbackRate.value = opts.rate ?? 1;

  let node: AudioNode = src;

  if (opts.filter) {
    const f = audio.createBiquadFilter();
    f.type = opts.filter.type;
    f.frequency.value = opts.filter.freq;
    if ("q" in opts.filter && opts.filter.q !== undefined)
      f.Q.value = opts.filter.q;
    if (opts.filter.type === "peaking") f.gain.value = opts.filter.dB;
    if (opts.filter.type === "bandpass" && opts.filter.sweepTo) {
      f.frequency.setValueAtTime(opts.filter.freq, opts.start);
      f.frequency.exponentialRampToValueAtTime(
        opts.filter.sweepTo,
        opts.start + opts.duration,
      );
    }
    src.connect(f);
    node = f;
  }

  const g = audio.createGain();
  const a = opts.attack ?? 0.001;
  g.gain.setValueAtTime(0.0001, opts.start);
  g.gain.exponentialRampToValueAtTime(
    Math.max(opts.gainPeak, 0.0002),
    opts.start + a,
  );
  g.gain.exponentialRampToValueAtTime(0.0001, opts.start + opts.duration);

  node.connect(g);
  g.connect(opts.destination);

  src.start(opts.start, opts.offset, opts.duration);
  src.stop(opts.start + opts.duration);
}

export function playFlip(): void {
  const audio = getCtx();
  if (!audio) return;

  const t0 = audio.currentTime;
  const speed = 0.94 + Math.random() * 0.12; // 0.94–1.06

  // Master bus with a touch of room
  const master = audio.createGain();
  master.gain.value = 0.95;
  master.connect(audio.destination);

  // Cheap delay-based room (very subtle)
  const delay = audio.createDelay(0.1);
  delay.delayTime.value = 0.022;
  const fb = audio.createGain();
  fb.gain.value = 0.12;
  const wet = audio.createGain();
  wet.gain.value = 0.1;
  master.connect(delay);
  delay.connect(fb);
  fb.connect(delay);
  delay.connect(wet);
  wet.connect(audio.destination);

  // ─── 1. Finger pickup click (~3 ms) ────────────────────────────────
  fireGrain(audio, {
    start: t0,
    duration: 0.006,
    offset: Math.random() * 0.5,
    gainPeak: 0.4,
    attack: 0.0005,
    filter: {
      type: "peaking",
      freq: 7000 + Math.random() * 2000,
      q: 5,
      dB: 10,
    },
    destination: master,
  });

  // ─── 2. Granular rustle body (≈200 ms, 38 grains) ──────────────────
  const rustleStart = t0 + 0.006;
  const rustleDur = 0.21 / speed;
  const numGrains = 38;
  const noiseLen = 1; // seconds, length of the source buffer

  for (let i = 0; i < numGrains; i++) {
    // Bias grain placement toward the start (most energy in first 60%)
    const r = Math.pow(Math.random(), 0.6);
    const offsetIntoRustle = r * rustleDur;
    const grainDur = 0.008 + Math.random() * 0.022;
    const peak = 0.06 + Math.random() * 0.18;

    // Filter sweeps slightly downward over the rustle for a fading-away feel
    const center =
      2200 +
      Math.random() * 5500 -
      (offsetIntoRustle / rustleDur) * 1400; // 2200–7700 Hz, slight downward bias

    fireGrain(audio, {
      start: rustleStart + offsetIntoRustle,
      duration: grainDur,
      offset: Math.random() * (noiseLen - grainDur),
      rate: 0.85 + Math.random() * 0.4,
      gainPeak: peak,
      attack: 0.0005 + Math.random() * 0.002,
      filter: {
        type: "bandpass",
        freq: Math.max(500, center),
        q: 1.6 + Math.random() * 1.4,
      },
      destination: master,
    });
  }

  // Broadband "shhh" sustaining underneath the grains for cohesion
  {
    const start = rustleStart;
    const dur = rustleDur;
    const src = audio.createBufferSource();
    src.buffer = getNoise(audio);
    src.playbackRate.value = speed;

    const hp = audio.createBiquadFilter();
    hp.type = "highpass";
    hp.frequency.value = 1800;

    const peak = audio.createBiquadFilter();
    peak.type = "peaking";
    peak.frequency.setValueAtTime(3500, start);
    peak.frequency.exponentialRampToValueAtTime(2200, start + dur);
    peak.Q.value = 1.1;
    peak.gain.value = 6;

    const g = audio.createGain();
    g.gain.setValueAtTime(0.0001, start);
    g.gain.exponentialRampToValueAtTime(0.18, start + 0.025);
    g.gain.linearRampToValueAtTime(0.12, start + dur * 0.5);
    g.gain.exponentialRampToValueAtTime(0.0005, start + dur);

    src.connect(hp);
    hp.connect(peak);
    peak.connect(g);
    g.connect(master);
    src.start(start);
    src.stop(start + dur);
  }

  // ─── 3. Page settle (~80 ms) ───────────────────────────────────────
  const settleStart = t0 + 0.21 / speed;

  // Soft mid-low filtered noise — the "fwap" of paper meeting paper
  fireGrain(audio, {
    start: settleStart,
    duration: 0.09,
    offset: Math.random() * 0.5,
    gainPeak: 0.32,
    attack: 0.002,
    filter: {
      type: "lowpass",
      freq: 1100,
      q: 0.8,
    },
    destination: master,
  });

  // Sub-bass sine bump — the weight of the page landing
  {
    const osc = audio.createOscillator();
    osc.type = "sine";
    osc.frequency.setValueAtTime(190, settleStart);
    osc.frequency.exponentialRampToValueAtTime(90, settleStart + 0.07);

    const og = audio.createGain();
    og.gain.setValueAtTime(0.0001, settleStart);
    og.gain.exponentialRampToValueAtTime(0.12, settleStart + 0.008);
    og.gain.exponentialRampToValueAtTime(0.0005, settleStart + 0.08);

    osc.connect(og);
    og.connect(master);
    osc.start(settleStart);
    osc.stop(settleStart + 0.09);
  }

  // ─── 4. A few late residual rustles trailing off (~5 grains, 80–200 ms after settle)
  for (let i = 0; i < 5; i++) {
    const start = settleStart + 0.04 + Math.random() * 0.16;
    const dur = 0.01 + Math.random() * 0.018;
    fireGrain(audio, {
      start,
      duration: dur,
      offset: Math.random() * 0.5,
      rate: 0.9 + Math.random() * 0.3,
      gainPeak: 0.04 + Math.random() * 0.07,
      attack: 0.0008,
      filter: {
        type: "bandpass",
        freq: 3000 + Math.random() * 3000,
        q: 1.8,
      },
      destination: master,
    });
  }
}
