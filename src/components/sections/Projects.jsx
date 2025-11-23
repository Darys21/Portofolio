import React from 'react';
import Reveal from '../ui/Reveal';
import ProjectCard from '../ui/ProjectCard';
import { ArrowRight, BrainCircuit, Code2, Database } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Multimodal RAG",
      description: "Designed and implemented a multimodal Retrieval-Augmented Generation (RAG) framework leveraging a knowledge graph for processing both text and image data effectively.",
      tags: ["Python", "Knowledge Graph", "NLP", "AI"],
      icon: <BrainCircuit size={24} />
    },
    {
      title: "Wave2Vec-BERT Analysis",
      description: "Developed an automatic sentiment detection system for voice calls. Combines Speech-to-Text (Wav2Vec 2.0) for transcription and BERT for sentiment classification (French/English).",
      tags: ["PyTorch", "Wav2Vec", "BERT", "Speech-to-Text"],
      icon: <Code2 size={24} />
    },
    {
      title: "Chinook SQL Analytics",
      description: "Built a comprehensive SQL-based analytics framework to extract and aggregate sales data from the Chinook database. Automates reporting on customer purchases and product trends.",
      tags: ["SQL", "Data Analytics", "Business Intelligence"],
      icon: <Database size={24} />
    }
  ];

  return (
    <section id="projects" className="py-32 relative z-10 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Featured Projects</h2>
            <p className="text-slate-500 max-w-lg">
              A selection of my work in Data Science, AI, and Analytics.
            </p>
          </Reveal>
          <Reveal delay={200}>
             <a href="https://github.com/Darys21" target="_blank" className="hidden md:flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors mt-6 md:mt-0">
               View GitHub Profile <ArrowRight size={16} />
             </a>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Reveal key={index} delay={index * 150}>
              <ProjectCard {...project} />
            </Reveal>
          ))}
        </div>
        
        <div className="mt-12 md:hidden text-center">
           <a href="https://github.com/Darys21" className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors">
               View GitHub <ArrowRight size={16} />
           </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
