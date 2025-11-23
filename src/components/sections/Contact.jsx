import React from 'react';
import Reveal from '../ui/Reveal';
import { Mail, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden z-10">
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <Reveal>
          <div className="bg-slate-900 rounded-[3rem] p-8 md:p-16 text-center overflow-hidden relative shadow-2xl">
            {/* Background decoration in card */}
            <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 relative z-10">Let's Connect</h2>
            <p className="text-slate-300 text-lg mb-10 max-w-xl mx-auto relative z-10">
              I'm currently available for opportunities in Data Science and Engineering.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
              <a href="mailto:yvesanguilet6@gmail.com" className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-lg hover:shadow-blue-600/40">
                <Mail size={20} />
                Email Me
              </a>
              <a href="https://www.linkedin.com/in/joan-yves-anguilet-a86a19300/" target="_blank" className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur border border-white/20 text-white font-bold rounded-full hover:bg-white/20 transition-colors flex items-center justify-center gap-2">
                <Linkedin size={20} />
                LinkedIn
              </a>
            </div>
            <div className="mt-8 text-slate-400 text-sm relative z-10">
               +221 76 738 9672 • Dakar, SN
            </div>
          </div>
        </Reveal>

        <Reveal delay={200}>
           <p className="text-center text-slate-400 text-sm mt-16">
             © 2025 Joan-Yves Darys Anguilet. Built with React.
           </p>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
