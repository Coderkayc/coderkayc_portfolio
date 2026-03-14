import { useState, useEffect } from 'react';

const links = ['about', 'skills', 'projects', 'contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled || menuOpen ? 'py-4 bg-bg/95 backdrop-blur border-b border-border' : 'py-6'
    }`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="font-bold text-accent text-sm tracking-widest uppercase">
          Coderkayc
        </a>

        <div className="hidden md:flex gap-8">
          {links.map(link => (
            <a key={link} href={`#${link}`}
              className="font-mono text-xs text-muted hover:text-accent transition-colors tracking-wider uppercase">
              {link}
            </a>
          ))}
        </div>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu">
          <span className={`block w-5 h-px bg-text transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-5 h-px bg-text transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
          <span className={`block w-5 h-px bg-text transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </div>

      <div className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-64' : 'max-h-0'}`}>
        <div className="px-6 py-6 flex flex-col gap-5 border-t border-border">
          {links.map(link => (
            <a key={link} href={`#${link}`}
              onClick={() => setMenuOpen(false)}
              className="font-mono text-sm text-muted hover:text-accent transition-colors tracking-widest uppercase">
              {link}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
