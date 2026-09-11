import React, { useState } from 'react';
import {
  FileText,
  FileDown,
  Printer,
  ZoomIn,
  ZoomOut,
  Maximize2,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ResumeDocument } from './ResumeDocument';
import { handlePrintResume, downloadResumePdf, downloadResumeDocx } from '../utils/printResume';

interface ResumeSectionProps {
  onOpenModal?: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenModal }) => {
  const [zoomLevel, setZoomLevel] = useState<number>(100);

  const handlePrint = () => {
    handlePrintResume();
  };

  const handleDownloadPdf = () => {
    downloadResumePdf();
  };

  const handleDownloadDocx = () => {
    downloadResumeDocx();
  };

  return (
    <section id="resume" className="py-20 bg-slate-900/40 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-mono uppercase tracking-wider">
            <FileText className="w-3.5 h-3.5" />
            Curriculum Vitae / Résumé
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional Résumé
          </h2>
        </div>

        {/* Action Header Bar */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-3 text-xs">
            <div className="p-2 rounded-lg bg-teal-500/10 text-teal-400 border border-teal-500/20 font-mono font-bold">
              PDF
            </div>
            <div>
              <p className="font-bold text-white text-sm">Filename: {PERSONAL_INFO.resumeFileName}</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            {/* Zoom Controls */}
            <div className="hidden md:flex items-center bg-slate-950 rounded-lg border border-slate-800 px-1 py-0.5">
              <button
                onClick={() => setZoomLevel(Math.max(80, zoomLevel - 10))}
                className="p-1.5 text-slate-400 hover:text-white"
                title="Zoom Out"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <span className="text-xs font-mono px-2 text-slate-300">{zoomLevel}%</span>
              <button
                onClick={() => setZoomLevel(Math.min(130, zoomLevel + 10))}
                className="p-1.5 text-slate-400 hover:text-white"
                title="Zoom In"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Expand / View Fullscreen Button */}
            {onOpenModal && (
              <button
                onClick={onOpenModal}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors cursor-pointer"
                title="Open Modal"
              >
                <Maximize2 className="w-3.5 h-3.5 text-slate-400" />
                <span>Fullscreen View</span>
              </button>
            )}

            {/* Download Word / WPS Document */}
            <button
              id="resume-section-download-docx-btn"
              onClick={handleDownloadDocx}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors cursor-pointer"
              title="Download editable Microsoft Word / WPS document"
            >
              <FileText className="w-3.5 h-3.5 text-blue-400" />
              <span>Word (.docx)</span>
            </button>

            {/* Print Button */}
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 text-teal-400" />
              <span>Print</span>
            </button>

            {/* Download PDF Button */}
            <button
              id="resume-section-download-btn"
              onClick={handleDownloadPdf}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-teal-500 hover:bg-teal-400 text-slate-950 text-xs font-bold transition-all shadow-md shadow-teal-500/20 cursor-pointer"
            >
              <FileDown className="w-4 h-4" />
              <span>Download PDF</span>
            </button>
          </div>
        </div>

        {/* Long Bond Paper Printable Sheet Container */}
        <div className="flex justify-center overflow-x-auto py-4">
          <div
            style={{
              transform: `scale(${zoomLevel / 100})`,
              transformOrigin: 'top center',
              transition: 'transform 0.2s ease',
            }}
            className="w-full flex justify-center"
          >
            <ResumeDocument />
          </div>
        </div>

      </div>
    </section>
  );
};
