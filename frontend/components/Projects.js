import { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

// Fallback data if backend is not running
const fallbackProjects = [
  {
    _id: '1',
    title: 'E-Commerce REST API',
    description: 'Scalable REST API for an e-commerce platform with JWT auth, product management, and order processing.',
    tech: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Redis'],
    githubUrl: 'https://github.com',
    featured: true,
  },
  {
    _id: '2',
    title: 'Real-Time Chat App',
    description: 'WebSocket-powered chat application with rooms, typing indicators, and message persistence.',
    tech: ['Node.js', 'Socket.io', 'MongoDB', 'Next.js'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    featured: true,
  },
  {
    _id: '3',
    title: 'Task Management System',
    description: 'Full-stack task manager with role-based access control, team collaboration, and analytics dashboard.',
    tech: ['Next.js', 'Express', 'MongoDB', 'TailwindCSS'],
    githubUrl: 'https://github.com',
    featured: false,
  },
];

export default function Projects() {
  const [projects, setProjects] = useState(fallbackProjects);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${API_URL}/api/projects`)
      .then(res => {
        if (res.data.length > 0) setProjects(res.data);
      })
      .catch(() => {/* use fallback */})
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="projects" className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-sans font-extrabold text-4xl md:text-5xl text-text mb-16">
          <span className="section-line" />
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={project._id}
              className="border border-border p-6 group hover:border-accent transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-accent/3 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div className="flex justify-between items-start mb-4">
                <span className="font-mono text-xs text-gray-300">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {project.featured && (
                  <span className="font-mono text-xs text-accent border border-accent/30 px-2 py-0.5">
                    featured
                  </span>
                )}
              </div>

              <h3 className="font-sans font-bold text-xl text-text mb-3 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="font-sans text-sm text-gray-300 leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map(t => (
                  <span key={t} className="font-mono text-xs text-gray-300/70 bg-border px-2 py-1">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noreferrer"
                    className="font-mono text-xs text-gray-300 hover:text-accent transition-colors tracking-wider uppercase">
                    GitHub →
                  </a>
                )}
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer"
                    className="font-mono text-xs text-gray-300 hover:text-accent transition-colors tracking-wider uppercase">
                    Live →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
