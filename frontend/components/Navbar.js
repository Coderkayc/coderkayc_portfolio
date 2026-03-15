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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile on mount
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!isMobile) setMenuOpen(false);
  }, [isMobile]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const navBg = scrolled || menuOpen
    ? 'var(--bg)'
    : 'rgba(10,10,10,0.85)';

  return (
    <nav style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 9999,
      backgroundColor: navBg,
      borderBottom: scrolled || menuOpen ? '1px solid var(--border)' : 'none',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      transition: 'background-color 0.3s ease',
    }}>
      {/* Main bar */}
      <div style={{
        maxWidth: '1152px',
        margin: '0 auto',
        padding: '16px 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        {/* Logo */}
        <a href="#" style={{
          color: '#00ff87',
          fontFamily: 'sans-serif',
          fontSize: '14px',
          fontWeight: 'bold',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',  
          textDecoration: 'none',
        }}>
          Coderkayc
        </a>

        {/* Desktop links — hidden on mobile */}
        <div className="desktop-menu">
          <div style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
            {links.map(link => (
              <a key={link} href={`#${link}`} style={{
                color: '#00ff87',
                fontFamily: 'monospace',
                fontWeight: 'bold',
                fontSize: '11px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                textDecoration: 'none',
              }}>
                {link}
              </a>
            ))}

            <a href="/cv.pdf" download="CV.pdf" style={{
              border: '1px solid var(--accent)',
              color: '#00ff87',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 14px',
              fontFamily: 'monospace',
              fontWeight: 'bold',
              fontSize: '11px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              textDecoration: 'none',
            }}>
              <DownloadIcon /> CV
            </a>

            <button onClick={toggleTheme} style={{
              background: 'none',
              border: '1px solid var(--border)',
              color: '#00ff87',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}>
              {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            </button>
          </div>
        </div>

        {/* Mobile right side */}
        <div className="mobile-menu">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button onClick={toggleTheme} style={{
              background: 'none',
              border: '1px solid var(--border)',
              color: '#00ff87',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}>
              {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            </button>

            {/* Hamburger button */}
            <button
              onClick={() => setMenuOpen(prev => !prev)}
              aria-label="Toggle menu"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: '#00ff87',
                padding: '6px',
                display: 'flex',
                flexDirection: 'column',
                gap: '5px',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span style={{
                display: 'block',
                width: '24px',
                height: '2px',
                backgroundColor: 'var(--accent)',
                borderRadius: '2px',
                transition: 'all 0.3s ease',
                transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'rotate(0)',
              }} />
              <span style={{
                display: 'block',
                width: '24px',
                height: '2px',
                backgroundColor: 'var(--accent)',
                borderRadius: '2px',
                transition: 'all 0.3s ease',
                opacity: menuOpen ? 0 : 1,
                transform: menuOpen ? 'scaleX(0)' : 'scaleX(1)',
              }} />
              <span style={{
                display: 'block',
                width: '24px',
                height: '2px',
                backgroundColor: 'var(--accent)',
                borderRadius: '2px',
                transition: 'all 0.3s ease',
                transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'rotate(0)',
              }} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isMobile && (
        <div style={{
          overflow: 'hidden',
          maxHeight: menuOpen ? '400px' : '0px',
          transition: 'max-height 0.35s ease',
          backgroundColor: 'var(--bg)',
        }}>
          <div style={{
            borderTop: '1px solid var(--border)',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}>
            {links.map(link => (
              <a
                key={link}
                href={`#${link}`}
                onClick={() => setMenuOpen(false)}
                style={{
                  color: '#00ff87',
                  fontFamily: 'monospace',
                  fontSize: '15px',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                }}
              >
                {link}
              </a>
            ))}

            <a
              href="/cv.pdf"
              download="CV.pdf"
              onClick={() => setMenuOpen(false)}
              style={{
                border: '1px solid var(--accent)',
                color: '#00ff87',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 18px',
                fontFamily: 'monospace',
                fontSize: '13px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                width: 'fit-content',
              }}
            >
              <DownloadIcon /> Download CV
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}