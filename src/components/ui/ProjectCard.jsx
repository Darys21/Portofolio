import React from 'react';
import { Github } from 'lucide-react';

const ProjectCard = ({ title, tags, description, icon }) => {
  return (
    <div className="group relative rounded-3xl overflow-hidden bg-white border border-slate-100 hover:border-blue-200 transition-all duration-300 h-full flex flex-col shadow-sm hover:shadow-2xl hover:shadow-blue-500/10">
      
      <div className="p-8 flex flex-col h-full relative z-10">
        <div className="flex justify-between items-start mb-6">
          <div className="p-3 bg-blue-50 rounded-xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
            {icon}
          </div>
          <div className="flex gap-3">
            <a href="https://github.com/Darys21" target="_blank" className="text-slate-400 hover:text-slate-900 transition-colors">
              <Github size={20} />
            </a>
          </div>
        </div>
        
        <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{title}</h3>
        <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
          {tags.map((tag, i) => (
            <span key={i} className="text-xs font-medium text-slate-500 bg-slate-50 px-2 py-1 rounded-md">#{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
