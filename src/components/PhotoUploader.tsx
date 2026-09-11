import React, { useRef, useState } from 'react';
import { Camera, Upload, Check, RefreshCw } from 'lucide-react';
import { useProfilePhoto } from '../context/PhotoContext';

interface PhotoUploaderProps {
  className?: string;
  variant?: 'circle' | 'card' | 'button';
  size?: 'sm' | 'md' | 'lg';
}

export const PhotoUploader: React.FC<PhotoUploaderProps> = ({
  className = '',
  variant = 'circle',
  size = 'md',
}) => {
  const { photoUrl, updatePhoto, resetPhoto, isCustomPhoto } = useProfilePhoto();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [successToast, setSuccessToast] = useState(false);

  const handleFile = async (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Pakiusap pumili ng image file (JPG, PNG, WebP).');
      return;
    }
    const ok = await updatePhoto(file);
    if (ok) {
      setSuccessToast(true);
      setTimeout(() => setSuccessToast(false), 3000);
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFile(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      handleFile(file);
    }
  };

  const triggerSelect = () => {
    fileInputRef.current?.click();
  };

  if (variant === 'button') {
    return (
      <div className={`relative inline-flex items-center gap-2 ${className}`}>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileInputChange}
        />
        <button
          onClick={triggerSelect}
          type="button"
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold text-xs transition-all shadow-md hover:shadow-teal-500/25 cursor-pointer"
          title="Change Image"
        >
          <Camera className="w-3.5 h-3.5" />
          <span>Change Image</span>
        </button>

        {isCustomPhoto && (
          <button
            onClick={resetPhoto}
            type="button"
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-slate-200 text-xs transition-colors cursor-pointer border border-slate-700"
            title="Reset to default photo"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
        )}

        {successToast && (
          <span className="inline-flex items-center gap-1 text-xs text-emerald-400 font-medium">
            <Check className="w-3.5 h-3.5" /> Updated!
          </span>
        )}
      </div>
    );
  }

  // Circle variant (used in Hero, Resume, etc.)
  const sizeClasses = {
    sm: 'w-20 h-20',
    md: 'w-28 h-28 sm:w-32 sm:h-32',
    lg: 'w-32 h-32 sm:w-36 sm:h-36',
  }[size];

  return (
    <div className={`relative group ${className}`}>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileInputChange}
      />

      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={triggerSelect}
        className={`relative ${sizeClasses} rounded-full overflow-hidden border-4 ${
          isDragging
            ? 'border-teal-400 ring-4 ring-teal-400/40 scale-105'
            : 'border-white shadow-xl bg-slate-100'
        } cursor-pointer transition-all duration-200`}
        title="Change Image"
      >
        <img
          src={photoUrl}
          alt="Steven P. Fran"
          className="w-full h-full object-cover object-top"
          referrerPolicy="no-referrer"
        />

        {/* Hover overlay with camera icon - hidden when printing */}
        <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white p-2 text-center select-none print:hidden">
          <Camera className="w-5 h-5 text-teal-300 mb-1" />
          <span className="text-[10px] font-semibold tracking-tight text-slate-100 leading-tight">
            Change Image
          </span>
        </div>
      </div>

      {/* Floating Camera Button badge on bottom right - hidden when printing */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          triggerSelect();
        }}
        type="button"
        className="absolute -bottom-1 -right-1 p-2 rounded-full bg-teal-500 hover:bg-teal-400 text-slate-950 shadow-lg border-2 border-white transition-transform hover:scale-110 cursor-pointer print:hidden"
        title="Change Image"
      >
        <Upload className="w-3.5 h-3.5" />
      </button>

      {/* Success Notification Popover - hidden when printing */}
      {successToast && (
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded bg-emerald-600 text-white text-[11px] font-semibold whitespace-nowrap shadow-lg animate-bounce flex items-center gap-1 z-30 print:hidden">
          <Check className="w-3 h-3" /> Image Updated!
        </div>
      )}
    </div>
  );
};
