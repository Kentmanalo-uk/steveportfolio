import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { CapstoneProject } from './components/CapstoneProject';
import { ExperienceOjtSection } from './components/ExperienceOjtSection';
import { CertificationsAchievementsSection } from './components/CertificationsAchievementsSection';
import { EducationSection } from './components/EducationSection';
import { ResumeSection } from './components/ResumeSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { ResumeDocument } from './components/ResumeDocument';

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-teal-500 selection:text-slate-950 font-sans">
      {/* On-screen Website Content (Hidden entirely during Print/PDF export) */}
      <div className="print:hidden">
        {/* Navigation Header */}
        <Navbar onOpenResumeModal={() => setIsResumeModalOpen(true)} />

        {/* Main Content Sections */}
        <main>
          {/* 1. HOME / LANDING */}
          <Hero onOpenResumeModal={() => setIsResumeModalOpen(true)} />

          {/* 2. ABOUT ME */}
          <AboutSection />

          {/* 3. SKILLS */}
          <SkillsSection />

          {/* 4. CAPSTONE PROJECT (BARANGAY MANAGEMENT SYSTEM) */}
          <CapstoneProject />

          {/* 5. INTERNSHIP / OJT / PRACTICUM */}
          <ExperienceOjtSection />

          {/* 6 & 7 & 8. CERTIFICATIONS, ACHIEVEMENTS & ORGANIZATIONS */}
          <CertificationsAchievementsSection />

          {/* 9. EDUCATION */}
          <EducationSection />

          {/* 10. RESUME (LONG BOND PAPER FORMAT) */}
          <ResumeSection onOpenModal={() => setIsResumeModalOpen(true)} />

          {/* 11. CONTACT ME */}
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />

        {/* Interactive Resume View & Download Modal */}
        <ResumeModal
          isOpen={isResumeModalOpen}
          onClose={() => setIsResumeModalOpen(false)}
        />
      </div>

      {/* Standalone Printable Résumé Sheet: Activated and displayed ONLY during print / PDF export */}
      <div
        id="dedicated-printable-resume"
        className="hidden print:block w-[8.5in] min-h-[13in] bg-white text-slate-900 mx-auto"
      >
        <ResumeDocument />
      </div>
    </div>
  );
}

