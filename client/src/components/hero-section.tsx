import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { scrollToSection } from "@/lib/utils";

interface HeroSectionProps {
  setActiveSection: (section: string) => void;
}

const HeroSection = ({ setActiveSection }: HeroSectionProps) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
        <svg 
          viewBox="0 0 1000 1000" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover"
        >
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          <circle cx="500" cy="500" r="300" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M 300 500 Q 500 200 700 500" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-20 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="order-2 lg:order-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-lg md:text-xl font-medium text-primary mb-2">Hello, I'm</h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Sampath Sai Anil Kosuri</h1>
            <p className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300 mb-6">Robotics & AI Engineer</p>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
              Smart, confident software engineer specializing in robotics, AI solutions, and autonomous systems with expertise in computer vision and embedded systems.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg"
                onClick={() => scrollToSection('projects', setActiveSection)}
                className="rounded-md"
              >
                <i className="fas fa-robot mr-2"></i>
                <span>View Projects</span>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('contact', setActiveSection)}
                className="rounded-md"
              >
                <i className="fas fa-envelope mr-2"></i>
                <span>Contact Me</span>
              </Button>
            </div>
            
            <div className="mt-8 flex items-center gap-4">
              <a href="https://github.com/sampathsaianilkosuri" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors duration-200 text-xl">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/sampath-sai-anil-kosuri-43aba224a" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors duration-200 text-xl">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="mailto:sampathsaianilkosuri@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors duration-200 text-xl">
                <i className="fas fa-envelope"></i>
              </a>
              <a href="tel:+916300550177" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors duration-200 text-xl">
                <i className="fas fa-phone"></i>
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="order-1 lg:order-2 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-60 h-60 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg">
              <svg 
                viewBox="0 0 200 200" 
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full object-cover bg-gray-200 dark:bg-gray-700"
              >
                <path 
                  fill="currentColor" 
                  d="M100,20 C120,20 140,40 140,80 C140,100 130,110 120,120 C110,130 90,140 100,180 L100,180 L100,20 Z" 
                  opacity="0.2"
                />
                <circle cx="100" cy="70" r="30" fill="currentColor" opacity="0.6" />
                <path 
                  d="M60,100 Q100,140 140,100 Q120,140 100,150 Q80,140 60,100" 
                  fill="currentColor"
                  opacity="0.3"
                />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <motion.a 
          href="#about" 
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('about', setActiveSection);
          }}
          className="text-gray-500 dark:text-gray-400 hover:text-primary transition-colors duration-200"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <i className="fas fa-chevron-down text-2xl"></i>
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
