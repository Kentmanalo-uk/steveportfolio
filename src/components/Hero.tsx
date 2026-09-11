import React from 'react';
import {
  FileDown,
  FolderGit2,
  Send,
  MapPin,
  GraduationCap,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Camera,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { PhotoUploader } from './PhotoUploader';
import { useProfilePhoto } from '../context/PhotoContext';

interface HeroProps {
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  const { photoUrl } = useProfilePhoto();
  return (
    <section
      id="home"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden"
    >
      {/* Subtle Background Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-teal-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[250px] bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Main Hero Content */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-slate-300 text-xs shadow-inner">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-medium text-slate-200">
                4th-Year BSIT Student • Capstone Defended
              </span>
            </div>

            {/* Headline with Greeting */}
            <div className="space-y-2">
              <p className="text-teal-400 font-semibold tracking-wider text-xs uppercase font-mono">
                Welcome to my portfolio
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-emerald-300 to-cyan-400">{PERSONAL_INFO.fullName}</span>
              </h1>
              <h2 className="text-xl sm:text-2xl font-medium text-slate-300">
                {PERSONAL_INFO.title}
              </h2>
            </div>

            {/* Tagline & Intro matching prompt instructions */}
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl">
              I am an aspiring IT professional from <span className="text-slate-200 font-medium">{PERSONAL_INFO.school}</span> in <span className="text-slate-200 font-medium">{PERSONAL_INFO.location}</span>. Passionate about building simple, useful systems and eager to start my career in IT. Ready to contribute in software development, database design, and technical support.
            </p>

            {/* Quick Meta Badges */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 pt-1">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800">
                <GraduationCap className="w-4 h-4 text-teal-400" />
                <span>{PERSONAL_INFO.degree} (2023–2027)</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                id="hero-view-projects-btn"
                href="#capstone"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm shadow-lg shadow-teal-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <FolderGit2 className="w-4 h-4" />
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                id="hero-download-resume-btn"
                onClick={onOpenResumeModal}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-slate-600 font-semibold text-sm transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer shadow-sm"
              >
                <FileDown className="w-4 h-4 text-teal-400" />
                <span>Download Résumé (PDF)</span>
              </button>

              <a
                id="hero-contact-btn"
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900/70 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-sm font-medium transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Core Tech Stack Preview */}
            <div className="pt-3 border-t border-slate-900">
              <p className="text-xs uppercase tracking-wider font-semibold text-slate-500 mb-2 font-mono">
                Featured Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {['Java', 'MySQL', 'HTML', 'CCS', 'VS Code', 'XAMPP'].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Profile Card / Highlights (Right) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-teal-500/20 via-emerald-500/10 to-transparent blur-md opacity-70" />

              <div className="relative rounded-2xl bg-slate-900/90 border border-slate-800 p-6 sm:p-7 shadow-2xl space-y-6">
                
                {/* Header with Avatar & Badge */}
                <div className="flex items-center gap-4">
                  <PhotoUploader size="sm" />

                  <div>
                    <h3 className="text-lg font-bold text-white leading-snug">Steven P. Fran</h3>
                    <p className="text-xs text-teal-400 font-mono">BSIT Senior Student</p>
                    <p className="text-xs text-slate-400">Innovative College of Science & Tech</p>
                  </div>
                </div>

                {/* Capstone Badge Preview Box */}
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                      Capstone Project
                    </span>
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                      Successfully Defended
                    </span>
                  </div>

                  <h4 className="text-sm font-semibold text-white">
                    Barangay Management System
                  </h4>
                  <p className="text-xs text-slate-400 line-clamp-2">
                    Digital resident records, instant certificate generation & searchable MySQL database replacing manual logbooks.
                  </p>

                  <div className="flex items-center justify-between pt-1 text-xs">
                    <span className="text-slate-400">Role: <strong className="text-slate-200">System Developer</strong></span>
                    <a
                      href="#capstone"
                      className="text-teal-400 hover:text-teal-300 font-medium inline-flex items-center gap-1 text-xs"
                    >
                      View Details →
                    </a>
                  </div>
                </div>

                {/* Quick Highlights Grid */}
                <div className="grid grid-cols-2 gap-3 text-center">
                  <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                    <p className="text-xl font-bold text-teal-400 font-mono">1st–3rd</p>
                    <p className="text-[11px] text-slate-400 uppercase tracking-wider font-medium mt-0.5">Consistent Student</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                    <p className="text-xl font-bold text-emerald-400 font-mono">2027</p>
                    <p className="text-[11px] text-slate-400 uppercase tracking-wider font-medium mt-0.5">Expected Grad</p>
                  </div>
                </div>

                {/* Quick Contact Line */}
                <div className="pt-2 flex items-center justify-between text-xs text-slate-400 border-t border-slate-800">
                  <span className="font-mono text-[11px] text-slate-400">Oriental Mindoro</span>
                  <a
                    href="mailto:stevennarf17@gmail.com"
                    className="text-slate-300 hover:text-teal-300 font-mono transition-colors"
                  >
                    stevennarf17@gmail.com
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
