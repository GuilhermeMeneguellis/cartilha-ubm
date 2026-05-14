"use client";

import { SVGProps } from "react";

export function MagIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle
        cx="10"
        cy="10"
        r="6"
        stroke="currentColor"
        strokeWidth="2.2"
      />
      <line
        x1="14.5"
        y1="14.5"
        x2="20"
        y2="20"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function HandPoint(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        d="M12 5c0-1.1 0.9-2 2-2s2 0.9 2 2v9h1V8c0-1.1 0.9-2 2-2s2 0.9 2 2v6h1v-4c0-1.1 0.9-2 2-2s2 0.9 2 2v10c0 4.4-3.6 8-8 8h-2c-2.5 0-4.8-1.2-6.3-3.2L6 18.8c-0.7-1 -0.5-2.3 0.5-3l0.2-0.1c0.8-0.5 1.9-0.3 2.5 0.5L11 18V7c0-1.1 0.9-2 2-2v0z"
        fill="currentColor"
      />
    </svg>
  );
}

/* Browser mockup with magnifying glass — cover + intro decoration */
export function BrowserMag(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 160" fill="none" {...props}>
      <rect x="10" y="14" width="150" height="120" rx="10" fill="#fff" />
      <rect x="10" y="14" width="150" height="18" rx="10" fill="#d94d54" />
      <circle cx="20" cy="23" r="2.4" fill="#fff" />
      <circle cx="28" cy="23" r="2.4" fill="#fff" />
      <circle cx="36" cy="23" r="2.4" fill="#fff" />
      <rect x="50" y="19" width="100" height="8" rx="4" fill="#fff" />
      <circle cx="62" cy="23" r="3.5" fill="#5f6df0" />
      <text
        x="62"
        y="26"
        fontSize="6"
        textAnchor="middle"
        fill="#fff"
        fontWeight="700"
      >
        1
      </text>
      <rect x="22" y="44" width="120" height="6" rx="3" fill="#5f6df0" />
      <rect x="22" y="56" width="80" height="4" rx="2" fill="#d94d54" />
      <rect x="22" y="66" width="120" height="4" rx="2" fill="#bcc2ff" />
      <rect x="22" y="76" width="60" height="4" rx="2" fill="#d94d54" />
      <rect x="22" y="86" width="100" height="4" rx="2" fill="#bcc2ff" />
      <rect x="22" y="96" width="40" height="4" rx="2" fill="#d94d54" />

      {/* magnifier */}
      <circle
        cx="125"
        cy="90"
        r="22"
        stroke="#2a0c10"
        strokeWidth="4"
        fill="rgba(255,255,255,0.05)"
      />
      <line
        x1="142"
        y1="107"
        x2="158"
        y2="123"
        stroke="#2a0c10"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* Lab scene — scientists with flasks */
export function LabScene(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 240 160" fill="none" {...props}>
      <rect x="0" y="0" width="240" height="160" rx="10" fill="#eaf1ff" />
      <rect x="20" y="40" width="60" height="40" rx="4" fill="#fff" />
      <text x="50" y="62" textAnchor="middle" fontSize="10" fill="#3d3d3d">
        NH₃
      </text>
      <path
        d="M62 65 q4 8 12 6 q8 -2 8 8"
        stroke="#5f6df0"
        strokeWidth="1.5"
        fill="none"
      />
      {/* central bench */}
      <rect x="40" y="115" width="170" height="10" fill="#bfa56a" />
      {/* flasks */}
      <path
        d="M88 95 l4 -14 h-2 v-6 h10 v6 h-2 l4 14 z"
        fill="#ff9ec0"
        stroke="#2a0c10"
        strokeWidth="1"
      />
      <path
        d="M108 95 l4 -14 h-2 v-6 h10 v6 h-2 l4 14 z"
        fill="#ffe07a"
        stroke="#2a0c10"
        strokeWidth="1"
      />
      <path
        d="M128 95 l4 -14 h-2 v-6 h10 v6 h-2 l4 14 z"
        fill="#8fd6c2"
        stroke="#2a0c10"
        strokeWidth="1"
      />
      {/* monitors right */}
      <rect x="150" y="35" width="60" height="40" rx="3" fill="#fff" />
      <rect x="155" y="42" width="50" height="6" fill="#5f6df0" />
      <rect x="155" y="52" width="34" height="4" fill="#d94d54" />
      <rect x="155" y="60" width="50" height="4" fill="#bcc2ff" />
      <rect x="170" y="76" width="20" height="3" fill="#3d3d3d" />
      {/* scientists silhouettes */}
      <g fill="#5f1a23">
        <circle cx="55" cy="100" r="6" />
        <rect x="48" y="106" width="14" height="20" rx="3" />
      </g>
      <g fill="#5f1a23">
        <circle cx="120" cy="100" r="6" />
        <rect x="113" y="106" width="14" height="20" rx="3" />
      </g>
      <g fill="#5f1a23">
        <circle cx="185" cy="100" r="6" />
        <rect x="178" y="106" width="14" height="20" rx="3" />
      </g>
    </svg>
  );
}

