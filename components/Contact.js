import { personalInfo } from '@/lib/data';

export default function Contact() {
  return (
    <section id="contacto" className="max-w-3xl mx-auto px-6 py-20">
      <h2 className="font-mono text-sm text-accent mb-2">Contacto</h2>
      <h3 className="font-display text-3xl font-bold text-navy mb-4">
        Hablemos
      </h3>
      <p className="text-navy-muted max-w-lg mb-8">
        Disponible para nuevas oportunidades como backend developer.
        Escríbeme por cualquiera de estos canales.
      </p>

      <div className="flex flex-col gap-3 font-mono text-sm">
        <a
          href={`mailto:${personalInfo.email}`}
          className="text-navy hover:text-accent transition-colors duration-200"
        >
          → {personalInfo.email}
        </a>
        <a
          href={`tel:${personalInfo.phone.replace(/\s/g, '')}`}
          className="text-navy hover:text-accent transition-colors duration-200"
        >
          → {personalInfo.phone}
        </a>
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-navy hover:text-accent transition-colors duration-200"
        >
          → {personalInfo.github}
        </a>
      </div>
    </section>
  );
}