export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="font-mono text-xs text-muted">
          Built with 💚
        </span>
        <span className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} Coderkayc. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