/* Two people analyzing dashboard */
export function AnalystScene(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 240 160" fill="none" {...props}>
      <rect x="40" y="20" width="160" height="80" rx="8" fill="#fff" />
      <rect x="50" y="30" width="140" height="10" fill="#5f6df0" />
      {/* chart bars */}
      <rect x="58" y="60" width="10" height="30" fill="#d94d54" />
      <rect x="74" y="50" width="10" height="40" fill="#5f6df0" />
      <rect x="90" y="68" width="10" height="22" fill="#ffb35a" />
      <rect x="106" y="44" width="10" height="46" fill="#5f6df0" />
      {/* line */}
      <polyline
        points="58,80 75,68 92,72 110,58 130,64 152,52"
        fill="none"
        stroke="#5f1a23"
        strokeWidth="2"
      />
      {/* magnifier */}
      <circle
        cx="155"
        cy="55"
        r="14"
        stroke="#2a0c10"
        strokeWidth="3"
        fill="rgba(255,255,255,0.2)"
      />
      <line
        x1="165"
        y1="65"
        x2="175"
        y2="75"
        stroke="#2a0c10"
        strokeWidth="4"
        strokeLinecap="round"
      />
      {/* people */}
      <g fill="#f4b27a">
        <circle cx="40" cy="78" r="8" />
      </g>
      <g fill="#ffb35a">
        <rect x="30" y="86" width="20" height="34" rx="3" />
      </g>
      <rect x="32" y="120" width="6" height="20" fill="#3d3d3d" />
      <rect x="44" y="120" width="6" height="20" fill="#3d3d3d" />

      <g fill="#f4b27a">
        <circle cx="205" cy="78" r="8" />
      </g>
      <g fill="#5f6df0">
        <rect x="195" y="86" width="20" height="34" rx="3" />
      </g>
      <rect x="197" y="120" width="6" height="20" fill="#3d3d3d" />
      <rect x="209" y="120" width="6" height="20" fill="#3d3d3d" />
      {/* speech bubbles */}
      <circle
        cx="22"
        cy="40"
        r="10"
        fill="#fff"
        stroke="#2a0c10"
        strokeWidth="1.4"
      />
      <text x="22" y="44" textAnchor="middle" fontSize="11" fill="#2a0c10">
        ✓
      </text>
      <circle
        cx="220"
        cy="40"
        r="10"
        fill="#fff"
        stroke="#2a0c10"
        strokeWidth="1.4"
      />
      <text x="220" y="44" textAnchor="middle" fontSize="11" fill="#ffb35a">
        💡
      </text>
    </svg>
  );
}

