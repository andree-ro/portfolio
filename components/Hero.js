import { personalInfo } from '@/lib/data';
export default function Hero() {
  return (
    <header id="top" className="pt-40 px-6 pb-24 max-w-3xl mx-auto text-center">
      <p className="font-mono text-sm text-accent mb-4">{personalInfo.role}</p>

      <h1 className="font-display text-4xl sm:text-5xl font-bold text-navy leading-tight">
        {personalInfo.fullName}
      </h1>

      <p className="text-navy-muted mt-3">{personalInfo.location}</p>

      <p className="text-navy-muted mt-6 leading-relaxed">
        {personalInfo.bio}
      </p>

      <div className="flex justify-center gap-4 mt-8">
        <a
          href={`mailto:${personalInfo.email}`}
          className="px-6 py-2.5 bg-navy text-bg text-sm rounded-full hover:bg-accent transition-colors duration-200"
        >
          Contactarme
        </a>
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2.5 border border-line text-navy text-sm rounded-full hover:border-accent hover:text-accent transition-colors duration-200"
        >
          GitHub
        </a>
      </div>
    </header>
  );
}