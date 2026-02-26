import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-950 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] px-6">
      <div className="max-w-4xl border-2 border-emerald-500/30 p-10 bg-slate-900/50 backdrop-blur-md shadow-[0_0_50px_rgba(16,185,129,0.1)] relative overflow-hidden">
        
        {/* Corner Accents (Gaming UI Style) */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-emerald-500"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-emerald-500"></div>

        <div className="text-left font-mono">
          <p className="text-emerald-500 mb-2 uppercase tracking-widest animate-pulse">
            [ System Ready: Player_01 ]
          </p>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-4 uppercase italic">
            Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Name</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-slate-400 mb-8 border-l-4 border-emerald-500 pl-4">
            Level 20 Full-Stack Developer | CSE Year 3
          </h2>
          
          <div className="flex gap-4">
            <button className="bg-emerald-500 text-slate-950 font-bold px-6 py-3 uppercase hover:bg-emerald-400 hover:scale-105 transition-all">
              <Link to="/portfolio" className="hover:underline">Start Mission (Portfolio)</Link>
            </button>
            <button className="border border-emerald-500 text-emerald-500 px-6 py-3 uppercase hover:bg-emerald-500/10 transition-all">
              <a href="/resume.pdf" download="Shivam_Kumar's_resume.pdf">
                View Specs (Resume)
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;