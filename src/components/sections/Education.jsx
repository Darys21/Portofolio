import React from 'react';
import Reveal from '../ui/Reveal';
import { Globe } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 relative z-10">
      <div className="max-w-4xl mx-auto px-6">
        <Reveal>
          <h2 className="text-3xl font-bold text-slate-900 mb-10 flex items-center gap-3">
             <span className="p-3 bg-blue-100 rounded-xl text-blue-600"><Globe size={24} /></span>
             Education
          </h2>
        </Reveal>
        
        <div className="space-y-6">
           <Reveal delay={100}>
             <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col sm:flex-row justify-between gap-4 hover:border-blue-200 transition-colors">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Master 2 Data Science and AI</h3>
                  <p className="text-blue-600 font-semibold">Dakar Institute of Technology</p>
                  <p className="text-sm text-slate-500 mt-2">Deep Learning, Machine Learning, Data Wrangling, NLP, Reinforcement Learning.</p>
                </div>
                <div className="text-right min-w-max">
                  <span className="px-3 py-1 bg-slate-100 rounded-full text-slate-600 font-medium text-xs block">Jan 2025 - Dec 2025</span>
                </div>
             </div>
           </Reveal>

           <Reveal delay={200}>
             <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col sm:flex-row justify-between gap-4 hover:border-blue-200 transition-colors">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Bachelor's Degree Software Engineering</h3>
                  <p className="text-blue-600 font-semibold">Supdeco Dakar</p>
                  <p className="text-sm text-slate-500 mt-2">Algorithm, Web Development, UML, Agile Method, Database. GPA: 16/20</p>
                </div>
                <div className="text-right min-w-max">
                   <span className="px-3 py-1 bg-slate-100 rounded-full text-slate-600 font-medium text-xs block">Nov 2020 - Oct 2023</span>
                </div>
             </div>
           </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Education;
