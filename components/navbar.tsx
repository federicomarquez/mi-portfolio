import Link from "next/link";

export function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/30 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link
          href="/"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/[0.06]"
        >
          FM
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-zinc-300 sm:flex">
          <Link href="/#about" className="transition hover:text-white">
            Sobre mí
          </Link>
          <Link href="/projects" className="transition hover:text-white">
            Proyectos
          </Link>
          <Link href="/#learning" className="transition hover:text-white">
            Aprendizaje
          </Link>
          <Link href="/#contact" className="transition hover:text-white">
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  );
}