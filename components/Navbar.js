export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-line bg-bg/95 backdrop-blur">
      <div className="max-w-4xl mx-auto flex items-center justify-between px-6 py-5">
        <a href="#top" className="font-display text-lg font-semibold text-navy tracking-tight">
          Andreé Robles
        </a>
        <ul className="hidden sm:flex gap-8 text-sm text-navy-muted tracking-wide">
          <li>
            <a href="#proyectos" className="hover:text-accent transition-colors duration-200">
              Proyectos
            </a>
          </li>
          <li>
            <a href="#experiencia" className="hover:text-accent transition-colors duration-200">
              Experiencia
            </a>
          </li>
          <li>
            <a href="#habilidades" className="hover:text-accent transition-colors duration-200">
              Habilidades
            </a>
          </li>
          <li>
            <a href="#contacto" className="hover:text-accent transition-colors duration-200">
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}