/* Stylized person with magnifying glass and browser (cover/contact figure) */
export function PersonWithMag(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 240" fill="none" {...props}>
      {/* browser */}
      <rect x="10" y="40" width="120" height="100" rx="10" fill="#fff" />
      <rect x="10" y="40" width="120" height="18" rx="10" fill="#d94d54" />
      <circle cx="20" cy="49" r="2.4" fill="#fff" />
      <circle cx="28" cy="49" r="2.4" fill="#fff" />
      <circle cx="36" cy="49" r="2.4" fill="#fff" />
      <rect x="50" y="46" width="74" height="6" rx="3" fill="#fff" />
      <circle cx="60" cy="49" r="3" fill="#5f6df0" />
      <rect x="22" y="68" width="100" height="5" rx="2" fill="#5f6df0" />
      <rect x="22" y="80" width="60" height="3" rx="1" fill="#d94d54" />
      <rect x="22" y="88" width="90" height="3" rx="1" fill="#bcc2ff" />
      <rect x="22" y="96" width="40" height="3" rx="1" fill="#d94d54" />
      <rect x="22" y="104" width="80" height="3" rx="1" fill="#bcc2ff" />
      <rect x="22" y="112" width="30" height="3" rx="1" fill="#d94d54" />

      {/* person */}
      <g>
        <circle cx="140" cy="85" r="14" fill="#f4b27a" />
        {/* hair */}
        <path d="M126 80 q14 -16 28 0 q0 -10 -14 -10 q-14 0 -14 10z" fill="#7a4a2b" />
        {/* sweater */}
        <path
          d="M118 102 q22 -6 44 0 v60 q-22 6 -44 0z"
          fill="#ffc04d"
        />
        {/* arm holding magnifier */}
        <path
          d="M120 110 q-8 14 -10 30 q-2 12 6 18"
          stroke="#ffc04d"
          strokeWidth="12"
          strokeLinecap="round"
          fill="none"
        />
        {/* pants */}
        <rect x="118" y="160" width="20" height="44" fill="#4a564a" />
        <rect x="142" y="160" width="20" height="44" fill="#4a564a" />
        {/* shoes */}
        <ellipse cx="128" cy="208" rx="12" ry="5" fill="#5f6df0" />
        <ellipse cx="152" cy="208" rx="12" ry="5" fill="#5f6df0" />
      </g>

      {/* magnifier glass */}
      <circle
        cx="100"
        cy="100"
        r="22"
        stroke="#2a0c10"
        strokeWidth="5"
        fill="rgba(255,255,255,0.05)"
      />
      <line
        x1="116"
        y1="116"
        x2="132"
        y2="132"
        stroke="#2a0c10"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* Browser with question mark — for "What is Science?" continuation */
export function BrowserQuestion(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 160" fill="none" {...props}>
      <rect x="10" y="20" width="170" height="120" rx="10" fill="#fff" />
      <rect x="10" y="20" width="170" height="18" rx="10" fill="#bcc2ff" />
      <circle cx="20" cy="29" r="2.4" fill="#fff" />
      <circle cx="28" cy="29" r="2.4" fill="#fff" />
      <circle cx="36" cy="29" r="2.4" fill="#fff" />

      <rect x="24" y="56" width="50" height="50" rx="6" fill="#cfd4ff" />
      <circle cx="49" cy="80" r="14" stroke="#5f6df0" strokeWidth="3" fill="none" />
      <line
        x1="59"
        y1="90"
        x2="68"
        y2="100"
        stroke="#5f6df0"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <rect x="84" y="56" width="80" height="6" rx="3" fill="#bcc2ff" />
      <rect x="84" y="68" width="80" height="6" rx="3" fill="#bcc2ff" />
      <rect x="84" y="80" width="80" height="6" rx="3" fill="#bcc2ff" />
      <rect x="84" y="92" width="50" height="6" rx="3" fill="#cfd4ff" />
      <rect x="84" y="104" width="46" height="14" rx="4" fill="#cfd4ff" />

      {/* leaves */}
      <path
        d="M22 130 q6 -10 16 -10 q-2 8 -12 14z"
        fill="#7eb27a"
      />
      <path
        d="M165 132 q6 -10 18 -8 q-4 10 -16 14z"
        fill="#e58aa6"
      />
      {/* question bubble */}
      <circle cx="160" cy="20" r="14" fill="#ff5a8a" />
      <text
        x="160"
        y="26"
        textAnchor="middle"
        fontSize="16"
        fontWeight="800"
        fill="#fff"
      >
        ?
      </text>
    </svg>
  );
}

/* Tangled wires becoming a clean light bulb — used in "Pesquisa feita" */
export function TangledBulb(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 220 110" fill="none" {...props}>
      <path
        d="M10 60 C 40 20, 50 100, 80 60 S 110 20, 130 60"
        stroke="#d94d54"
        strokeWidth="3"
        fill="none"
      />
      <path
        d="M10 60 C 30 90, 60 30, 80 80 S 120 30, 140 70"
        stroke="#5f6df0"
        strokeWidth="3"
        fill="none"
      />
      <path
        d="M10 60 C 40 50, 60 80, 90 50 S 130 80, 150 60"
        stroke="#3d8a4a"
        strokeWidth="3"
        fill="none"
      />
      <path
        d="M10 60 C 50 40, 70 60, 90 70 S 130 50, 160 60"
        stroke="#e6b04a"
        strokeWidth="3"
        fill="none"
      />
      <line
        x1="160"
        y1="60"
        x2="178"
        y2="60"
        stroke="#3d3d3d"
        strokeWidth="3"
      />
      {/* bulb */}
      <g transform="translate(180,30)">
        <path
          d="M14 0 a14 14 0 1 1 -10 24 v6 a4 4 0 0 0 4 4 h12 a4 4 0 0 0 4 -4 v-6 a14 14 0 0 0 -10 -24z"
          fill="#ffd54a"
          stroke="#2a0c10"
          strokeWidth="1.5"
        />
        <rect x="6" y="38" width="16" height="3" fill="#2a0c10" />
        <rect x="8" y="44" width="12" height="3" fill="#2a0c10" />
        <path
          d="M8 18 q6 4 12 0 M8 22 q6 4 12 0"
          stroke="#2a0c10"
          strokeWidth="1"
          fill="none"
        />
      </g>
    </svg>
  );
}

