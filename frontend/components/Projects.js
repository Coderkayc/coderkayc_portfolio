import { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

const fallbackProjects = [
  {
    _id: '1',
    title: 'Attendance System',
    description: 'A full-stack QR-code based attendance management system built for the University of Nigeria, Nsukka (UNN). The system enables lecturers to generate attendance sessions using QR codes, students to mark attendance securely, and administrators to manage courses and generate attendance reports.',
    tech: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Next.js', 'TailwindCSS'],
    githubUrl: 'https://github.com/Coderkayc/Attendance-System',
    liveUrl: 'https://attendance-system-rho-virid.vercel.app',
    featured: true,
  },
  {
    _id: '2',
    title: 'Luminest Africa',
    description: 'LUMINEST AFRICA is a web app that helps Nigerian households track and understand what they spend on electricity — across NEPA prepaid tokens, generator diesel, and solar top-ups — all in one place. It provides insights into energy consumption patterns, helps users optimize their electricity usage, and ultimately saves them money.',
    tech: ['Node.js', 'Express', 'MongoDB', 'Next.js', 'TypeScript', 'TailwindCSS'],
    githubUrl: 'https://github.com/Coderkayc/LUMINEST-AFRICA',
    liveUrl: 'https://luminestafrica.vercel.app/',
    featured: true,
  },
  {
    _id: '3',
    title: 'Task Management System',
    description: 'Full-stack task manager with role-based access control, team collaboration, and analytics dashboard.',
    tech: ['Next.js', 'Express', 'MongoDB', 'TailwindCSS'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://task-management-system.vercel.app',
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
      .catch(() => {})
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
