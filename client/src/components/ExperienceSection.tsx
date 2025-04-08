import { motion } from "framer-motion";
import { Timeline, TimelineItem } from "@/components/ui/timeline";
import { Card, CardContent } from "@/components/ui/card";
import { 
  FaBriefcase, 
  FaGraduationCap, 
  FaTrophy, 
  FaChevronRight 
} from "react-icons/fa";
import { resumeData } from "@/data/resume-data";

const ExperienceSection = () => {
  const { experience, education, achievements } = resumeData;

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex flex-col items-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Experience & Education</h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-6"></div>
          <p className="text-muted-foreground text-center max-w-2xl">
            My professional journey and academic background in robotics, AI, and engineering.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Professional Experience */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-8 flex items-center gap-2">
              <FaBriefcase className="text-primary" />
              <span>Professional Experience</span>
            </h3>
            
            <Timeline>
              {experience.map((job, index) => (
                <TimelineItem key={index}>
                  <Card>
                    <CardContent className="p-5">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                        <h4 className="text-lg font-medium">{job.title}</h4>
                        <span className="text-sm text-muted-foreground">{job.period}</span>
                      </div>
                      <p className="text-primary font-medium mb-3">{job.company}</p>
                      <ul className="text-muted-foreground text-sm space-y-2">
                        {job.responsibilities.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <FaChevronRight className="mt-1 text-xs text-primary" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </TimelineItem>
              ))}
            </Timeline>
            
            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-8 flex items-center gap-2">
                <FaTrophy className="text-primary" />
                <span>Achievements</span>
              </h3>
              
              <Card>
                <CardContent className="p-5">
                  {achievements.map((achievement, index) => (
                    <div key={index}>
                      <h4 className="text-lg font-medium mb-3">{achievement.title}</h4>
                      <p className="text-muted-foreground text-sm">{achievement.description}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </motion.div>
          
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-8 flex items-center gap-2">
              <FaGraduationCap className="text-primary" />
              <span>Education</span>
            </h3>
            
            <Timeline>
              {education.map((edu, index) => (
                <TimelineItem key={index}>
                  <Card>
                    <CardContent className="p-5">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                        <h4 className="text-lg font-medium">{edu.degree}</h4>
                        <span className="text-sm text-muted-foreground">{edu.period}</span>
                      </div>
                      <p className="text-primary font-medium mb-2">{edu.institution}</p>
                      <p className="text-muted-foreground text-sm">
                        Score: {edu.score}
                      </p>
                    </CardContent>
                  </Card>
                </TimelineItem>
              ))}
            </Timeline>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
