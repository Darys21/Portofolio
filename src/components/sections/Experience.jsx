import React from 'react';
import Reveal from '../ui/Reveal';
import { Briefcase, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: "Automation Specialist",
      company: "Maersk",
      location: "Dakar, Sénégal",
      period: "Jan 2024 - Jan 2025",
      description: [
        "Designed a weekly ICX dashboard integrating multiple KPIs using Power BI and SQL.",
        "Implemented proactive monitoring of operational and financial performance.",
        "Collaborated with regional CX Managers to standardize performance indicators."
      ]
    },
    {
      role: "IT Support & Data Analysis Intern",
      company: "African Union Commission",
      location: "Addis Ababa, Ethiopia",
      period: "Jun 2023 - Sep 2023",
      description: [
        "Analyzed IPC data across 1,000+ healthcare facilities in Kenya using Python & Power BI.",
        "Produced epidemiological analysis reports contributing to public health initiatives.",
        "Provided daily IT support and proposed innovative system security solutions."
      ]
    }
  ];

  return (
    <section id="experience" className="py-32 relative z-10 bg-slate-50/50 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-6">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-16 flex items-center gap-4">
            <span className="p-3 bg-blue-100 rounded-xl text-blue-600"><Briefcase size={28} /></span>
            Work Experience
          </h2>
        </Reveal>

        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <Reveal key={idx} delay={idx * 100}>
              <div className="relative pl-8 md:pl-0 group">
                {/* Timeline Line (Desktop) */}
                <div className="hidden md:block absolute left-[25%] top-0 bottom-0 w-px bg-slate-200 group-last:bottom-auto group-last:h-0" />
                
                <div className="md:flex gap-12 items-start">
                  {/* Date Column */}
                  <div className="hidden md:block w-1/4 text-right pt-2 pr-8">
                    <span className="text-slate-500 font-medium text-sm">{exp.period}</span>
                  </div>

                  {/* Mobile Date */}
                  <div className="md:hidden mb-2 pl-6 border-l-2 border-blue-500 ml-[-34px]">
                    <span className="text-slate-500 font-medium text-sm">{exp.period}</span>
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 bg-white p-8 rounded-2xl border border-slate-100 hover:border-blue-200 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 relative">
                    {/* Timeline Dot */}
                    <div className="hidden md:block absolute top-8 -left-[55px] w-3 h-3 bg-white border-4 border-blue-600 rounded-full shadow-sm" />
                    
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">{exp.role}</h3>
                        <p className="text-lg text-blue-600 font-semibold mt-1">{exp.company}</p>
                      </div>
                      <div className="text-xs text-slate-400 flex items-center gap-1 bg-slate-50 px-2 py-1 rounded-full">
                        <MapPin size={14} /> {exp.location}
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-slate-600 text-sm flex items-start gap-3 leading-relaxed">
                          <span className="text-blue-400 mt-1.5">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
