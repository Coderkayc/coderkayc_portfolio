import '../styles/globals.css';
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.className = 'cursor';
    const follower = document.createElement('div');
    follower.className = 'cursor-follower';
    document.body.appendChild(cursor);
    document.body.appendChild(follower);

    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.left = mouseX - 5 + 'px';
      cursor.style.top = mouseY - 5 + 'px';
    });

    const animate = () => {
      followerX += (mouseX - followerX) * 0.12;
      followerY += (mouseY - followerY) * 0.12;
      follower.style.left = followerX - 16 + 'px';
      follower.style.top = followerY - 16 + 'px';
      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cursor.remove();
      follower.remove();
    };
  }, []);

  return <Component {...pageProps} />;
}
