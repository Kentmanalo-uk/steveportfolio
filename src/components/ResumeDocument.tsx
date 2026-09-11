import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { PERSONAL_INFO, CERTIFICATIONS } from '../data/portfolioData';
import { PhotoUploader } from './PhotoUploader';

interface ResumeDocumentProps {
  className?: string;
}

export const ResumeDocument: React.FC<ResumeDocumentProps> = ({ className = '' }) => {
  return (
    <div
      className={`w-full max-w-[850px] bg-white text-slate-900 rounded-xl shadow-2xl overflow-hidden border border-slate-300 print:border-none print:shadow-none print:rounded-none print-only-resume ${className}`}
      style={{
        // Philippine standard Long Bond Paper ratio (8.5in x 13in ~ 1 : 1.529)
        minHeight: '1150px',
      }}
    >
      {/* Top Header Banner matching user's layout */}
      <div className="bg-[#eef2f6] px-8 sm:px-12 py-8 border-b border-slate-200 flex flex-col sm:flex-row items-center sm:items-center justify-between gap-6">
        
        {/* Left: Circular Photo Frame with Steven's Portrait Photo */}
        <div className="relative shrink-0">
          <PhotoUploader size="lg" />
        </div>

        {/* Right: Name in bold navy uppercase */}
        <div className="text-center sm:text-right space-y-1">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-widest text-[#162d4a] uppercase font-sans leading-none">
            FRAN,
          </h1>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-widest text-[#162d4a] uppercase font-sans leading-tight">
            STEVEN P.
          </h1>
          <p className="text-xs font-semibold text-slate-500 tracking-wider uppercase pt-1">
            Bachelor of Science in Information Technology (BSIT)
          </p>
        </div>
      </div>

      {/* Two-Column Body */}
      <div className="grid grid-cols-1 md:grid-cols-12 min-h-[950px]">
        
        {/* Left Column (Dark Navy Background #162d4a) */}
        <div className="md:col-span-5 bg-[#162d4a] text-white p-6 sm:p-8 space-y-7 text-xs">
          
          {/* CONTACT ME */}
          <div className="space-y-3">
            <h2 className="text-sm font-bold tracking-widest uppercase border-b border-slate-600/80 pb-1.5 text-white">
              CONTACT ME
            </h2>
            <div className="space-y-3 text-[11.5px] text-slate-200">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-teal-300 shrink-0" />
                <span className="font-mono">{PERSONAL_INFO.mobile}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-teal-300 shrink-0" />
                <span className="break-all">{PERSONAL_INFO.email}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-teal-300 shrink-0 mt-0.5" />
                <span className="leading-snug">
                  Barangay Pulosahi,<br />
                  Bongabong, Oriental Mindoro<br />
                  5211
                </span>
              </div>
            </div>
          </div>

          {/* EDUCATION */}
          <div className="space-y-3">
            <h2 className="text-sm font-bold tracking-widest uppercase border-b border-slate-600/80 pb-1.5 text-white">
              EDUCATION
            </h2>
            <div className="space-y-1 text-[11.5px]">
              <p className="font-bold text-white text-xs leading-snug">
                Innovative College of Science & Information Technology
              </p>
              <p className="text-slate-300">
                Bachelor of Science in Information Technology (BSIT)
              </p>
              <p className="text-teal-300 font-mono font-medium pt-1">
                2023 - 2027
              </p>
            </div>
          </div>

          {/* TECHNICAL SKILLS */}
          <div className="space-y-3">
            <h2 className="text-sm font-bold tracking-widest uppercase border-b border-slate-600/80 pb-1.5 text-white">
              TECHNICAL SKILLS
            </h2>
            <div className="space-y-2.5 text-[11.5px] text-slate-200">
              <div>
                <p className="font-semibold text-white">• Programming Languages:</p>
                <p className="text-slate-300 pl-3">Java, Basic JavaScript</p>
              </div>

              <div>
                <p className="font-semibold text-white">• Web Development:</p>
                <p className="text-slate-300 pl-3">HTML, CCS</p>
              </div>

              <div>
                <p className="font-semibold text-white">• Database Management:</p>
                <p className="text-slate-300 pl-3">MySQL</p>
              </div>

              <div>
                <p className="font-semibold text-white">• Software & Tools:</p>
                <p className="text-slate-300 pl-3 leading-relaxed">
                  Microsoft Office (Word, Excel, PowerPoint), VS Code, XAMPP, Canva
                </p>
              </div>

              <div>
                <p className="font-semibold text-white">• Other IT Skills:</p>
                <p className="text-slate-300 pl-3 leading-relaxed">
                  Basic Computer Troubleshooting, Data Encoding, Basic Networking
                </p>
              </div>
            </div>
          </div>

          {/* CERTIFICATES AND TRAINING */}
          <div className="space-y-3 pt-2">
            <h2 className="text-sm font-bold tracking-widest uppercase border-b border-slate-600/80 pb-1.5 text-white">
              CERTIFICATES AND TRAINING
            </h2>
            <ul className="space-y-1.5 text-[11px] text-slate-200 pl-1">
              <li className="flex items-start gap-1.5">
                <span className="text-teal-300 font-bold">•</span>
                <span>Introduction to Modern AI</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-teal-300 font-bold">•</span>
                <span>IT Customer Support Basics</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-teal-300 font-bold">•</span>
                <span>Digital Safety and Security Awareness</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Right Column (Pure White Background) */}
        <div className="md:col-span-7 bg-white text-slate-800 p-6 sm:p-9 space-y-7 text-xs text-left">
          
          {/* CAREER OBJECTIVE */}
          <div className="space-y-2.5">
            <div className="flex items-center gap-3">
              <h2 className="text-sm font-bold tracking-widest uppercase text-[#162d4a] shrink-0">
                CAREER OBJECTIVE:
              </h2>
              <div className="h-[1px] bg-slate-300 flex-1" />
            </div>
            <p className="text-[11.5px] leading-relaxed text-slate-700 text-justify">
              I am a Bachelor of Science in Information Technology (BSIT) student seeking an entry-level IT Staff / IT Support / Junior Developer position. I am eager to apply my knowledge in computer systems, programming, and technology to help your team and contribute to the company's growth. I am hardworking, willing to learn quickly, and ready to do my best in every task given to me.
            </p>
          </div>

          {/* ACADEMIC / CAPSTONE PROJECT */}
          <div className="space-y-3.5">
            <div className="flex items-center gap-3">
              <h2 className="text-sm font-bold tracking-widest uppercase text-[#162d4a] shrink-0">
                ACADEMIC / CAPSTONE PROJECT:
              </h2>
              <div className="h-[1px] bg-slate-300 flex-1" />
            </div>

            <div className="space-y-1">
              <p className="font-bold text-[#162d4a] text-xs">
                Project Name: Barangay Management System
              </p>
              <p className="text-slate-700 text-[11.5px]">
                <strong className="text-slate-900 font-semibold">Role:</strong> System Developer & Programmer
              </p>
            </div>

            {/* Tools & Technologies Used */}
            <div className="space-y-1.5 pt-1">
              <h3 className="font-bold text-slate-900 text-xs">
                Tools & Technologies Used:
              </h3>
              <ul className="space-y-1 text-[11.5px] text-slate-700 pl-2">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#162d4a]" />
                  <span><strong>Programming:</strong> Java</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#162d4a]" />
                  <span><strong>Web Interface:</strong> HTML, CSS</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#162d4a]" />
                  <span><strong>Database:</strong> MySQL</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#162d4a]" />
                  <span><strong>Tools:</strong> Visual Studio Code, XAMPP</span>
                </li>
              </ul>
            </div>

            {/* Action & Result */}
            <div className="space-y-2 pt-1">
              <h3 className="font-bold text-slate-900 text-xs">
                Action & Result:
              </h3>
              <ul className="space-y-2 text-[11.5px] text-slate-700 pl-2">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#162d4a] mt-1.5 shrink-0" />
                  <span className="leading-relaxed">
                    <strong className="text-slate-900">Purpose:</strong> The system was built to make recording and managing barangay records faster and easier replacing manual writing in logbooks to avoid lost files and slow processing.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#162d4a] mt-1.5 shrink-0" />
                  <span className="leading-relaxed">
                    <strong className="text-slate-900">My Contribution:</strong> I developed the database design, created the forms for adding/editing resident info, and wrote the code to connect the system to the database.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#162d4a] mt-1.5 shrink-0" />
                  <span className="leading-relaxed">
                    <strong className="text-slate-900">Outcome:</strong> The system can now store resident records, issue clearance requests, and generate reports quickly. It is organized, easy to use, and reduced errors in recording data.
                  </span>
                </li>
              </ul>
            </div>

          </div>

          {/* Sub footer for Long Bond Paper specification */}
          <div className="pt-6 border-t border-slate-200 text-[10px] text-slate-400 flex justify-between items-center">
            <span>Fran Steven.pdf</span>
          </div>

        </div>

      </div>
    </div>
  );
};
