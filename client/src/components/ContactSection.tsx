import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { 
  FaEnvelope, 
  FaPhone, 
  FaLinkedin, 
  FaGithub, 
  FaPaperPlane 
} from "react-icons/fa";
import { apiRequest } from "@/lib/queryClient";
import { resumeData } from "@/data/resume-data";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { contact, socialLinks } = resumeData;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await apiRequest('POST', '/api/contact', formData);
      
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex flex-col items-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Get In Touch</h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-6"></div>
          <p className="text-muted-foreground text-center max-w-2xl">
            Have a project in mind or want to discuss collaboration opportunities? Feel free to reach out.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-primary-foreground p-3 rounded-md">
                      <FaEnvelope />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Email</h4>
                      <a 
                        href={`mailto:${contact.email}`} 
                        className="text-muted-foreground hover:text-primary transition-colors duration-200"
                      >
                        {contact.email}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-primary-foreground p-3 rounded-md">
                      <FaPhone />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Phone</h4>
                      <a 
                        href={`tel:${contact.phone}`} 
                        className="text-muted-foreground hover:text-primary transition-colors duration-200"
                      >
                        {contact.phone}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-primary-foreground p-3 rounded-md">
                      <FaLinkedin />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">LinkedIn</h4>
                      <a 
                        href={socialLinks.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-muted-foreground hover:text-primary transition-colors duration-200"
                      >
                        Sampath Sai Anil Kosuri
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-primary-foreground p-3 rounded-md">
                      <FaGithub />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">GitHub</h4>
                      <a 
                        href={socialLinks.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-muted-foreground hover:text-primary transition-colors duration-200"
                      >
                        sampathsaianilkosuri
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="font-medium mb-4">Connect with me</h4>
                  <div className="flex gap-4">
                    <a 
                      href={socialLinks.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                    >
                      <FaGithub />
                    </a>
                    <a 
                      href={socialLinks.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                    >
                      <FaLinkedin />
                    </a>
                    <a 
                      href={`mailto:${contact.email}`}
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                    >
                      <FaEnvelope />
                    </a>
                    <a 
                      href={`tel:${contact.phone}`}
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                    >
                      <FaPhone />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
                
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                    <Input 
                      type="text" 
                      id="name" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                    <Input 
                      type="email" 
                      id="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                    <Input 
                      type="text" 
                      id="subject" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                    <Textarea 
                      id="message" 
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full flex items-center justify-center gap-2"
                    disabled={isSubmitting}
                  >
                    <span>Send Message</span>
                    <FaPaperPlane />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
