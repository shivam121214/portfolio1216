const Stats = () => {
  const skills = [
    { name: "Frontend (React/Tailwind)", level: "90%" },
    { name: "Backend (Node/Express)", level: "85%" },
    { name: "Database (MongoDB)", level: "80%" },
    { name: "Languages (Java/C++)", level: "75%" },
  ];

  return (
    <section id="stats" className="py-20 bg-slate-950 px-6 font-mono">
      <div className="max-w-4xl mx-auto border border-slate-800 p-8 bg-slate-900/30">
        <h2 className="text-3xl text-emerald-400 mb-10 uppercase tracking-tighter">
          &gt; Current_Stats
        </h2>
        
        <div className="grid gap-8">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-2">
                <span className="text-slate-300 uppercase">{skill.name}</span>
                <span className="text-emerald-400">{skill.level}</span>
              </div>
              <div className="h-4 bg-slate-800 border border-slate-700 overflow-hidden">
                <div 
                  className="h-full bg-emerald-500 shadow-[0_0_10px_#10b981]" 
                  style={{ width: skill.level }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;