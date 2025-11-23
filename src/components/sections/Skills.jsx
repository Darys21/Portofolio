import React from 'react';
import Reveal from '../ui/Reveal';
import { BrainCircuit, BarChart3, Database, Server } from 'lucide-react';

const Skills = () => {
  return (
    <section id="skills" className="py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 flex justify-center items-center gap-3">
               Technical Arsenal
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-6 rounded-full"></div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Data Science */}
          <Reveal delay={100} className="md:col-span-2">
            <div className="h-full bg-white border border-slate-100 p-8 rounded-3xl hover:border-blue-200 transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <BrainCircuit size={120} className="text-blue-600" />
              </div>
              
              <div className="relative z-10">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition-transform duration-500">
                  <BrainCircuit size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Data Science & AI</h3>
                <p className="text-slate-500 mb-6 max-w-md">
                  Building intelligent systems using supervised & unsupervised learning, Deep Learning, and NLP architectures.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow', 'PyTorch', 'R', 'Scala'].map(tag => (
                    <span key={tag} className="px-3 py-1 bg-slate-50 rounded-full text-xs font-medium text-slate-600 border border-slate-200">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Analytics */}
          <Reveal delay={200} className="md:col-span-1">
            <div className="h-full bg-white border border-slate-100 p-8 rounded-3xl hover:border-indigo-200 transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 group">
              <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-6 text-indigo-600 group-hover:scale-110 transition-transform duration-500">
                <BarChart3 size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">BI & Analytics</h3>
              <p className="text-slate-500 mb-6 text-sm">
                Transforming raw data into visual stories that drive action.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Power BI', 'SQL', 'Excel (VBA)', 'Streamlit'].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-slate-50 rounded-full text-xs font-medium text-slate-600 border border-slate-200">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Data Engineering */}
          <Reveal delay={300} className="md:col-span-1">
             <div className="h-full bg-white border border-slate-100 p-8 rounded-3xl hover:border-cyan-200 transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-cyan-500/5 group">
              <div className="w-12 h-12 bg-cyan-50 rounded-xl flex items-center justify-center mb-6 text-cyan-600 group-hover:scale-110 transition-transform duration-500">
                <Database size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Data Engineering</h3>
              <p className="text-slate-500 mb-6 text-sm">
                Robust pipeline orchestration and database management.
              </p>
                 <div className="flex flex-wrap gap-2">
                  {['PostgreSQL', 'MySQL', 'ETL Pipelines', 'Apache Spark'].map(tag => (
                    <span key={tag} className="px-3 py-1 bg-slate-50 rounded-full text-xs font-medium text-slate-600 border border-slate-200">
                      {tag}
                    </span>
                  ))}
                </div>
            </div>
          </Reveal>

          {/* Tools & Cloud */}
          <Reveal delay={400} className="md:col-span-2">
            <div className="h-full bg-gradient-to-br from-slate-900 to-slate-800 text-white border border-slate-800 p-8 rounded-3xl relative overflow-hidden group">
              {/* Abstract shape in card */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center">
                <div className="flex-1">
                   <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-500">
                    <Server size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Cloud & DevOps Tools</h3>
                  <p className="text-slate-300">
                    Deploying and managing data applications with modern workflows.
                  </p>
                </div>
                <div className="flex-1 w-full">
                   <div className="grid grid-cols-2 gap-3">
                      <div className="bg-white/5 p-4 rounded-2xl border border-white/10 text-center hover:bg-white/10 transition-colors">
                        <span className="block text-lg font-bold">Docker</span>
                        <span className="text-xs text-slate-400">Containerization</span>
                      </div>
                       <div className="bg-white/5 p-4 rounded-2xl border border-white/10 text-center hover:bg-white/10 transition-colors">
                        <span className="block text-lg font-bold">Azure</span>
                        <span className="text-xs text-slate-400">DevOps</span>
                      </div>
                      <div className="bg-white/5 p-4 rounded-2xl border border-white/10 text-center hover:bg-white/10 transition-colors">
                        <span className="block text-lg font-bold">Git</span>
                        <span className="text-xs text-slate-400">Version Control</span>
                      </div>
                      <div className="bg-white/5 p-4 rounded-2xl border border-white/10 text-center hover:bg-white/10 transition-colors">
                        <span className="block text-lg font-bold">Agile</span>
                        <span className="text-xs text-slate-400">Workflow</span>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Skills;
