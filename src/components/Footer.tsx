import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12 text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Tagline */}
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="font-extrabold text-white text-base tracking-tight">
                {PERSONAL_INFO.fullName}
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-teal-500/10 text-teal-400 border border-teal-500/20">
                BSIT Portfolio
              </span>
            </div>
            <p className="text-slate-500 text-xs">
              {PERSONAL_INFO.school} • {PERSONAL_INFO.location}
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-4 text-xs font-medium text-slate-400">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#capstone" className="hover:text-white transition-colors">Capstone</a>
            <a href="#experience" className="hover:text-white transition-colors">OJT & Experience</a>
            <a href="#certifications" className="hover:text-white transition-colors">Certifications</a>
            <a href="#education" className="hover:text-white transition-colors">Education</a>
            <a href="#resume" className="hover:text-white transition-colors">Résumé</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 transition-all cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-teal-400" />
          </button>
        </div>

        {/* Sub-footer copyright */}
        <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-slate-500">
          <p>© {new Date().getFullYear()} Steven P. Fran. All rights reserved.</p>
          <p className="flex items-center gap-1 text-[11px]">
            Designed for 4th-Year BSIT Capstone & Industry Career Launch
          </p>
        </div>

      </div>
    </footer>
  );
};
