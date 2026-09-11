import React, { createContext, useContext, useState, useEffect } from 'react';

interface PhotoContextType {
  photoUrl: string;
  updatePhoto: (fileOrDataUrl: File | string) => Promise<boolean>;
  resetPhoto: () => void;
  isCustomPhoto: boolean;
}

const STORAGE_KEY = 'steven_fran_custom_photo';
const DEFAULT_PHOTO = '/steven-fran-photo.jpg';

const PhotoContext = createContext<PhotoContextType | undefined>(undefined);

export const PhotoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [photoUrl, setPhotoUrl] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && saved.startsWith('data:image')) {
        return saved;
      }
    }
    return DEFAULT_PHOTO;
  });

  const [isCustomPhoto, setIsCustomPhoto] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return Boolean(localStorage.getItem(STORAGE_KEY));
    }
    return false;
  });

  const updatePhoto = async (fileOrDataUrl: File | string): Promise<boolean> => {
    let dataUrl = '';

    if (typeof fileOrDataUrl === 'string') {
      dataUrl = fileOrDataUrl;
    } else {
      dataUrl = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(fileOrDataUrl);
      });
    }

    if (!dataUrl) return false;

    setPhotoUrl(dataUrl);
    setIsCustomPhoto(true);

    try {
      localStorage.setItem(STORAGE_KEY, dataUrl);
    } catch {
      // ignore storage quota errors
    }

    // Also attempt server sync
    try {
      await fetch('/api/upload-photo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ image: dataUrl }),
      });
    } catch {
      // server sync failure is non-blocking since client state is already active
    }

    return true;
  };

  const resetPhoto = () => {
    localStorage.removeItem(STORAGE_KEY);
    setPhotoUrl(DEFAULT_PHOTO);
    setIsCustomPhoto(false);
  };

  return (
    <PhotoContext.Provider value={{ photoUrl, updatePhoto, resetPhoto, isCustomPhoto }}>
      {children}
    </PhotoContext.Provider>
  );
};

export const useProfilePhoto = (): PhotoContextType => {
  const context = useContext(PhotoContext);
  if (!context) {
    throw new Error('useProfilePhoto must be used within a PhotoProvider');
  }
  return context;
};
