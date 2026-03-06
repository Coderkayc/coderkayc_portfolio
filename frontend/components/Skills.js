const skillGroups = [
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Express.js', level: 88 },
      { name: 'REST API Design', level: 92 },
      { name: 'WebSockets', level: 75 },
    ],
  },
  {
    category: 'Database',
    skills: [
      { name: 'MongoDB', level: 87 },
      { name: 'Mongoose ODM', level: 85 },
      { name: 'Redis', level: 70 },
      { name: 'PostgreSQL', level: 65 },
    ],
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'Next.js', level: 78 },
      { name: 'React', level: 75 },
      { name: 'TailwindCSS', level: 80 },
      { name: 'TypeScript', level: 70 },
    ],
  },
  {
    category: 'DevOps & Tools',
    skills: [
      { name: 'Docker', level: 72 },
      { name: 'Git & GitHub', level: 90 },
      { name: 'Linux / Bash', level: 78 },
      { name: 'CI/CD (GitHub Actions)', level: 68 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-sans font-extrabold text-4xl md:text-5xl text-text mb-16">
          <span className="section-line" />
          Skills & Stack
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {skillGroups.map(({ category, skills }) => (
            <div key={category}>
              <h3 className="font-mono text-xs text-accent tracking-widest uppercase mb-6">
                {category}
              </h3>
              <div className="space-y-4">
                {skills.map(({ name, level }) => (
                  <div key={name}>
                    <div className="flex justify-between font-mono text-sm mb-2">
                      <span className="text-text">{name}</span>
                      <span className="text-gray-400">{level}%</span>
                    </div>
                    <div className="h-px bg-border overflow-hidden">
                      <div
                        className="h-full bg-accent transition-all duration-1000"
                        style={{ width: `${level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
