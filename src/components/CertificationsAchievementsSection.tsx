import React from 'react';
import {
  Award,
  Scroll,
  CheckCircle2,
  Clock,
  Target,
  Sparkles,
  Users,
  Compass,
  ArrowUpRight,
} from 'lucide-react';
import { CERTIFICATIONS, ACHIEVEMENTS } from '../data/portfolioData';

export const CertificationsAchievementsSection: React.FC = () => {
  return (
    <section id="certifications" className="py-20 bg-slate-900/40 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section 1: Certifications & Continuous Learning */}
        <div className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-mono uppercase tracking-wider">
              <Scroll className="w-3.5 h-3.5" />
              Continuous Professional Development
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Certifications & Training
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Active learning tracks beyond regular curriculum, pursuing industry-standard accreditations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {CERTIFICATIONS.map((cert, index) => {
              const isCompleted = cert.status === 'Completed';
              const isInProgress = cert.status === 'In Progress';
              return (
                <div
                  key={index}
                  className={`rounded-2xl p-6 border transition-all flex flex-col justify-between ${
                    isCompleted
                      ? 'bg-slate-900/90 border-emerald-500/30 hover:border-emerald-500/50 shadow-lg shadow-emerald-500/5'
                      : isInProgress
                      ? 'bg-slate-900/90 border-teal-500/40 shadow-lg shadow-teal-500/5'
                      : 'bg-slate-900/50 border-slate-800'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full font-semibold border flex items-center gap-1 ${
                          isCompleted
                            ? 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30'
                            : isInProgress
                            ? 'bg-teal-500/20 text-teal-300 border-teal-500/40 animate-pulse'
                            : 'bg-slate-800 text-slate-400 border-slate-700'
                        }`}
                      >
                        {isCompleted && <CheckCircle2 className="w-3 h-3 text-emerald-400" />}
                        {cert.status}
                      </span>
                      <span className="text-xs font-mono text-slate-500">{cert.provider}</span>
                    </div>

                    <h4 className="text-base font-bold text-white leading-snug">
                      {cert.title}
                    </h4>

                    <p className="text-xs text-slate-400 leading-relaxed">
                      {cert.focus}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-500">
                    <span className="flex items-center gap-1.5">
                      {isCompleted ? (
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      ) : isInProgress ? (
                        <Clock className="w-3.5 h-3.5 text-teal-400" />
                      ) : (
                        <Target className="w-3.5 h-3.5 text-slate-400" />
                      )}
                      <span>
                        {isCompleted ? 'Credential Completed' : isInProgress ? 'Currently Enrolled' : 'Roadmap Milestone'}
                      </span>
                    </span>
                    <span className="font-mono text-[11px] text-slate-400">
                      {cert.targetDate || (isCompleted ? '2026' : isInProgress ? 'Active' : 'Target')}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 2: Achievements & Milestones */}
        <div className="space-y-8 pt-6">
          <div className="border-b border-slate-800/80 pb-4">
            <h3 className="text-2xl font-bold text-white flex items-center gap-2.5">
              <Award className="w-6 h-6 text-amber-400" />
              Academic Achievements & Recognition
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Demonstrated consistency, dedication, and recognized milestones in academic and project settings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {ACHIEVEMENTS.map((item, index) => (
              <div
                key={index}
                className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-3 relative overflow-hidden group hover:border-amber-500/30 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold">
                  <Sparkles className="w-5 h-5" />
                </div>

                <div className="flex justify-between items-center text-xs text-slate-400 font-mono">
                  <span>{item.organization}</span>
                  <span className="text-amber-400 font-bold">{item.year}</span>
                </div>

                <h4 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h4>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Organizations & Leadership */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-7 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
            <h4 className="text-base font-bold text-white flex items-center gap-2">
              <Users className="w-5 h-5 text-teal-400" />
              Organizations & Campus Involvement
            </h4>
            <span className="text-xs font-mono text-teal-400">Student IT Community</span>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Actively participating in college IT student bodies, technical seminars, peer coding sessions, and open forum discussions at Innovative College of Science & Information Technology. Committed to fostering peer collaboration, knowledge sharing, and staying engaged with local technological advancements.
          </p>
        </div>

      </div>
    </section>
  );
};
