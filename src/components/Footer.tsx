const Footer = () => {
  return (
    <footer className="bg-[#0a0808] px-6 pb-12 pt-8">
      <div className="mx-auto max-w-6xl border-t border-white/10 pt-8">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-gray-600">
          © {new Date().getFullYear()} Nur Mohammad. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
