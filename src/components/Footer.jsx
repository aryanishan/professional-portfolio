import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Footer() {
  const ref = useScrollReveal({ threshold: 0.2 });

  return (
    <footer className="px-6 py-10" ref={ref}>
      <div
        data-reveal
        className="reveal max-w-6xl mx-auto border-t pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm"
        style={{ borderColor: 'var(--border)' }}
      >
        <p style={{ color: 'var(--text-muted)' }}>
          Designed and built by <span style={{ color: 'var(--text)', fontWeight: 600 }}>Aryan Gupta</span>
        </p>
        <p style={{ color: 'var(--text-muted)' }}>
          React · Tailwind CSS · Vite · {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
