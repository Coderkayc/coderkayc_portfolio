import { useEffect, useState } from 'react';

const roles = ['Backend Developer', 'API Architect', 'MongoDB Expert'];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((roleIndex + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(#00ff87 1px, transparent 1px), linear-gradient(90deg, #00ff87 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 py-32 relative z-10">
        <p className="font-mono text-accent text-sm tracking-widest mb-6 animate-fade-up">
          Hello, World. I'm
        </p>
        <h1 className="font-sans font-extrabold text-6xl md:text-8xl text-text mb-4 leading-none animate-fade-up"
          style={{ animationDelay: '0.1s', opacity: 0 }}>
           Ovaga Kosi 
        </h1>
        <div className="flex items-center gap-3 mb-8 animate-fade-up"
          style={{ animationDelay: '0.2s', opacity: 0 }}>
          <span className="font-mono text-2xl md:text-3xl text-muted">/</span>
          <span className="font-mono text-xl md:text-2xl text-accent">
            {displayed}<span className="animate-blink">_</span>
          </span>
        </div>
        <p className="font-sans text-gray-300 text-lg max-w-xl leading-relaxed mb-12 animate-fade-up"
          style={{ animationDelay: '0.3s', opacity: 0 }}>
          I build robust, scalable backend systems. Specializing in REST APIs,
          microservices, and database architecture using Node.js, Express & MongoDB.
        </p>
        <div className="flex gap-4 animate-fade-up" style={{ animationDelay: '0.4s', opacity: 0 }}>
          <a href="#projects"
            className="px-6 py-3 bg-accent text-bg font-mono text-sm font-bold tracking-wider uppercase hover:bg-accent/80 transition-colors">
            View Work
          </a>
          <a href="#contact"
            className="px-6 py-3 border border-border text-text font-mono text-sm tracking-wider uppercase hover:border-accent hover:text-accent transition-colors">
            Contact Me
          </a>
        </div>
      </div>
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4">
        <div className="h-24 w-px bg-gradient-to-b from-transparent to-accent" />
        <span className="font-mono text-xs text-muted tracking-[0.3em] rotate-90 whitespace-nowrap">
          SCROLL DOWN
        </span>
      </div>
    </section>
  );
}
