type SkillCardProps = {
  category: string;
  skills: string[];
};

export default function SkillCard({ category, skills }: SkillCardProps) {
  return (
    <article className="card p-5">
      <h2 className="text-xl font-semibold text-[var(--brand)]">{category}</h2>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-[var(--muted)]">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </article>
  );
}