/* Glowing lightbulb (NUPEs page) */
export function CircuitBulb(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 120 120" fill="none" {...props}>
      {/* circuit traces */}
      <g stroke="#3fc2ff" strokeWidth="1.4" fill="none">
        <path d="M10 60 h20" />
        <path d="M10 40 h14 v-14" />
        <path d="M10 80 h14 v14" />
        <path d="M110 60 h-20" />
        <path d="M110 40 h-14 v-14" />
        <path d="M110 80 h-14 v14" />
      </g>
      <g fill="#3fc2ff">
        <circle cx="24" cy="26" r="2" />
        <circle cx="24" cy="94" r="2" />
        <circle cx="96" cy="26" r="2" />
        <circle cx="96" cy="94" r="2" />
      </g>
      {/* bulb */}
      <path
        d="M60 22 a26 26 0 0 1 18 44 v8 a5 5 0 0 1 -5 5 h-26 a5 5 0 0 1 -5 -5 v-8 a26 26 0 0 1 18 -44z"
        fill="#3fc2ff"
        stroke="#fff"
        strokeWidth="2"
      />
      <rect x="50" y="82" width="20" height="4" fill="#fff" />
      <rect x="52" y="90" width="16" height="4" fill="#fff" />
      <path
        d="M52 48 q8 6 16 0 M52 56 q8 6 16 0"
        stroke="#fff"
        strokeWidth="1.4"
        fill="none"
      />
    </svg>
  );
}

/* Cartoon scientist + flasks logo (PIAP card) */
export function PiapBadge(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 240 110" fill="none" {...props}>
      <rect x="0" y="0" width="240" height="110" rx="12" fill="#0e0d2a" />
      <rect x="6" y="6" width="228" height="14" rx="3" fill="#d94d54" />
      <text
        x="120"
        y="17"
        textAnchor="middle"
        fontSize="9"
        fontWeight="800"
        fill="#fff"
      >
        PROGRAMA INSTITUCIONAL DE APOIO À PESQUISA (PIAP)
      </text>
      <ellipse cx="120" cy="68" rx="100" ry="34" fill="#fff" opacity="0.05" />
      {/* equations background */}
      <g fill="#3a3a6e" fontSize="8" fontFamily="serif">
        <text x="16" y="46">α + β</text>
        <text x="36" y="92">e=mc²</text>
        <text x="200" y="48">∑ ƒ(x)</text>
        <text x="194" y="92">π√</text>
      </g>
      {/* test tube */}
      <g transform="translate(54,40)">
        <rect x="0" y="0" width="14" height="40" rx="3" fill="#fff" />
        <rect x="0" y="24" width="14" height="16" fill="#ff5a8a" />
      </g>
      <g transform="translate(74,42)">
        <rect x="0" y="0" width="14" height="40" rx="3" fill="#fff" />
        <rect x="0" y="20" width="14" height="20" fill="#ffd54a" />
      </g>
      {/* scientist */}
      <g transform="translate(110,30)">
        <circle cx="14" cy="14" r="12" fill="#f4b27a" />
        <path d="M2 18 q12 -22 24 0" fill="#2a2a2a" />
        <rect x="6" y="26" width="16" height="22" rx="3" fill="#fff" />
        <rect x="4" y="48" width="20" height="10" fill="#2a2a2a" />
        <rect x="11" y="12" width="6" height="2" fill="#fff" />
        <rect x="9" y="14" width="10" height="2" fill="#2a2a2a" />
      </g>
      {/* microscope */}
      <g transform="translate(160,46)" stroke="#fff" strokeWidth="1.5" fill="none">
        <circle cx="14" cy="14" r="10" />
        <line x1="14" y1="24" x2="14" y2="34" />
        <line x1="6" y1="34" x2="22" y2="34" />
        <line x1="8" y1="6" x2="20" y2="6" />
      </g>
    </svg>
  );
}

