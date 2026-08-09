export default function Footer() {
  return (
    <footer className="max-w-3xl mx-auto px-6 py-10 text-center">
      <p className="font-mono text-xs text-navy-muted">
        Construido con Next.js y Tailwind CSS · {new Date().getFullYear()}
      </p>
    </footer>
  );
}