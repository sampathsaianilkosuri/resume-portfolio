import { FaRobot, FaCode, FaEye, FaChartBar } from 'react-icons/fa';

export const resumeData = {
  name: "Sampath Sai Anil Kosuri",
  title: "Robotics & AI Engineer",
  summary: "Smart, confident, and seeking employment as a Software Engineer in your organization, where I can utilize my knowledge and experience to help the company reach its goals.",
  contact: {
    email: "sampathsaianilkosuri@gmail.com",
    phone: "+916300550177"
  },
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/sampath-sai-anil-kosuri-43aba224a",
    github: "https://github.com/sampathsaianilkosuri"
  },
  skills: {
    programming: [
      { name: "Python (Automation)", level: "Advanced", percentage: 90 },
      { name: "NumPy / pandas / matplotlib", level: "Proficient", percentage: 85 },
      { name: "Java", level: "Intermediate", percentage: 75 },
      { name: "OpenCV / Media-Pipe", level: "Advanced", percentage: 90 },
      { name: "SQL", level: "Intermediate", percentage: 70 }
    ],
    robotics: [
      { name: "Gazebo Simulation", level: "Advanced", percentage: 85 },
      { name: "SLAM & Mapping", level: "Proficient", percentage: 80 },
      { name: "IoT with AI Integration", level: "Advanced", percentage: 90 }
    ],
    hardware: [
      { name: "STM32 Nucleo Board", level: "Advanced", percentage: 90 },
      { name: "Arduino Development", level: "Advanced", percentage: 95 },
      { name: "ESP32 & Jetson Orin Nano", level: "Proficient", percentage: 85 },
      { name: "PCB Design & EDA Software", level: "Advanced", percentage: 90 },
      { name: "Soldering & Electronics", level: "Advanced", percentage: 95 }
    ],
    ai: [
      { name: "Artificial Neural Networks", level: "Proficient", percentage: 80 },
      { name: "Computer Vision Applications", level: "Advanced", percentage: 90 }
    ]
  },
  tools: [
    "PyCharm", "VS Code", "STM32CubeIDE/MX", "Colab", "Jupyter", 
    "Arduino IDE", "EasyEDA", "ChatGPT", "Claude_AI", "DeepSeek", 
    "Microsoft Copilot", "Blackbox", "Gemini"
  ],
  projects: [
    {
      id: "person-following-ugv",
      title: "Person Following UGV",
      description: "An autonomous UGV that tracks a selected individual using DAM4+SAM2, ideal for luggage-carrying applications.",
      category: { name: "DAM4+SAM2", bgColor: "rgba(59, 130, 246, 0.25)", textColor: "#1a56db" },
      tags: ["Computer Vision", "Autonomy", "Robotics"],
      categories: ["autonomous", "vision"],
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z"/></svg>`
    },
    {
      id: "autonomous-navigation",
      title: "Autonomous Navigation UGV",
      description: "Created a mapping system using SLAM Toolbox and implemented autonomous navigation with the Nav2 Stack in Gazebo.",
      category: { name: "Gazebo", bgColor: "rgba(16, 185, 129, 0.3)", textColor: "#047857" },
      tags: ["SLAM", "Simulation", "Mapping"],
      categories: ["autonomous"],
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M256,0C114.615,0,0,114.615,0,256S114.615,512,256,512,512,397.385,512,256,397.385,0,256,0ZM336,256a80,80,0,1,1-80-80A80.091,80.091,0,0,1,336,256Z"/></svg>`
    },
    {
      id: "face-following-drone",
      title: "Face Following Drone",
      description: "Designed a system to detect faces and follow individuals based on their position in the frame with real-time processing.",
      category: { name: "Computer Vision", bgColor: "rgba(245, 158, 11, 0.3)", textColor: "#d97706" },
      tags: ["Face Detection", "Drone Control", "Real-time"],
      categories: ["drone", "vision"],
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor"><path d="M208 0c-29.9 0-54.7 20.5-61.8 48.2-.8 0-1.4-.2-2.2-.2-35.3 0-64 28.7-64 64 0 4.8.6 9.5 1.7 14C52.5 138 32 166.6 32 200c0 12.6 3.2 24.3 8.3 34.9C16.3 248.7 0 274.3 0 304c0 33.3 20.4 61.9 49.4 73.9-.9 4.6-1.4 9.3-1.4 14.1 0 39.8 32.2 72 72 72 4.1 0 8.1-.5 12-1.2 9.6 28.5 36.2 49.2 68 49.2 39.8 0 72-32.2 72-72V64c0-35.3-28.7-64-64-64zm368 304c0-29.7-16.3-55.3-40.3-69.1 5.2-10.6 8.3-22.3 8.3-34.9 0-33.4-20.5-62-49.7-74 1-4.5 1.7-9.2 1.7-14 0-35.3-28.7-64-64-64-.8 0-1.5.2-2.2.2C422.7 20.5 397.9 0 368 0c-35.3 0-64 28.6-64 64v384c0 39.8 32.2 72 72 72 31.8 0 58.4-20.7 68-49.2 3.9.7 7.9 1.2 12 1.2 39.8 0 72-32.2 72-72 0-4.8-.5-9.5-1.4-14.1 29-12 49.4-40.6 49.4-73.9z"/></svg>`
    },
    {
      id: "person-following-luggage",
      title: "Person Following UGV",
      description: "Built a UGV capable of following any person while carrying luggage, using advanced person detection and tracking algorithms.",
      category: { name: "Luggage Carrier", bgColor: "rgba(59, 130, 246, 0.25)", textColor: "#1a56db" },
      tags: ["Object Tracking", "Embedded Systems", "Hardware"],
      categories: ["autonomous", "vision"],
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z"/></svg>`
    },
    {
      id: "gesture-controlled-drone",
      title: "Gesture-Controlled Drone",
      description: "Developed a drone control system based on finger count detection, implementing hand gesture recognition for intuitive operation.",
      category: { name: "Hand Gestures", bgColor: "rgba(245, 158, 11, 0.3)", textColor: "#d97706" },
      tags: ["Gesture Recognition", "MediaPipe", "Drone Control"],
      categories: ["drone", "vision"],
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M288 32C128.94 32 0 160.94 0 320c0 52.8 14.25 102.26 39.06 144.8 5.61 9.62 16.3 15.2 27.44 15.2h443c11.14 0 21.83-5.58 27.44-15.2C561.75 422.26 576 372.8 576 320c0-159.06-128.94-288-288-288zm0 64c14.71 0 26.58 10.13 30.32 23.65-1.11 2.26-2.64 4.23-3.45 6.67l-9.22 27.67c-5.13 3.49-10.97 6.01-17.64 6.01-17.67 0-32-14.33-32-32S270.33 96 288 96zM96 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm48-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm246.77-72.41l-61.33 184C343.13 347.33 352 364.54 352 384c0 11.72-3.38 22.55-8.88 32H232.88c-5.5-9.45-8.88-20.28-8.88-32 0-33.94 26.5-61.43 59.9-63.59l61.34-184.01c4.17-12.56 17.73-19.45 30.36-15.17 12.57 4.19 19.35 17.79 15.17 30.36zm14.66 57.2l15.52-46.55c3.47-1.29 7.13-2.23 11.05-2.23 17.67 0 32 14.33 32 32s-14.33 32-32 32c-11.38-.01-20.89-6.28-26.57-15.22zM480 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"/></svg>`
    }
  ],
  experience: [
    {
      title: "Robotics Electronics Engineer",
      company: "Kakinada Institute of Engineering and Technology",
      period: "Current",
      responsibilities: [
        "Guided students in implementing real-world projects",
        "Designed and developed embedded systems for robotic applications (Arduino, STM32)",
        "Created PCB designs including schematic capture and footprints using EasyEDA and KiCad",
        "Performed hardware assembly including soldering, drilling, and fabricating enclosures"
      ]
    }
  ],
  education: [
    {
      degree: "B.Tech in Artificial Intelligence",
      institution: "KIET College, Korangi, AP",
      period: "2021 - 2024",
      score: "70%"
    },
    {
      degree: "Diploma in Mechanical Engineering",
      institution: "KITS College, Divili, AP",
      period: "2018 - 2021",
      score: "86%"
    },
    {
      degree: "Secondary School (10th Grade)",
      institution: "Bhashyam School, Samalkot, AP",
      period: "2018",
      score: "95%"
    }
  ],
  achievements: [
    {
      title: "National Chess Competition",
      description: "Received a certificate of merit for being among the top 5/10 performers in the National Chess Competition."
    }
  ],
  hobbies: [
    "Playing Chess",
    "Listening to Music",
    "Learning new technologies"
  ]
};
