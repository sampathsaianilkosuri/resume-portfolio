import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/utils";
import { motion } from "framer-motion";
import { FaRobot, FaEnvelope, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import { resumeData } from "@/data/resume-data";
import profileImage from "@/assets/profile.png";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Futuristic Grid Background */}
      <div className="absolute inset-0 z-0 opacity-10">
        <svg
          viewBox="0 0 1000 1000"
          className="w-full h-full object-cover"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
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
            <h2 className="text-lg md:text-xl font-medium text-blue-400 mb-2">Hello, I'm</h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 hero-gradient-text">{resumeData.name}</h1>
            <p className="text-xl md:text-2xl font-medium text-blue-300 mb-6">{resumeData.title}</p>
            <p className="text-blue-100 mb-8 max-w-lg backdrop-blur-sm p-4 rounded-lg bg-blue-900/20 border border-blue-500/20">
              {resumeData.summary}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => scrollToSection('projects')}
                className="cool-button flex items-center gap-2 text-white"
              >
                <FaRobot />
                <span>View Projects</span>
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-5 py-2 rounded-md border border-blue-500/50 bg-blue-950/50 text-blue-300 hover:bg-blue-900/30 transition-all duration-300 hover:border-blue-400 flex items-center gap-2"
              >
                <FaEnvelope />
                <span>Contact Me</span>
              </button>
            </div>
            
            <div className="mt-8 flex items-center gap-4">
              <a 
                href={resumeData.socialLinks.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-300 hover:text-blue-100 transition-colors duration-200 text-xl hover:scale-110 transform"
              >
                <FaGithub />
              </a>
              <a 
                href={resumeData.socialLinks.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-300 hover:text-blue-100 transition-colors duration-200 text-xl hover:scale-110 transform"
              >
                <FaLinkedin />
              </a>
              <a 
                href={`mailto:${resumeData.contact.email}`}
                className="text-blue-300 hover:text-blue-100 transition-colors duration-200 text-xl hover:scale-110 transform"
              >
                <FaEnvelope />
              </a>
              <a 
                href={`tel:${resumeData.contact.phone}`}
                className="text-blue-300 hover:text-blue-100 transition-colors duration-200 text-xl hover:scale-110 transform"
              >
                <FaPhone />
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="order-1 lg:order-2 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-60 h-60 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-500/50 shadow-[0_0_25px_rgba(59,130,246,0.5)] relative">
              <div className="absolute inset-0 bg-blue-500/20 mix-blend-overlay"></div>
              <img 
                src={profileImage} 
                alt="Sampath Sai Anil Kosuri" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <motion.a 
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('about');
          }}
          className="text-blue-400 hover:text-blue-300 transition-colors duration-200 bg-blue-900/30 p-2 rounded-full border border-blue-500/30"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
