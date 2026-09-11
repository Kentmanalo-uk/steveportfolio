import React, { useState } from 'react';
import {
  Code2,
  Globe,
  Database,
  Wrench,
  Cpu,
  Users,
  Sparkles,
  Lightbulb,
  Clock,
  CheckCircle2,
  Terminal,
} from 'lucide-react';
import { TECHNICAL_SKILLS, SOFT_SKILLS } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'programming', label: 'Programming', icon: Code2 },
    { id: 'web', label: 'Web Dev', icon: Globe },
    { id: 'database', label: 'Database', icon: Database },
    { id: 'tools', label: 'Tools & IDEs', icon: Wrench },
    { id: 'others', label: 'Hardware & Network', icon: Cpu },
  ];

  const filteredSkills =
    selectedCategory === 'all'
      ? TECHNICAL_SKILLS
      : TECHNICAL_SKILLS.filter((s) => s.category === selectedCategory);

  const getLevelBadge = (level: string) => {
    switch (level) {
      case 'Proficient':
        return 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30';
      case 'Familiar':
        return 'bg-teal-500/15 text-teal-400 border-teal-500/30';
      case 'Working Knowledge':
        return 'bg-cyan-500/15 text-cyan-400 border-cyan-500/30';
      default:
        return 'bg-slate-800 text-slate-400 border-slate-700';
    }
  };

  const getSoftIcon = (name: string) => {
    switch (name) {
      case 'Users':
        return <Users className="w-5 h-5 text-teal-400" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-emerald-400" />;
      case 'Lightbulb':
        return <Lightbulb className="w-5 h-5 text-amber-400" />;
      case 'Clock':
        return <Clock className="w-5 h-5 text-cyan-400" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-teal-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-mono uppercase tracking-wider">
            <Terminal className="w-3.5 h-3.5" />
            Capabilities & Tools
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & Competencies
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Categorized technical stack and professional soft skills acquired through academic coursework and hands-on system building.
          </p>
        </div>

        {/* Technical Skills Categorization */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-4">
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Code2 className="w-5 h-5 text-teal-400" />
                Technical Skills
              </h3>
              <p className="text-xs text-slate-400">Only verified capabilities that I can explain, defend, and demonstrate.</p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-1.5 bg-slate-900 p-1 rounded-xl border border-slate-800">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-teal-500 text-slate-950 font-semibold shadow-sm'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Technical Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredSkills.map((skill, index) => (
              <div
                key={index}
                className="group relative bg-slate-900/70 border border-slate-800/90 rounded-xl p-5 hover:border-teal-500/40 transition-all hover:shadow-lg hover:shadow-teal-500/5 space-y-2.5"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-teal-400 group-hover:scale-125 transition-transform" />
                    <h4 className="text-base font-bold text-white group-hover:text-teal-300 transition-colors">
                      {skill.name}
                    </h4>
                  </div>
                  <span
                    className={`text-[11px] font-mono px-2 py-0.5 rounded-md border font-semibold ${getLevelBadge(
                      skill.level
                    )}`}
                  >
                    {skill.level}
                  </span>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {skill.description}
                </p>

                <div className="pt-2 flex items-center gap-2 text-[11px] text-slate-500 uppercase font-mono tracking-wider">
                  <span className="text-slate-400 capitalize">{skill.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills Section */}
        <div className="space-y-6 pt-6">
          <div className="border-b border-slate-800/80 pb-3">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Users className="w-5 h-5 text-emerald-400" />
              Soft Skills & Work Ethic
            </h3>
            <p className="text-xs text-slate-400">Core professional values demonstrated across academic project collaborations.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SOFT_SKILLS.map((item, index) => (
              <div
                key={index}
                className="bg-slate-900/50 border border-slate-800 rounded-xl p-5 space-y-3 hover:border-slate-700 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center shadow-inner">
                  {getSoftIcon(item.iconName)}
                </div>
                <h4 className="text-sm font-bold text-white">{item.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
