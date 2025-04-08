import React, { useState, createContext, useContext } from 'react';

interface ActiveSectionContextType {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const ActiveSectionContext = createContext<ActiveSectionContextType>({
  activeSection: 'home',
  setActiveSection: () => {},
});

export const ActiveSectionProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
};

export const useActiveSectionContext = () => {
  const context = useContext(ActiveSectionContext);
  if (context === undefined) {
    throw new Error('useActiveSectionContext must be used within an ActiveSectionProvider');
  }
  return context;
};