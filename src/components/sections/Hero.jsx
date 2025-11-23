import React from 'react';
import Reveal from '../ui/Reveal';
import { Quote, ArrowRight, Github, Linkedin } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold mb-8 uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            Data Scientist • Dakar, SN
          </div>
        </Reveal>

        <Reveal delay={200}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-slate-900 mb-8 leading-[1.1]">
            Transforming Data into <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Actionable Strategy
            </span>
          </h1>
        </Reveal>

        {/* The Devise (Motto) - Styled based on reference */}
        <Reveal delay={300}>
          <div className="relative py-8 my-8 max-w-2xl mx-auto">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 text-blue-100 opacity-50">
              <Quote size={80} fill="currentColor" />
            </div>
            <p className="relative z-10 text-xl md:text-2xl font-medium text-slate-700 italic leading-relaxed">
              "A Data point that makes sense beats a dashboard that dazzles."
            </p>
          </div>
        </Reveal>

        <Reveal delay={400}>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            I am Joan-Yves Darys Anguilet. Passionate about Python, SQL, and Power BI. 
            I build systems that clean, analyze, and visualize complex data to drive smarter decisions.
          </p>
        </Reveal>

        <Reveal delay={600}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#projects" className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-all flex items-center justify-center gap-2 group shadow-[0_10px_40px_-10px_rgba(37,99,235,0.5)]">
              View Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="https://github.com/Darys21" target="_blank" rel="noreferrer" className="w-full sm:w-auto px-8 py-4 bg-white border border-slate-200 text-slate-700 font-bold rounded-full hover:bg-slate-50 transition-colors flex items-center justify-center gap-2 shadow-sm hover:shadow-md">
              <Github size={20} />
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/joan-yves-anguilet-a86a19300/" target="_blank" rel="noreferrer" className="w-full sm:w-auto px-8 py-4 bg-white border border-slate-200 text-blue-700 font-bold rounded-full hover:bg-blue-50 transition-colors flex items-center justify-center gap-2 shadow-sm hover:shadow-md">
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;
