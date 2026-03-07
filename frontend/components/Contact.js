import { useState } from 'react';
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await axios.post(`${API_URL}/api/contact`, form);
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  const links = [
    { label: 'GitHub', href: 'https://github.com/Coderkayc' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/kosi-casmir-ovaga' },
    { label: 'Email', href: 'mailto:valentinekosi2@gmail.com' },
    { label: 'X', href: 'https://x.com/Coderkayc' },
  ];

  return (
    <section id="contact" className="py-32 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-sans font-extrabold text-4xl md:text-5xl text-text mb-4">
          <span className="section-line" />
          Contact
        </h2>
        <p className="font-sans text-gray-300 mb-16 max-w-md">
          Have a project in mind or want to talk tech? My inbox is always open.
        </p>

        <div className="grid md:grid-cols-2 gap-16">
          <form onSubmit={handleSubmit} className="space-y-6">
            {['name', 'email'].map(field => (
              <div key={field}>
                <label className="font-mono text-xs text-gray-300 tracking-widest uppercase block mb-2">
                  {field}
                </label>
                <input
                  type={field === 'email' ? 'email' : 'text'}
                  required
                  value={form[field]}
                  onChange={e => setForm({ ...form, [field]: e.target.value })}
                  className="w-full bg-transparent border border-border px-4 py-3 font-mono text-sm text-text focus:outline-none focus:border-accent transition-colors"
                  placeholder={field === 'email' ? 'Your Email': 'Your Name'}
                />
              </div>
            ))}
            <div>
              <label className="font-mono text-xs text-gray-300 tracking-widest uppercase block mb-2">
                Message
              </label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                className="w-full bg-transparent border border-border px-4 py-3 font-mono text-sm text-text focus:outline-none focus:border-accent transition-colors resize-none"
                placeholder="Enter your message..."
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full py-3 bg-accent text-bg font-mono text-sm font-bold tracking-wider uppercase hover:bg-accent/80 transition-colors disabled:opacity-50"
            >
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p className="font-mono text-xs text-accent text-center">
                ✓ Message sent successfully!
              </p>
            )}
            {status === 'error' && (
              <p className="font-mono text-xs text-red-400 text-center">
                ✗ Something went wrong. Try again.
              </p>
            )}
          </form>

          <div className="space-y-8">
            <div>
              <h3 className="font-mono text-xs text-accent tracking-widest uppercase mb-6">
                Find Me Online
              </h3>
              <div className="space-y-4">
                {links.map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-8 h-px bg-border group-hover:w-16 group-hover:bg-accent transition-all duration-300" />
                    <span className="font-mono text-sm text-gray-300 group-hover:text-accent transition-colors">
                      {label}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className="border border-border p-6">
              <p className="font-mono text-xs text-gray-300 tracking-wider uppercase mb-2">
                Currently available for
              </p>
              <p className="font-sans text-text">Freelance &amp; Full-time roles</p>
              <div className="flex items-center gap-2 mt-4">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse inline-block" />
                <span className="font-mono text-xs text-accent">Open to work</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
