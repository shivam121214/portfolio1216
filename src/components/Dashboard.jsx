import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// Import Projects once we build it
import Stats from "../components/Stats.jsx";
import LoadingScreen from '../components/LoadingScreen.jsx';
import TechStack from '../components/TechStack.jsx';
import ProjectCard from './ProjectCard';
import { projects } from '../data/Projects.js';
import Timeline from './Timeline.jsx';

const Dashboard = () => {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <LoadingScreen onFinished={() => setLoading(false)} />;
  }
  return (
    <div className="animate-in fade-in duration-1000">
      <nav className="p-6 border-b border-emerald-500/20 text-emerald-500 font-mono">
        <Link to="/" className="hover:underline">BACK_TO_MENU</Link>
      </nav>
      
      <main className="max-w-6xl mx-auto py-12 px-6" >
        <Stats />
        <TechStack/>
        <Timeline/>

        <section className="mt-20">
          <h2 className="text-3xl text-emerald-400 mb-10 uppercase tracking-tighter">
            &gt; MISSION_LOG
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

      </main>
    </div>
  );
};

export default Dashboard;