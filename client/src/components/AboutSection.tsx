import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { 
  FaCode, 
  FaMicrochip, 
  FaRobot, 
  FaEye, 
  FaCogs, 
  FaSitemap, 
  FaCheckCircle 
} from "react-icons/fa";
import { resumeData } from "@/data/resume-data";

const AboutSection = () => {
  const featureAreas = [
    { icon: <FaCode />, label: "AI & ML" },
    { icon: <FaMicrochip />, label: "Embedded" },
    { icon: <FaRobot />, label: "Robotics" },
    { icon: <FaEye />, label: "Computer Vision" },
    { icon: <FaCogs />, label: "Hardware" },
    { icon: <FaSitemap />, label: "IoT" }
  ];

  const keyFeatures = [
    {
      title: "Autonomous Navigation & Tracking",
      description: "Developing UGVs with person-following capabilities and autonomous navigation using SLAM and Nav2 Stack"
    },
    {
      title: "Computer Vision & AI Integration",
      description: "Implementing advanced vision systems using DAM4+SAM2, MediaPipe, and custom detection algorithms"
    },
    {
      title: "Hardware Design & Electronics",
      description: "Creating custom hardware solutions with STM32, Arduino, ESP32, and designing PCBs for robotics applications"
    },
    {
      title: "Gesture-Based Control Systems",
      description: "Building intuitive gesture recognition interfaces for drone and robotic control"
    }
  ];

  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex flex-col items-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">About Me</h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-6"></div>
          <p className="text-muted-foreground text-center max-w-2xl">
            Robotics & AI Engineer specializing in developing intelligent autonomous systems with expertise in advanced computer vision, embedded electronics, and custom PCB design for real-world robotics applications.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <svg
                className="w-full h-64 text-primary/20 bg-black/5"
                viewBox="0 0 100 100"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Robot Body */}
                <rect x="35" y="40" width="30" height="40" rx="2" fill="currentColor" opacity="0.7" />
                
                {/* Robot Head */}
                <rect x="40" y="25" width="20" height="15" rx="2" fill="currentColor" opacity="0.8" />
                
                {/* Robot Eyes */}
                <circle cx="45" cy="30" r="2" fill="white" />
                <circle cx="55" cy="30" r="2" fill="white" />
                
                {/* Robot Arms */}
                <rect x="25" y="45" width="10" height="4" rx="1" fill="currentColor" opacity="0.6" />
                <rect x="65" y="45" width="10" height="4" rx="1" fill="currentColor" opacity="0.6" />
                
                {/* Robot Antenna */}
                <rect x="49" y="20" width="2" height="5" fill="currentColor" />
                <circle cx="50" cy="18" r="2" fill="currentColor" />
                
                {/* Robot Legs */}
                <rect x="40" y="80" width="5" height="10" rx="1" fill="currentColor" opacity="0.7" />
                <rect x="55" y="80" width="5" height="10" rx="1" fill="currentColor" opacity="0.7" />
                
                {/* Circuit Board Background */}
                <path d="M10 10 H90 V90 H10 Z" fill="none" stroke="currentColor" strokeWidth="0.2" />
                <path d="M20 10 V90" stroke="currentColor" strokeWidth="0.2" strokeDasharray="2,2" />
                <path d="M40 10 V90" stroke="currentColor" strokeWidth="0.2" strokeDasharray="2,2" />
                <path d="M60 10 V90" stroke="currentColor" strokeWidth="0.2" strokeDasharray="2,2" />
                <path d="M80 10 V90" stroke="currentColor" strokeWidth="0.2" strokeDasharray="2,2" />
                <path d="M10 20 H90" stroke="currentColor" strokeWidth="0.2" strokeDasharray="2,2" />
                <path d="M10 40 H90" stroke="currentColor" strokeWidth="0.2" strokeDasharray="2,2" />
                <path d="M10 60 H90" stroke="currentColor" strokeWidth="0.2" strokeDasharray="2,2" />
                <path d="M10 80 H90" stroke="currentColor" strokeWidth="0.2" strokeDasharray="2,2" />
                
                {/* Circuit Components */}
                <circle cx="20" cy="20" r="3" fill="currentColor" opacity="0.3" />
                <circle cx="80" cy="80" r="3" fill="currentColor" opacity="0.3" />
                <rect x="75" y="20" width="6" height="6" fill="currentColor" opacity="0.3" />
                <rect x="15" y="75" width="6" height="6" fill="currentColor" opacity="0.3" />
              </svg>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-primary/90 to-transparent text-white">
                <p className="font-medium text-lg">Building innovative robotics solutions</p>
                <p className="text-sm text-white/80">Merging hardware, software, and AI for real-world applications</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Robotics & AI Engineer</h3>
            <p className="text-muted-foreground mb-6">
              I'm a passionate engineer specializing in robotics and artificial intelligence with expertise in embedded systems design. With a strong foundation in both software and hardware development, I build innovative autonomous systems that seamlessly integrate AI algorithms with custom electronics to solve real-world challenges.
            </p>
            
            <div className="space-y-4 mb-8">
              {keyFeatures.map((feature, index) => (
                <div key={index} className="flex gap-2">
                  <div className="text-primary mt-1">
                    <FaCheckCircle />
                  </div>
                  <div>
                    <h4 className="font-medium">{feature.title}</h4>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {featureAreas.map((area, index) => (
                <Card key={index} className="bg-muted/50">
                  <CardContent className="p-4 text-center">
                    <div className="text-primary text-2xl mb-2">
                      {area.icon}
                    </div>
                    <div className="font-medium">{area.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
