import { experience } from '@/lib/data';

export default function Experience() {
  return (
    <section id="experiencia" className="max-w-3xl mx-auto px-6 py-20">
      <h2 className="font-mono text-sm text-accent mb-2">Experiencia</h2>
      <h3 className="font-display text-3xl font-bold text-navy mb-12">
        Dónde he trabajado
      </h3>

      <div className="space-y-10">
        {experience.map((job) => (
          <article key={job.id}>
            <div className="ledger-line mb-1">
              <span className="font-display font-bold text-lg text-navy">
                {job.company}
              </span>
              <span className="leader" />
              <span className="font-mono text-xs text-accent whitespace-nowrap">
                {job.period}
              </span>
            </div>

            <p className="text-navy-muted text-sm mb-3">{job.role}</p>

            <ul className="space-y-1.5">
              {job.points.map((point, index) => (
                <li
                  key={index}
                  className="text-navy text-sm leading-relaxed pl-4 relative"
                >
                  <span className="absolute left-0 text-accent">
                    &#8250;
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}