import { useState, useEffect } from 'react';

const links = ['about', 'skills', 'projects', 'contact'];

const SunIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="5"/>
    <line x1="12" y1="1" x2="12" y2="3"/>
    <line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1" y1="12" x2="3" y2="12"/>
    <line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>
);

const MoonIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
);

const DownloadIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
);

export default function Navbar({ toggleTheme, theme }) {
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

  const navStyle = {
    backgroundColor: scrolled || menuOpen ? 'var(--bg)' : 'transparent',
    borderBottom: scrolled || menuOpen ? '1px solid var(--border)' : 'none',
    transition: 'all 0.3s ease',
  };

  return (
    <nav style={navStyle} className="fixed top-0 left-0 right-0 z-50 py-4 md:py-6 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" style={{ color: 'var(--accent)' }} className="font-mono text-sm tracking-widest uppercase">
          dev.portfolio
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {links.map(link => (
            <a key={link} href={`#${link}`}
              style={{ color: 'var(--muted)' }}
              className="font-mono text-xs tracking-wider uppercase hover:opacity-60 transition-opacity">
              {link}
            </a>
          ))}

          {/* Download CV button */}
          <a
            href="/cv.pdf"
            download="CV.pdf"
            style={{
              border: '1px solid var(--accent)',
              color: 'var(--accent)',
            }}
            className="flex items-center gap-2 px-3 py-1.5 font-mono text-xs tracking-wider uppercase hover:opacity-70 transition-opacity"
          >
            <DownloadIcon />
            CV
          </a>

          {/* Theme toggle */}
          <button onClick={toggleTheme}
            style={{ color: 'var(--muted)', border: '1px solid var(--border)' }}
            className="w-8 h-8 flex items-center justify-center hover:opacity-60 transition-opacity">
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>

        {/* Mobile right side */}
        <div className="md:hidden flex items-center gap-3">
          {/* Theme toggle */}
          <button onClick={toggleTheme}
            style={{ color: 'var(--muted)', border: '1px solid var(--border)' }}
            className="w-8 h-8 flex items-center justify-center">
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>

          {/* Hamburger */}
          <button className="flex flex-col gap-1.5 p-2" onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu">
            <span style={{ backgroundColor: 'var(--text)' }}
              className={`block w-5 h-px transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span style={{ backgroundColor: 'var(--text)' }}
              className={`block w-5 h-px transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span style={{ backgroundColor: 'var(--text)' }}
              className={`block w-5 h-px transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-72' : 'max-h-0'}`}>
        <div style={{ borderTop: '1px solid var(--border)' }} className="px-6 py-6 flex flex-col gap-5">
          {links.map(link => (
            <a key={link} href={`#${link}`}
              onClick={() => setMenuOpen(false)}
              style={{ color: 'var(--muted)' }}
              className="font-mono text-sm tracking-widest uppercase hover:opacity-60 transition-opacity">
              {link}
            </a>
          ))}

          {/* Download CV in mobile menu */}
          <a
          href="/cv.pdf"
            download="CV.pdf"
            onClick={() => setMenuOpen(false)}
            style={{
              border: '1px solid var(--accent)',
              color: 'var(--accent)',
            }}
            className="flex items-center gap-2 px-4 py-2.5 font-mono text-sm tracking-wider uppercase hover:opacity-70 transition-opacity w-fit">
            <DownloadIcon />
            Download CV
          </a>
        </div>
      </div>
    </nav>
  );
}