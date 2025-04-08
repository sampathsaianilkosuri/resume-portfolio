import { motion } from "framer-motion";
import { SkillProgress } from "@/components/ui/progress";
import { SkillTag } from "@/components/ui/skill-tag";
import { 
  FaCode, 
  FaRobot, 
  FaMicrochip, 
  FaBrain 
} from "react-icons/fa";
import { resumeData } from "@/data/resume-data";

const SkillsSection = () => {
  const { skills, tools } = resumeData;

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex flex-col items-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Technical Skills</h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-6"></div>
          <p className="text-muted-foreground text-center max-w-2xl">
            My expertise spans across software development, robotics, hardware, and AI applications.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <FaCode className="text-primary" />
              <span>Programming & Frameworks</span>
            </h3>
            
            <div className="space-y-4">
              {skills.programming.map((skill, index) => (
                <SkillProgress 
                  key={index}
                  name={skill.name}
                  level={skill.level}
                  percentage={skill.percentage}
                />
              ))}
            </div>
            
            <h3 className="text-xl font-semibold mt-12 mb-6 flex items-center gap-2">
              <FaRobot className="text-primary" />
              <span>Robotics & Simulation</span>
            </h3>
            
            <div className="space-y-4">
              {skills.robotics.map((skill, index) => (
                <SkillProgress 
                  key={index}
                  name={skill.name}
                  level={skill.level}
                  percentage={skill.percentage}
                />
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <FaMicrochip className="text-primary" />
              <span>Hardware & Electronics</span>
            </h3>
            
            <div className="space-y-4">
              {skills.hardware.map((skill, index) => (
                <SkillProgress 
                  key={index}
                  name={skill.name}
                  level={skill.level}
                  percentage={skill.percentage}
                />
              ))}
            </div>
            
            <h3 className="text-xl font-semibold mt-12 mb-6 flex items-center gap-2">
              <FaBrain className="text-primary" />
              <span>AI & Deep Learning</span>
            </h3>
            
            <div className="space-y-4">
              {skills.ai.map((skill, index) => (
                <SkillProgress 
                  key={index}
                  name={skill.name}
                  level={skill.level}
                  percentage={skill.percentage}
                />
              ))}
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold mb-6 text-center">Development Tools</h3>
          
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool, index) => (
              <SkillTag key={index} name={tool} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
