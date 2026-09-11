import React from 'react';
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  Clock,
  Sparkles,
  Terminal,
  Server,
  Layers,
  Award,
} from 'lucide-react';

export const ExperienceOjtSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-mono uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            Practical & Academic Experience
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Internship / OJT & Experience
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Documenting academic practical work, system implementations, and readiness for industry On-the-Job Training (OJT).
          </p>
        </div>

        {/* OJT Readiness Callout Banner */}
        <div className="relative rounded-2xl bg-gradient-to-r from-teal-950/70 via-slate-900 to-slate-900 border border-teal-500/30 p-6 sm:p-8 shadow-xl overflow-hidden">
          <div className="absolute right-0 top-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono text-emerald-400 uppercase font-bold tracking-wider">
                  Internship & OJT Status: Actively Seeking Placement
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Ready for On-the-Job Training (OJT) & Junior Developer Roles
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                As a 4th-year BSIT student at Innovative College of Science & Information Technology, I have completed all foundational curriculum requirements and successfully defended my capstone project. I am eager to apply my skills in <strong className="text-teal-300">Java development, MySQL database administration, and IT technical support</strong> in a professional work environment.
              </p>
            </div>

            <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-4 sm:p-5 space-y-2 text-xs shrink-0 w-full lg:w-72">
              <div className="text-slate-400">Target Track:</div>
              <div className="font-semibold text-white">Software Dev / IT Support OJT</div>
              <div className="text-slate-400 pt-1">Required Hours:</div>
              <div className="font-semibold text-teal-400 font-mono">486 – 600 Hours (BSIT)</div>
              <div className="text-slate-400 pt-1">Preferred Location:</div>
              <div className="font-semibold text-slate-200">Oriental Mindoro / Remote / Hybrid</div>
            </div>
          </div>
        </div>

        {/* Detailed Experience Timeline (Academic & Practicum Projects) */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <Layers className="w-5 h-5 text-teal-400" />
            Project Experience & Technical Roles
          </h3>

          <div className="space-y-6">
            
            {/* Experience Item 1: Capstone System Developer */}
            <div className="relative pl-6 sm:pl-8 border-l-2 border-teal-500/50 space-y-4">
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-teal-400" />

              <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-7 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h4 className="text-lg font-bold text-white">
                      System Developer & Database Programmer
                    </h4>
                    <p className="text-xs text-teal-400 font-semibold font-mono">
                      Capstone Project: Barangay Management System
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-teal-400" />
                    <span>2025 – 2026</span>
                  </div>
                </div>

                <div className="space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  <p>
                    Spearheaded the technical design and execution of the digitized Barangay records and certificate issuance platform. Handled database modeling, back-end functionality, and interface cleanup.
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-400 pt-1">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                      <span>Designed and normalized a 4-table MySQL relational database ensuring complete foreign key integrity and audit logs.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                      <span>Coded back-end Java controllers and validation checks for resident registration and document requests.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                      <span>Delivered working interactive prototype and successfully defended system architecture before the faculty evaluation panel.</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-mono">
                  <span className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-300">Java</span>
                  <span className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-300">MySQL</span>
                  <span className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-300">HTML/CSS</span>
                  <span className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-300">XAMPP</span>
                  <span className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-300">VS Code</span>
                </div>
              </div>
            </div>

            {/* Experience Item 2: Campus Hardware & Troubleshooting Practical Activities */}
            <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-800 space-y-4">
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-slate-700" />

              <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-7 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h4 className="text-lg font-bold text-white">
                      Academic Lab Technical Assistant & Troubleshooting Practicum
                    </h4>
                    <p className="text-xs text-slate-400 font-semibold font-mono">
                      Innovative College of Science & Information Technology
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>2024 – 2025</span>
                  </div>
                </div>

                <div className="space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  <p>
                    Participated in lab maintenance drills, computer assembly, operating system setup, and local area network cabling workshops as part of academic coursework.
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-400 pt-1">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Diagnosed and resolved common workstation issues: OS boot errors, RAM seatings, peripheral driver misconfigurations.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Practiced UTP Cat5e/Cat6 network cable crimping (T568A / T568B) and IP configuration testing for peer-to-peer sharing.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Assisted fellow students with IDE installations and XAMPP MySQL port conflict troubleshooting.</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-mono">
                  <span className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-300">PC Troubleshooting</span>
                  <span className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-300">Windows OS</span>
                  <span className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-300">Basic Networking</span>
                  <span className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-300">Data Encoding</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
