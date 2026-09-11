import React from 'react';
import {
  Award,
  Code,
  ExternalLink,
  FolderGit2,
  Database,
  Server,
  Layout,
  Terminal,
} from 'lucide-react';
import { CAPSTONE_PROJECT } from '../data/portfolioData';

export const CapstoneProject: React.FC = () => {
  return (
    <section id="capstone" className="py-20 bg-slate-900/30 border-b border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-mono uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            Featured Capstone Project
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Barangay Management System
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Comprehensive digitized record-keeping, clearance processing, and automated reporting system for local government administration.
          </p>
        </div>

        {/* Project Showcase Card */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div className="space-y-1">
              <div className="flex items-center gap-2.5">
                <FolderGit2 className="w-5 h-5 text-teal-400" />
                <h3 className="text-xl font-bold text-white">{CAPSTONE_PROJECT.name}</h3>
              </div>
              <p className="text-xs text-slate-400">
                Innovative College of Science & Information Technology • Capstone 2026
              </p>
            </div>

            {/* Action link for Github */}
            <div>
              <a
                href={CAPSTONE_PROJECT.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors shadow-sm"
              >
                <Code className="w-4 h-4 text-teal-400" />
                <span>GitHub Repository</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>
          </div>

          {/* Structured Key Details Table */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-1">
              <p className="text-xs uppercase font-mono text-slate-500">Project Name</p>
              <p className="text-sm font-bold text-white">{CAPSTONE_PROJECT.name}</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-1">
              <p className="text-xs uppercase font-mono text-slate-500">My Main Role</p>
              <p className="text-sm font-bold text-teal-400">{CAPSTONE_PROJECT.role}</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-1">
              <p className="text-xs uppercase font-mono text-slate-500">Team Contribution</p>
              <p className="text-xs font-medium text-slate-300 leading-snug">
                {CAPSTONE_PROJECT.teamRole}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-1">
              <p className="text-xs uppercase font-mono text-slate-500">Tech Stack</p>
              <div className="flex flex-wrap gap-1.5 mt-1">
                {CAPSTONE_PROJECT.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-700/80 text-slate-300 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Core Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-slate-950/40 border border-slate-800/60 flex items-start gap-3">
              <div className="p-2 rounded-lg bg-teal-500/10 text-teal-400 shrink-0">
                <Database className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">Database Management</h4>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  Organized relational tables for resident records, transactions, and certifications.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/40 border border-slate-800/60 flex items-start gap-3">
              <div className="p-2 rounded-lg bg-teal-500/10 text-teal-400 shrink-0">
                <Server className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">Core Development</h4>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  Built backend logic, SQL queries, and secure role-based staff operations.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/40 border border-slate-800/60 flex items-start gap-3">
              <div className="p-2 rounded-lg bg-teal-500/10 text-teal-400 shrink-0">
                <Layout className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">User Interface</h4>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  Clean responsive layouts designed for fast clerical search, registration, and reporting.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
