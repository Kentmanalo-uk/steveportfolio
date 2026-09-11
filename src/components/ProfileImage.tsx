import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ProfileImageProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const ProfileImage: React.FC<ProfileImageProps> = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-28 h-28 sm:w-32 sm:h-32',
    lg: 'w-32 h-32 sm:w-36 sm:h-36',
  }[size];

  return (
    <div
      className={`relative ${sizeClasses} rounded-full overflow-hidden border-4 border-white shadow-xl print:shadow-none bg-slate-100 shrink-0 ${className}`}
    >
      <img
        src={PERSONAL_INFO.photoUrl}
        alt={PERSONAL_INFO.fullName}
        className="w-full h-full object-cover object-top"
        referrerPolicy="no-referrer"
        onError={(e) => {
          (e.target as HTMLImageElement).src = '/steven-fran-photo.jpg';
        }}
      />
    </div>
  );
};
