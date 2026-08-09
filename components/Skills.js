import { skills } from '@/lib/data';

const categories = [
  { label: 'Backend', items: skills.backend },
  { label: 'Frontend', items: skills.frontend },
  { label: 'Herramientas', items: skills.tools },
];

export default function Skills() {
  return (
    <section id="habilidades" className="max-w-3xl mx-auto px-6 py-20">
      <h2 className="font-mono text-sm text-accent mb-2">Habilidades</h2>
      <h3 className="font-display text-3xl font-bold text-navy mb-12">
        Con qué trabajo
      </h3>

      <div className="grid sm:grid-cols-3 gap-8">
        {categories.map((category) => (
          <div key={category.label}>
            <p className="font-mono text-xs text-accent mb-3 uppercase tracking-wide">
              {category.label}
            </p>
            <div className="flex flex-wrap gap-2">
              {category.items.map((skill) => (
                <span
                  key={skill}
                  className="font-mono text-xs px-2.5 py-1 border border-line rounded-full text-navy-muted"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}