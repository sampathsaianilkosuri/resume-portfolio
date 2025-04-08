import { 
  FaRobot, 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaChevronRight 
} from "react-icons/fa";
import { scrollToSection } from "@/lib/utils";
import { resumeData } from "@/data/resume-data";

interface FooterProps {
  activeSection: string;
}

const Footer = ({ activeSection }: FooterProps) => {
  const { contact, socialLinks } = resumeData;
  const currentYear = new Date().getFullYear();

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <FaRobot />
              <span>Sampath Kosuri</span>
            </h3>
            <p className="text-gray-400 mb-6">
              Robotics & AI Engineer specializing in autonomous systems, computer vision, and embedded applications.
            </p>
            <div className="flex gap-4">
              <a 
                href={socialLinks.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <FaGithub className="text-lg" />
              </a>
              <a 
                href={socialLinks.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <FaLinkedin className="text-lg" />
              </a>
              <a 
                href={`mailto:${contact.email}`}
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <FaEnvelope className="text-lg" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navItems.map(item => (
                <li key={item.id}>
                  <a 
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.id);
                    }}
                    className={`text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2 ${
                      activeSection === item.id ? 'text-primary' : ''
                    }`}
                  >
                    <FaChevronRight className="text-xs" />
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="text-primary mt-1"><FaEnvelope /></div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a 
                    href={`mailto:${contact.email}`} 
                    className="hover:text-primary transition-colors duration-200"
                  >
                    {contact.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="text-primary mt-1"><FaRobot /></div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <a 
                    href={`tel:${contact.phone}`} 
                    className="hover:text-primary transition-colors duration-200"
                  >
                    {contact.phone}
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Sampath Sai Anil Kosuri. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-white transition-colors duration-200 text-sm">Privacy Policy</a>
            <span className="text-gray-700 mx-2">|</span>
            <a href="#" className="text-gray-500 hover:text-white transition-colors duration-200 text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
