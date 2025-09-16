import { skills } from "@/data/skills";
import { Chip } from "@/components/ui/Chip";

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((s) => (
            <Chip key={s.name} className="font-mono">{s.name}</Chip>
          ))}
        </div>
      </div>
    </section>
  );
}
