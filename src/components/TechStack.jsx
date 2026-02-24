import React from 'react';
import { techStack } from '../data/techData';

const TechStack = () => {
  return (
    <section className="py-16 px-6 font-mono">
      <h2 className="text-3xl text-emerald-500 mb-12 uppercase tracking-tighter">
        &gt; TECH_SPECIFICATIONS
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {techStack.map((group, idx) => (
          <div key={idx} className="border border-slate-800 bg-slate-900/20 p-6 rounded-sm relative">
            {/* HUD Corner Decor */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-emerald-500"></div>
            
            <h3 className="text-emerald-400 mb-6 text-sm uppercase tracking-widest border-b border-slate-800 pb-2">
              {group.category}
            </h3>

            <div className="space-y-6">
              {group.items.map((tech, i) => (
                <div key={i}>
                  <div className="flex justify-between text-xs mb-2">
                    <span className="text-slate-300">{tech.icon} {tech.name}</span>
                    <span className="text-emerald-500">{tech.level}%</span>
                  </div>
                  {/* Progress Bar (XP Bar Style) */}
                  <div className="h-1.5 bg-slate-800 w-full overflow-hidden">
                    <div 
                      className="h-full bg-emerald-500 shadow-[0_0_8px_#10b981] transition-all duration-1000"
                      style={{ width: `${tech.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;