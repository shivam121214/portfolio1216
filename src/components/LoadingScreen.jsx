import React, { useState, useEffect } from 'react';

const LoadingScreen = ({ onFinished }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onFinished, 500); // Small delay for effect
          return 100;
        }
        return prev + 5;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [onFinished]);

  return (
    <div className="fixed inset-0 bg-slate-950 flex flex-col items-center justify-center z-50 font-mono text-emerald-500">
      <div className="w-64 border border-emerald-500 p-1 mb-4">
        <div 
          className="h-4 bg-emerald-500 transition-all duration-100 shadow-[0_0_15px_#10b981]" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="animate-pulse uppercase tracking-widest text-xs">
        Initializing_System... {progress}%
      </p>
    </div>
  );
};

export default LoadingScreen;