import { projects } from '@/lib/data';

export default function Projects() {
  return (
    <section id="proyectos" className="max-w-3xl mx-auto px-6 py-20">
      <h2 className="font-mono text-sm text-accent mb-2">Proyectos</h2>
      <h3 className="font-display text-3xl font-bold text-navy mb-12">
        Lo que he construido
      </h3>

      <div className="space-y-8">
        {projects.map((project) => (
          <article
            key={project.id}
            className="border border-line rounded-2xl p-6 sm:p-8 bg-surface"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
              <h4 className="font-display text-xl font-bold text-navy">
                {project.name}
              </h4>
              {project.moduleCount && (
                <span className="font-mono text-xs text-accent">
                  {project.moduleCount}+ módulos · {project.year}
                </span>
              )}
            </div>

            <p className="text-navy-muted text-sm mb-4">{project.subtitle}</p>

            <p className="text-navy leading-relaxed mb-6">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs px-2.5 py-1 border border-line rounded-full text-navy-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}