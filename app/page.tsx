import BookViewer from "./components/BookViewer";

export default function Home() {
  return (
    <main className="flex-1 w-full flex flex-col items-center justify-center py-2 sm:py-6 px-2 sm:px-4">
      <header className="mb-2 sm:mb-4 text-center">
        <p className="hidden sm:block text-[0.6rem] md:text-xs tracking-[0.4em] uppercase text-[var(--ubm-cream)]/60">
          Centro Universitário de Barra Mansa
        </p>
        <h1 className="font-serif text-sm sm:text-2xl md:text-3xl text-[var(--ubm-cream)]/95 sm:mt-1 leading-tight">
          Cartilha do Núcleo de Pesquisa
        </h1>
        <p className="hidden md:block text-[var(--ubm-cream)]/70 text-xs md:text-sm mt-1 italic">
          Use as setas do teclado, deslize ou toque nos botões para navegar
        </p>
      </header>
      <BookViewer />
    </main>
  );
}
