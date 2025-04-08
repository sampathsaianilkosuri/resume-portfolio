import { useState, useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { useDarkMode } from "@/hooks/use-dark-mode";
import { useActiveSectionContext } from "@/hooks/use-active-section";

function App() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const { activeSection, setActiveSection } = useActiveSectionContext();
  const [isBackToTopVisible, setIsBackToTopVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsBackToTopVisible(true);
      } else {
        setIsBackToTopVisible(false);
      }

      // Detect which section is in view
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < 100 && sectionTop > -section.clientHeight + 100) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setActiveSection]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen transition-colors duration-200">
      <div className="fixed inset-0 bg-gradient-to-b from-blue-50 to-white dark:from-blue-950 dark:to-blue-900 z-[-3]"></div>
      <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzQjgyRjYiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNiA2djZoNnYtNmgtNnptLTEyIDBoNnY2aC02di02em0xMiAwaDZ2NmgtNnYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] dark:bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzQjgyRjYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzR2Nmg2di02aC02em02IDZ2Nmg2di02aC02em0tMTIgMGg2djZoLTZ2LTZ6bTEyIDBoNnY2aC02di02eiIvPjwvZz48L2c+PC9zdmc+')] bg-[length:60px_60px] opacity-60 z-[-2]"></div>
      <div className="fixed inset-0 bg-gradient-to-tr from-blue-500/[0.03] via-transparent to-indigo-500/[0.03] dark:from-blue-500/10 dark:to-indigo-500/10 z-[-1]"></div>
      
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} activeSection={activeSection} />
      
      <main className="pt-16 relative">
        {/* Floating color orbs for light & dark mode */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-blue-600/20 dark:from-blue-400/30 dark:to-blue-600/30 rounded-full filter blur-3xl z-[-1] animate-pulse"></div>
        <div className="absolute top-40 right-10 w-80 h-80 bg-gradient-to-r from-indigo-400/20 to-indigo-600/20 dark:from-indigo-400/30 dark:to-indigo-600/30 rounded-full filter blur-3xl z-[-1] animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-60 left-1/4 w-64 h-64 bg-gradient-to-r from-sky-400/10 to-cyan-300/10 dark:from-sky-400/20 dark:to-cyan-300/20 rounded-full filter blur-3xl z-[-1] animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-20 right-1/4 w-56 h-56 bg-gradient-to-r from-blue-500/10 to-violet-500/10 dark:from-blue-500/20 dark:to-violet-500/20 rounded-full filter blur-3xl z-[-1] animate-pulse" style={{ animationDelay: '4s' }}></div>
        
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      
      <Footer activeSection={activeSection} />
      
      {/* Back to top button */}
      <button 
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 p-3 rounded-full cool-button transition-all duration-300 z-50 ${
          isBackToTopVisible ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  );
}

export default App;