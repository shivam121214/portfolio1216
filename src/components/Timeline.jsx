import React from 'react';
import { timelineData } from '../data/timelineData';

const Timeline = () => {
  return (
    <section className="py-20 px-6 font-mono">
      <h2 className="text-3xl text-emerald-500 mb-12 uppercase tracking-tighter">
        &gt; CHRONOLOGY_LOG
      </h2>
      
      <div className="relative border-l-2 border-slate-800 ml-4 space-y-12">
        {timelineData.map((item, index) => (
          <div key={index} className="relative pl-8">
            {/* The "Node" on the timeline */}
            <div className="absolute -left-[9px] top-1 w-4 h-4 bg-slate-950 border-2 border-emerald-500 rounded-full shadow-[0_0_8px_#10b981]"></div>
            
            <span className="text-emerald-500 text-sm font-bold">{item.year}</span>
            <h3 className="text-xl text-white font-bold uppercase italic mt-1">{item.title}</h3>
            <p className="text-slate-400 mt-2 max-w-xl text-sm leading-relaxed">
              {item.description}
            </p>
            <div className="mt-3 text-[10px] text-yellow-500 uppercase tracking-widest bg-yellow-500/10 w-fit px-2 py-1 rounded border border-yellow-500/20">
              Achievement Unlocked: {item.milestone}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;