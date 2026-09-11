import React from 'react';
import {
  GraduationCap,
  Calendar,
  MapPin,
  BookOpen,
  CheckCircle2,
  Award,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  const keyCoursework = [
    'Object-Oriented Programming (Java)',
    'Database Management Systems (MySQL / Relational Design)',
    'Web Systems & Technologies (HTML, CCS, Basic JS)',
    'Data Structures & Algorithms',
    'Systems Analysis & Design (SAD & Capstone Methodology)',
    'Computer Hardware Servicing & Networking Fundamentals',
    'Information Assurance & Security',
    'Integrative Programming & Technologies',
  ];

  return (
    <section id="education" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-mono uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            Academic Foundation
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Formal collegiate training and core IT curriculum at Innovative College of Science & Information Technology.
          </p>
        </div>

        {/* Education Structured Card */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
          
          {/* Main Program Banner */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-teal-500/10 border border-teal-500/30 text-teal-400 flex items-center justify-center shrink-0">
                <GraduationCap className="w-7 h-7" />
              </div>

              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Bachelor of Science in Information Technology (BSIT)
                  </h3>
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 font-semibold">
                    4th-Year Regular
                  </span>
                </div>
                <p className="text-sm font-semibold text-teal-300">
                  {PERSONAL_INFO.school}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-1">
                  <span className="flex items-center gap-1.5 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-teal-400" />
                    2023 – 2027 (Expected Graduation)
                  </span>
                  <span className="flex items-center gap-1.5 font-mono">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                    Oriental Mindoro, Philippines
                  </span>
                </div>
              </div>
            </div>

            {/* Academic Standing Callout */}
            <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-4 text-xs space-y-1.5 shrink-0 self-start lg:self-auto">
              <div className="text-slate-400 font-mono">Academic Status:</div>
              <div className="font-bold text-white flex items-center gap-1.5">
                <Award className="w-4 h-4 text-amber-400" />
                <span>Consistent Student (1st–3rd Year)</span>
              </div>
              <div className="text-[11px] text-teal-400 font-mono">
                ✓ Capstone Requirement Completed
              </div>
            </div>
          </div>

          {/* Coursework Breakdown */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-teal-400" />
              Relevant Coursework & Competencies Covered
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-1">
              {keyCoursework.map((course, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs text-slate-300 flex items-start gap-2.5"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                  <span className="font-medium leading-snug">{course}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
