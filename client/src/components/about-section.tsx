import { useRef } from "react";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useIntersectionObserver({ targetRef: sectionRef });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 bg-white dark:bg-gray-800"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">About Me</h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 text-center max-w-2xl">
            Robotics & AI Engineer with expertise in embedded systems, computer vision, and autonomous navigation systems.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <div className="relative rounded-xl overflow-hidden shadow-xl h-64 md:h-80">
              <svg 
                viewBox="0 0 800 600" 
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full object-cover bg-gray-100 dark:bg-gray-700"
              >
                <rect width="800" height="600" fill="currentColor" opacity="0.1" />
                <circle cx="400" cy="300" r="150" fill="currentColor" opacity="0.2" />
                <path d="M250,300 Q400,100 550,300 Q400,500 250,300" fill="currentColor" opacity="0.3" strokeWidth="8" />
                <path d="M200,200 L600,200 L600,400 L200,400 Z" fill="none" stroke="currentColor" strokeWidth="8" opacity="0.4" />
                <text x="400" y="300" textAnchor="middle" fill="currentColor" fontSize="40" fontWeight="bold">Robotics & AI</text>
              </svg>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
                <p className="font-medium">Building innovative robotics solutions</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.h3 variants={itemVariants} className="text-2xl font-semibold mb-4">Robotics & AI Engineer</motion.h3>
            <motion.p variants={itemVariants} className="text-gray-600 dark:text-gray-400 mb-6">
              I'm a passionate engineer specializing in robotics and artificial intelligence. With a strong foundation in both software and hardware, I build autonomous systems that can perceive, decide, and act in the real world.
            </motion.p>
            
            <motion.div variants={containerVariants} className="space-y-4 mb-8">
              <motion.div variants={itemVariants} className="flex gap-2">
                <div className="text-primary mt-1"><i className="fas fa-check-circle"></i></div>
                <div>
                  <h4 className="font-medium">Autonomous Navigation Systems</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Designing and implementing navigation solutions for unmanned vehicles</p>
                </div>
              </motion.div>
              <motion.div variants={itemVariants} className="flex gap-2">
                <div className="text-primary mt-1"><i className="fas fa-check-circle"></i></div>
                <div>
                  <h4 className="font-medium">Computer Vision & AI</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Building intelligent systems that can see and understand their environment</p>
                </div>
              </motion.div>
              <motion.div variants={itemVariants} className="flex gap-2">
                <div className="text-primary mt-1"><i className="fas fa-check-circle"></i></div>
                <div>
                  <h4 className="font-medium">Embedded Systems & PCB Design</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Creating custom hardware solutions for robotics applications</p>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              variants={containerVariants}
              className="grid grid-cols-2 md:grid-cols-3 gap-4"
            >
              {[
                { icon: "fas fa-code", label: "AI & ML" },
                { icon: "fas fa-microchip", label: "Embedded" },
                { icon: "fas fa-robot", label: "Robotics" },
                { icon: "fas fa-eye", label: "Computer Vision" },
                { icon: "fas fa-cogs", label: "Hardware" },
                { icon: "fas fa-sitemap", label: "IoT" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg text-center"
                >
                  <div className="text-primary text-2xl mb-2">
                    <i className={item.icon}></i>
                  </div>
                  <div className="font-medium">{item.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
