import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-900/10 py-12 px-6 text-center font-mono">
      <p className="text-slate-500 text-xs uppercase mb-4 tracking-widest">
        End of Transmission // {new Date().getFullYear()}
      </p>
      <div className="flex justify-center gap-8 text-emerald-500">
        <a href="https://github.com" target="_blank" className="hover:text-white transition-colors">GITHUB</a>
        <a href="https://linkedin.com" target="_blank" className="hover:text-white transition-colors">LINKEDIN</a>
        <a href="mailto:your@email.com" className="hover:text-white transition-colors">EMAIL</a>
      </div>
    </footer>
  );
};
export default Footer;