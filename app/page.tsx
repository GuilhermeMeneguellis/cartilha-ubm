import BookViewer from "./components/BookViewer";

export default function Home() {
  return (
    <main className="flex-1 w-full flex flex-col items-center justify-center py-8 px-4">
      <header className="mb-6 text-center">
        <p className="text-[0.6rem] md:text-xs tracking-[0.4em] uppercase text-[var(--ubm-cream)]/60">
          Centro Universitário de Barra Mansa
        </p>
        <h1 className="font-serif text-2xl md:text-3xl text-[var(--ubm-cream)] mt-1">
          Cartilha do Núcleo de Pesquisa
        </h1>
        <p className="text-[var(--ubm-cream)]/70 text-xs md:text-sm mt-1 italic">
          Arraste o canto da página ou use os botões para folhear
        </p>
      </header>
      <BookViewer />
    </main>
  );
}
