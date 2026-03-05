type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string[];
};

export default function ProjectCard({
  title,
  description,
  technologies,
}: ProjectCardProps) {
  return (
    <article className="card flex h-full flex-col p-5">
      <h2 className="text-xl font-semibold text-[var(--brand)]">{title}</h2>
      <p className="mt-3 text-[var(--muted)]">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            className="rounded-full bg-[var(--brand-soft)] px-3 py-1 text-xs font-medium text-[var(--brand)]"
            key={tech}
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}
