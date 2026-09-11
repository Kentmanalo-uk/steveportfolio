import React from 'react';
import {
  User,
  GraduationCap,
  Code,
  Database,
  Briefcase,
  Target,
  Compass,
  CheckCircle,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-900/40 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-mono uppercase tracking-wider">
            <User className="w-3.5 h-3.5" />
            Professional Background
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Me
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Get to know my background, academic journey, and what drives me as an aspiring IT professional.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Professional Identity Narrative (150-250 words) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-5 shadow-xl">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-teal-400" />
                Who I Am & What I Do
              </h3>
              
              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  I am a <strong className="text-white font-semibold">4th-year Bachelor of Science in Information Technology (BSIT) student (2023–2027)</strong> at <span className="text-teal-300">Innovative College of Science & Information Technology</span>, based in <strong className="text-white font-semibold">Oriental Mindoro, Philippines</strong>. My core technical focus centers on <strong className="text-teal-300 font-semibold">system development</strong>, <strong className="text-emerald-300 font-semibold">database management</strong>, and <strong className="text-cyan-300 font-semibold">structured programming</strong>.
                </p>
                <p>
                  I love turning real-world ideas and community challenges into working digital tools that help people. Throughout my academic tenure, I have maintained consistent performance from 1st to 3rd year and recently spearheaded the database design, core programming, and user interface for our capstone: the <strong className="text-white">Barangay Management System</strong>. This project replaced manual paper logbooks with automated, searchable records and rapid certificate issuance.
                </p>
                <p>
                  I pride myself on being a fast learner, highly disciplined, and hardworking. Whether diagnosing complex database syntax or designing intuitive interfaces, I approach technical problems with curiosity and persistence. I am fully prepared and enthusiastic to step into an <strong className="text-white">Internship / On-the-Job Training (OJT)</strong> role or junior developer position where I can continue expanding my skills and contributing directly to high-impact IT solutions.
                </p>
              </div>

              {/* Quick Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-slate-800 text-xs">
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Disciplined & Detail-Oriented</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Rapid Tech Adaptability</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Reliable Team Player</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Facts & Key Focus Areas (Right) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Academic Snapshot Card */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 font-mono flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-teal-400" />
                Academic Snapshot
              </h4>
              
              <div className="space-y-3 text-xs">
                <div className="flex justify-between py-2 border-b border-slate-800/80">
                  <span className="text-slate-400">Current Standing:</span>
                  <span className="text-slate-200 font-semibold">4th-Year BSIT Student</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-800/80">
                  <span className="text-slate-400">Institution:</span>
                  <span className="text-slate-200 font-semibold text-right">Innovative College of Science & Tech</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-800/80">
                  <span className="text-slate-400">Timeline:</span>
                  <span className="text-slate-200 font-semibold">2023 – 2027 (Expected Grad)</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-800/80">
                  <span className="text-slate-400">Location:</span>
                  <span className="text-slate-200 font-semibold">Oriental Mindoro, Philippines</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-slate-400">Primary Objective:</span>
                  <span className="text-teal-400 font-semibold">IT Internship / OJT & Junior Dev</span>
                </div>
              </div>
            </div>

            {/* Core Competencies Box */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 font-mono flex items-center gap-2">
                <Target className="w-4 h-4 text-emerald-400" />
                Key Focus Domains
              </h4>

              <div className="grid grid-cols-2 gap-2.5 pt-1">
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-1">
                  <div className="text-teal-400 font-semibold text-xs flex items-center gap-1.5">
                    <Database className="w-3.5 h-3.5" />
                    Database
                  </div>
                  <p className="text-[11px] text-slate-400">MySQL schema design, queries, normalization.</p>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-1">
                  <div className="text-cyan-400 font-semibold text-xs flex items-center gap-1.5">
                    <Code className="w-3.5 h-3.5" />
                    Backend
                  </div>
                  <p className="text-[11px] text-slate-400">Java logic, system flows, and validation.</p>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-1">
                  <div className="text-emerald-400 font-semibold text-xs flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5" />
                    System Dev
                  </div>
                  <p className="text-[11px] text-slate-400">Local testing with XAMPP, desktop & web tools.</p>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-1">
                  <div className="text-purple-400 font-semibold text-xs flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5" />
                    IT Support
                  </div>
                  <p className="text-[11px] text-slate-400">Basic networking, PC repair, data encoding.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
