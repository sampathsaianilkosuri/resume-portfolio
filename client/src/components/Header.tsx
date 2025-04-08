import { useState } from 'react';
import { cn, scrollToSection } from '@/lib/utils';
import { useMediaQuery } from '@/hooks/use-mobile';
import { FaRobot } from 'react-icons/fa';
import { MoonIcon, SunIcon, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger,
  SheetClose
} from '@/components/ui/sheet';
import { downloadResume } from '@/lib/utils';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  activeSection: string;
}

const Header = ({ darkMode, toggleDarkMode, activeSection }: HeaderProps) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [sheetOpen, setSheetOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    if (isMobile) {
      setSheetOpen(false);
    }
  };

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/70 dark:bg-blue-950/30 border-b border-blue-200/50 dark:border-blue-500/20 shadow-[0_4px_15px_rgba(0,0,0,0.1)] transition-colors duration-200">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a 
          href="#home" 
          className="text-xl font-bold hero-gradient-text flex items-center gap-2"
          onClick={() => handleNavClick('home')}
        >
          <FaRobot className="text-2xl text-blue-400" />
          <span className="text-blue-800 dark:text-blue-100">Sampath Kosuri</span>
        </a>
        
        {!isMobile && (
          <div className="flex items-center gap-8">
            {navItems.map(item => (
              <a 
                key={item.id}
                href={`#${item.id}`} 
                className={cn(
                  "font-medium transition-all duration-200 relative py-1",
                  activeSection === item.id 
                    ? "text-blue-600 dark:text-blue-300" 
                    : "text-blue-800 dark:text-blue-100 hover:text-blue-600 dark:hover:text-blue-300"
                )}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-400 rounded-full" />
                )}
              </a>
            ))}
          </div>
        )}
        
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleDarkMode}
            className="w-9 h-9 rounded-full bg-blue-100/80 dark:bg-blue-900/50 border border-blue-300/50 dark:border-blue-500/30 flex items-center justify-center text-blue-600 dark:text-blue-300 hover:text-blue-800 dark:hover:text-blue-100 hover:border-blue-400 transition-all duration-200"
          >
            {darkMode ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
          </button>
          
          {!isMobile && (
            <button onClick={downloadResume} className="cool-button text-white">
              Download CV
            </button>
          )}
          
          {isMobile && (
            <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
              <SheetTrigger asChild>
                <button className="w-9 h-9 rounded-full bg-blue-100/80 dark:bg-blue-900/50 border border-blue-300/50 dark:border-blue-500/30 flex items-center justify-center text-blue-600 dark:text-blue-300 hover:text-blue-800 dark:hover:text-blue-100 hover:border-blue-400 transition-all duration-200">
                  <Menu className="h-5 w-5" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[250px] sm:w-[300px] bg-gradient-to-br from-white to-blue-50 dark:from-blue-950 dark:to-blue-900 border-l border-blue-200/50 dark:border-blue-500/20">
                <div className="flex flex-col gap-4 py-4">
                  {navItems.map(item => (
                    <SheetClose asChild key={item.id}>
                      <a 
                        href={`#${item.id}`}
                        className={cn(
                          "px-4 py-3 rounded-md transition-all duration-200",
                          activeSection === item.id 
                            ? "bg-blue-100/50 dark:bg-blue-800/50 text-blue-600 dark:text-blue-300 border-l-2 border-blue-400" 
                            : "hover:bg-blue-50 dark:hover:bg-blue-800/30 text-blue-700 dark:text-blue-100 border-l-2 border-transparent"
                        )}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(item.id);
                        }}
                      >
                        {item.label}
                      </a>
                    </SheetClose>
                  ))}
                  <SheetClose asChild>
                    <button 
                      className="cool-button w-full mt-2 text-white" 
                      onClick={downloadResume}
                    >
                      Download CV
                    </button>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
