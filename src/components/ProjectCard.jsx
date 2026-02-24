const ProjectCard = ({ project }) => {
  return (
    <div className="border border-slate-700 bg-slate-900/40 p-6 relative group hover:border-emerald-500 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all duration-300">
      <div className="absolute top-0 right-0 p-2 bg-emerald-500 text-slate-950 text-xs font-bold uppercase">
        {project.rank}
      </div>

      <h3 className="text-2xl font-bold text-white mb-2 uppercase italic tracking-tighter">
        {project.title}
      </h3>
      
      <p className="text-emerald-400 text-xs font-mono mb-4">
        STATUS: {project.status} // TECH: {project.tech.join(", ")}
      </p>

      <p className="text-slate-400 text-sm mb-6 leading-relaxed border-l-2 border-slate-700 pl-4">
        {project.description}
      </p>

      <div className="flex justify-between items-center">
        <span className="text-yellow-400 text-xs font-mono uppercase tracking-widest">
          REWARD: {project.loot}
        </span>
        <a 
          href={project.link} 
          className="text-white border border-white px-4 py-1 text-xs uppercase hover:bg-white hover:text-slate-950 transition-all"
        >
          View Files
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;