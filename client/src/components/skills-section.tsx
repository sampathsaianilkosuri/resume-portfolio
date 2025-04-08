import { useRef } from "react";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Progress } from "@/components/ui/progress";

interface Skill {
  name: string;
  level: string;
  percentage: number;
}

const SkillsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useIntersectionObserver({ targetRef: sectionRef });

  const programmingSkills: Skill[] = [
    { name: "Python (Automation)", level: "Advanced", percentage: 90 },
    { name: "NumPy / pandas / matplotlib", level: "Proficient", percentage: 85 },
    { name: "Java", level: "Intermediate", percentage: 75 },
    { name: "OpenCV / Media-Pipe", level: "Advanced", percentage: 90 },
    { name: "SQL", level: "Intermediate", percentage: 70 }
  ];

  const roboticsSkills: Skill[] = [
    { name: "Gazebo Simulation", level: "Advanced", percentage: 85 },
    { name: "SLAM & Mapping", level: "Proficient", percentage: 80 },
    { name: "IoT with AI Integration", level: "Advanced", percentage: 90 }
  ];

  const hardwareSkills: Skill[] = [
    { name: "STM32 Nucleo Board", level: "Advanced", percentage: 90 },
    { name: "Arduino Development", level: "Advanced", percentage: 95 },
    { name: "ESP32 & Jetson Orin Nano", level: "Proficient", percentage: 85 },
    { name: "PCB Design & EDA Software", level: "Advanced", percentage: 90 },
    { name: "Soldering & Electronics", level: "Advanced", percentage: 95 }
  ];

  const aiSkills: Skill[] = [
    { name: "Artificial Neural Networks", level: "Proficient", percentage: 80 },
    { name: "Computer Vision Applications", level: "Advanced", percentage: 90 }
  ];

  const developmentTools = [
    "PyCharm", "VS Code", "STM32CubeIDE/MX", "Colab", "Jupyter", 
    "Arduino IDE", "EasyEDA", "ChatGPT", "Claude_AI", "DeepSeek", 
    "Microsoft Copilot", "Blackbox", "Gemini"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const SkillBar = ({ skill }: { skill: Skill }) => (
    <motion.div variants={itemVariants}>
      <div className="flex justify-between mb-1">
        <span className="font-medium">{skill.name}</span>
        <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}</span>
      </div>
      <Progress value={skill.percentage} className="h-1 mb-4" />
    </motion.div>
  );

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-20 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Technical Skills</h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 text-center max-w-2xl">
            My expertise spans across software development, robotics, hardware, and AI applications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.h3 variants={itemVariants} className="text-xl font-semibold mb-6 flex items-center gap-2">
              <i className="fas fa-code text-primary"></i>
              <span>Programming & Frameworks</span>
            </motion.h3>
            
            <div className="space-y-2">
              {programmingSkills.map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </div>
            
            <motion.h3 variants={itemVariants} className="text-xl font-semibold mt-12 mb-6 flex items-center gap-2">
              <i className="fas fa-robot text-primary"></i>
              <span>Robotics & Simulation</span>
            </motion.h3>
            
            <div className="space-y-2">
              {roboticsSkills.map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.h3 variants={itemVariants} className="text-xl font-semibold mb-6 flex items-center gap-2">
              <i className="fas fa-microchip text-primary"></i>
              <span>Hardware & Electronics</span>
            </motion.h3>
            
            <div className="space-y-2">
              {hardwareSkills.map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </div>
            
            <motion.h3 variants={itemVariants} className="text-xl font-semibold mt-12 mb-6 flex items-center gap-2">
              <i className="fas fa-brain text-primary"></i>
              <span>AI & Deep Learning</span>
            </motion.h3>
            
            <div className="space-y-2">
              {aiSkills.map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-xl font-semibold mb-6 text-center">Development Tools</h3>
          
          <div className="flex flex-wrap justify-center gap-3">
            {developmentTools.map((tool, index) => (
              <motion.span 
                key={index}
                className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-sm transition-all duration-200 hover:-translate-y-1 hover:bg-gray-100 dark:hover:bg-gray-700"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.5 + index * 0.05 }}
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