/* Three journal cover thumbnails */
export function JournalCovers(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 240 160" fill="none" {...props}>
      {/* Revista Cientifica */}
      <g>
        <rect x="6" y="10" width="68" height="100" rx="3" fill="#1f2a3a" />
        <text
          x="40"
          y="34"
          textAnchor="middle"
          fontSize="7"
          fontWeight="800"
          fill="#fff"
        >
          REVISTA
        </text>
        <text
          x="40"
          y="44"
          textAnchor="middle"
          fontSize="10"
          fontWeight="900"
          fill="#fff"
        >
          CIENTÍFICA
        </text>
        <text x="40" y="56" textAnchor="middle" fontSize="6" fill="#9ec1ff">
          DO UBM
        </text>
        <text x="40" y="100" textAnchor="middle" fontSize="6" fill="#9ec1ff">
          v. 26 · n. 51 · 2024
        </text>
      </g>
      {/* Revista do Direito */}
      <g>
        <rect x="82" y="10" width="68" height="100" rx="3" fill="#0e2e5e" />
        <circle cx="116" cy="46" r="12" fill="none" stroke="#e6b04a" strokeWidth="1.6" />
        <line
          x1="116"
          y1="34"
          x2="116"
          y2="58"
          stroke="#e6b04a"
          strokeWidth="1.4"
        />
        <line
          x1="106"
          y1="46"
          x2="126"
          y2="46"
          stroke="#e6b04a"
          strokeWidth="1.4"
        />
        <text
          x="116"
          y="78"
          textAnchor="middle"
          fontSize="8"
          fontWeight="800"
          fill="#fff"
        >
          REVISTA
        </text>
        <text
          x="116"
          y="88"
          textAnchor="middle"
          fontSize="8"
          fontWeight="800"
          fill="#fff"
        >
          DO DIREITO
        </text>
        <text x="116" y="100" textAnchor="middle" fontSize="5" fill="#cfe0ff">
          ISSN 2238-7390
        </text>
      </g>
      {/* Med Vet */}
      <g>
        <rect x="158" y="10" width="68" height="100" rx="3" fill="#5f1a23" />
        <path
          d="M192 30 l-8 12 l16 0 z"
          fill="#3d8a4a"
        />
        <rect x="184" y="40" width="16" height="14" fill="#3d8a4a" />
        <text x="192" y="50" textAnchor="middle" fontSize="6" fontWeight="900" fill="#fff">
          V
        </text>
        <text
          x="192"
          y="74"
          textAnchor="middle"
          fontSize="7"
          fontWeight="800"
          fill="#fff"
        >
          REVISTA ELETRÔNICA
        </text>
        <text x="192" y="84" textAnchor="middle" fontSize="6" fill="#ffd6da">
          DO CURSO DE
        </text>
        <text
          x="192"
          y="96"
          textAnchor="middle"
          fontSize="7"
          fontWeight="800"
          fill="#fff"
        >
          MEDICINA VET.
        </text>
      </g>
      {/* labels */}
      <text x="40" y="124" textAnchor="middle" fontSize="6" fill="#5f1a23">
        e-ISSN 2764-5185
      </text>
      <text x="116" y="124" textAnchor="middle" fontSize="6" fill="#5f1a23">
        ISSN 2238-7390
      </text>
    </svg>
  );
}

