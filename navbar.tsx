export function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/30 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a
          href="#"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-sm font-semibold text-white"
        >
          FM
        </a>

        <nav className="hidden items-center gap-6 text-sm text-zinc-300 sm:flex">
          <a href="#about" className="transition hover:text-white">
            Sobre mí
          </a>
          <a href="#projects" className="transition hover:text-white">
            Proyectos
          </a>
          <a href="#learning" className="transition hover:text-white">
            Aprendizaje
          </a>
          <a href="#contact" className="transition hover:text-white">
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
}