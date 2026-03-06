export default function About() {
  const stats = [
    { label: 'Years Experience', value: '3+' },
    { label: 'Projects Shipped', value: '20+' },
    { label: 'APIs Built', value: '15+' },
    { label: 'Cups of Coffee', value: '∞' },
  ];

  return (
    <section id="about" className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="font-sans font-extrabold text-4xl md:text-5xl text-text mb-8">
              <span className="section-line" />
              About Me
            </h2>
            <div className="space-y-4 font-sans text-gray-300 leading-relaxed">
              <p>
                I'm a backend developer with a passion for building clean, efficient,
                and well-documented APIs. My stack centers around <span className="text-accent">Node.js</span>,{' '}
                <span className="text-accent">Express</span>, and <span className="text-accent">MongoDB</span> —
                tools I've used to ship production systems serving thousands of users.
              </p>
              <p>
                I care about system design, code quality, and developer experience.
                Whether it's designing a RESTful API, optimizing database queries,
                or setting up CI/CD pipelines — I love the craft.
              </p>
              <p>
                When I'm not coding, I'm reading about distributed systems,
                contributing to open-source, or exploring new backend technologies.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map(({ label, value }) => (
              <div key={label} className="border border-border p-6 hover:border-accent transition-colors group">
                <div className="font-mono text-4xl font-bold text-accent group-hover:scale-110 transition-transform inline-block mb-2">
                  {value}
                </div>
                <div className="font-mono text-xs text-gray-300 tracking-wider uppercase">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