/* Anais covers stacked 2x2 */
export function AnaisCovers(props: SVGProps<SVGSVGElement>) {
  const titles = [
    { sub: "Saúde", n: "v.5, n.2, 2022" },
    { sub: "Engenharias", n: "v.5, n.1, 2022" },
    { sub: "Ciências Sociais / Artes", n: "v.5, n.3, 2022" },
    { sub: "Resumos · 2022", n: "Ciências Sociais · Engenharias · Saúde" },
  ];
  return (
    <svg viewBox="0 0 240 240" fill="none" {...props}>
      {titles.map((t, i) => {
        const x = (i % 2) * 122 + 4;
        const y = Math.floor(i / 2) * 122 + 4;
        return (
          <g key={i} transform={`translate(${x},${y})`}>
            <rect width="114" height="112" rx="4" fill="#1a2a55" />
            <rect width="114" height="14" fill="#243a78" />
            <text
              x="6"
              y="11"
              fontSize="6"
              fontWeight="800"
              fill="#fff"
            >
              ANAIS DO SEMINÁRIO
            </text>
            <text x="100" y="11" fontSize="5" fill="#9ec1ff">
              ISSN
            </text>
            <text
              x="57"
              y="48"
              textAnchor="middle"
              fontSize="11"
              fontWeight="800"
              fill="#fff"
            >
              {t.sub}
            </text>
            <text x="57" y="62" textAnchor="middle" fontSize="6" fill="#cfe0ff">
              {t.n}
            </text>
            <circle cx="57" cy="86" r="14" fill="none" stroke="#7a9bff" strokeWidth="1.2" />
            <text x="100" y="106" textAnchor="end" fontSize="6" fill="#fff">
              UBM
            </text>
          </g>
        );
      })}
    </svg>
  );
}

/* CAPES logo placeholder */
export function CapesLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 120 80" fill="none" {...props}>
      <g
        stroke="#1ea7d4"
        strokeWidth="2.4"
        fill="none"
      >
        <ellipse cx="60" cy="40" rx="40" ry="18" />
        <ellipse cx="60" cy="40" rx="40" ry="18" transform="rotate(60 60 40)" />
        <ellipse cx="60" cy="40" rx="40" ry="18" transform="rotate(-60 60 40)" />
      </g>
      <circle cx="60" cy="40" r="6" fill="#3d8a4a" />
      <text
        x="60"
        y="72"
        textAnchor="middle"
        fontSize="14"
        fontWeight="900"
        fill="#1ea7d4"
      >
        CAPES
      </text>
    </svg>
  );
}

/* Seminario VII banner */
export function SeminarioBanner(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 320 90" fill="none" {...props}>
      <rect width="320" height="90" rx="6" fill="#f5f1ea" />
      <g fill="#bfa56a" opacity="0.4">
        {Array.from({ length: 40 }).map((_, i) => (
          <circle key={i} cx={(i * 8) % 320} cy={(i * 7) % 90} r="1" />
        ))}
      </g>
      <circle cx="50" cy="40" r="16" fill="#bfa56a" />
      <circle cx="74" cy="34" r="12" fill="#7a4a2b" />
      <circle cx="40" cy="58" r="10" fill="#5f1a23" />
      <text
        x="120"
        y="36"
        fontSize="11"
        fontWeight="800"
        fill="#5f1a23"
      >
        Nova UBM
      </text>
      <text
        x="120"
        y="56"
        fontSize="9"
        fill="#3d3d3d"
      >
        A Pesquisa e a Iniciação Científica no Ensino de Graduação
      </text>
      <text x="120" y="70" fontSize="8" fill="#3d3d3d">
        como instrumento de construção da autonomia intelectual
      </text>
      <text
        x="278"
        y="34"
        textAnchor="middle"
        fontSize="22"
        fontWeight="900"
        fill="#e58522"
      >
        VII
      </text>
      <text x="278" y="48" textAnchor="middle" fontSize="7" fill="#5f1a23">
        Seminário de Pesquisa
      </text>
      <text x="278" y="62" textAnchor="middle" fontSize="6" fill="#3d3d3d">
        22 a 24 de outubro
      </text>
    </svg>
  );
}

export function SeminarioExtensao(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 320 90" fill="none" {...props}>
      <rect width="320" height="90" rx="6" fill="#f5f1ea" />
      <text
        x="20"
        y="50"
        fontSize="38"
        fontWeight="900"
        fill="#e58522"
      >
        2º
      </text>
      <circle cx="80" cy="32" r="6" stroke="#e58522" strokeWidth="2" fill="none" />
      <line
        x1="86"
        y1="36"
        x2="92"
        y2="42"
        stroke="#e58522"
        strokeWidth="2"
      />
      <text x="100" y="32" fontSize="16" fontWeight="900" fill="#5f1a23">
        Seminário
      </text>
      <text x="100" y="52" fontSize="11" fontWeight="800" fill="#3d3d3d">
        de Ensino e Extensão
      </text>
      <text x="100" y="68" fontSize="9" fill="#5f1a23">
        Integração Curricular: Conectando Saberes e Práticas
      </text>
    </svg>
  );
}
