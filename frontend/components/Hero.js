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
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 animate-fade-up"
  style={{ animationDelay: '0.4s', opacity: 0 }}>
  <a href="#projects"
    style={{ backgroundColor: 'var(--accent)', color: 'var(--bg)' }}
    className="px-6 py-3 font-mono text-sm font-bold tracking-wider uppercase text-center transition-opacity hover:opacity-80">
    View Work
  </a>
  <a href="#contact"
    style={{ border: '1px solid var(--border)', color: 'var(--text)' }}
    className="px-6 py-3 font-mono text-sm tracking-wider uppercase text-center transition-colors">
    Contact Me
  </a>
  <a href="/cv.pdf"
    download="YourName_CV.pdf"
    style={{ border: '1px solid var(--accent)', color: 'var(--accent)' }}
    className="px-6 py-3 font-mono text-sm tracking-wider uppercase text-center transition-opacity hover:opacity-70 flex items-center justify-center gap-2"
  >
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
      <polyline points="7 10 12 15 17 10"/>
      <line x1="12" y1="15" x2="12" y2="3"/>
    </svg>
    Download CV
  </a>
</div>
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
