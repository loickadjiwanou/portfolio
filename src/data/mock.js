// Mock data for the portfolio

export const portfolioData = {
  personal: {
    name: "Loick Adjiwanou",
    title: "Software Architect & Mobile Developer",
    email: "loick.adj@gmail.com",
    phone: "+229 01 61 12 19 22",
    location: "Jericho, Cotonou - BENIN",
    birthDate: "11/26/2000",
    linkedin: "loick-adjiwanou",
    github: "loickadjiwanou",
    bio: "I belong to a digital generation, passionate about technology, I master the major IT tools and technologies, with proven results when it comes to creating and implementing different projects related to the sector of computer technology.",
  },

  skills: {
    mobile: ["React Native", "Expo", "Kotlin", "Swift", "Java"],
    backend: ["Node.js", "Parse-Server", "Firebase", "Appwrite", "SupaBase"],
    databases: ["MySQL", "MongoDB", "PostgreSQL"],
    codeManagement: ["GitHub", "GitLab", "Gitea"],
    programming: ["Python", "Java", "JavaScript", "PHP"],
    others: ["Docker", "XML", "Vue.js"],
    systems: ["MacOS", "Linux", "Windows"],
  },

  experience: [
    {
      id: 1,
      position: "Mobile Developer",
      company: "RightCom",
      location: "Cotonou, BENIN",
      period: "Since March 2024",
      type: "Full-time",
      achievements: [
        "Improved and maintained a ticketing app with enhanced functionality",
        "Developed a mobile app for agents to manage tickets and customer calls",
        "Implemented Bluetooth printing modules for on-the-go receipt printing",
        "Contributed to backend integration with real-time ticketing data",
        "Optimized user experience with intuitive navigation",
        "Implemented offline mode with automatic data synchronization",
      ],
    },
    {
      id: 2,
      position: "Mobile Developer - Freelance",
      company: "Ministry of Tourism of Benin",
      location: "Cotonou, BENIN",
      period: "June 2025 - July 2025",
      type: "Freelance",
      achievements: [
        "Developed a mobile app for rating tourist sites, hotels, and restaurants with star-based system",
      ],
    },
    {
      id: 3,
      position: "Mobile Developer - Freelance",
      company: "AgriBiz",
      location: "Cotonou, BENIN",
      period: "October 2024 - December 2025",
      type: "Freelance",
      achievements: [
        "Developed agriculture management mobile app",
        "Implemented farm site monitoring and statistics tracking",
        "Built team management with task assignment and progress tracking",
        "Integrated chat functionality for team communication",
      ],
    },
    {
      id: 4,
      position: "Mobile Engineer (Internship)",
      company: "RightCom",
      location: "Cotonou, BENIN",
      period: "November 2023 - February 2024",
      type: "Internship",
      achievements: [
        "Developed a mobile ticketing solution using React Native",
        "Created native modules for printing with mobile printers",
        "Implemented UI designs from mockups to functional components",
      ],
    },
    {
      id: 5,
      position: "Frontend Engineer (Internship, Remote)",
      company: "Cyberspector",
      location: "Cotonou, BENIN",
      period: "August 2023 - October 2023",
      type: "Internship",
      achievements: [
        "Spearheaded frontend development of an e-learning platform for cybersecurity training",
        "Implemented interactive and responsive UI using Vue.js",
        "Translated design mockups into functional components",
        "Collaborated in an English-speaking, cross-functional team",
      ],
    },
    {
      id: 6,
      position: "Backend Engineer (Internship)",
      company: "RightCom",
      location: "Cotonou, BENIN",
      period: "May 2023 - July 2023",
      type: "Internship",
      achievements: [
        "Developed an online payment system using Node.js and Parse Server",
        "Created and optimized cloud functions for backend logic",
        "Improved backend architecture for seamless integration",
        "Developed a Twitter clone using Flutter and Firebase",
      ],
    },
    {
      id: 7,
      position: "Frontend Engineer (Internship)",
      company: "Sobebra Benin",
      location: "Cotonou, BENIN",
      period: "January 2023 - March 2023",
      type: "Internship",
      achievements: [
        "Developed custom WordPress plugins tailored to client needs",
        "Improved PHP and database management skills",
        "Gained hands-on experience with WordPress themes and plugins",
      ],
    },
  ],

  apps: [
    {
      id: 1,
      name: "RightCom Ticketing",
      category: "Business",
      description:
        "A comprehensive ticketing solution for customer service management with offline capabilities and Bluetooth printing.",
      longDescription:
        "Enhanced ticketing app with improved functionality for customer service operations. Features include real-time data synchronization, offline mode for uninterrupted service, and integrated Bluetooth printing for instant receipt generation.",
      techStack: [
        "React Native",
        "Parse-Server",
        "Bluetooth API",
        "Offline Storage",
      ],
      features: [
        "Real-time ticket management",
        "Offline mode with auto-sync",
        "Bluetooth receipt printing",
        "Agent dashboard",
        "Customer service tracking",
      ],
      images: [
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      ],
      status: "Live",
      client: "RightCom",
    },
    {
      id: 2,
      name: "Tourism Benin",
      category: "Travel",
      description:
        "Mobile app for rating and discovering tourist sites, hotels, and restaurants in Benin with an intuitive star-based rating system.",
      longDescription:
        "Official tourism app for the Ministry of Tourism of Benin, allowing tourists and locals to discover, rate, and review tourist attractions, accommodations, and dining options across the country.",
      techStack: [
        "React Native",
        "Firebase",
        "Google Maps API",
        "Rating System",
      ],
      features: [
        "Tourist site discovery",
        "Hotel and restaurant listings",
        "Star-based rating system",
        "User reviews and photos",
        "Interactive map integration",
        "Offline access to saved places",
      ],
      images: [
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&h=300&fit=crop",
      ],
      status: "Live",
      client: "Ministry of Tourism of Benin",
    },
    {
      id: 3,
      name: "AgriBiz Manager",
      category: "Agriculture",
      description:
        "Comprehensive agriculture management solution with farm monitoring, team management, and integrated communication tools.",
      longDescription:
        "Advanced agricultural management platform designed to help farmers and agricultural businesses monitor their operations, manage teams, track tasks, and maintain effective communication across all farm activities.",
      techStack: [
        "React Native",
        "Node.js",
        "MongoDB",
        "Real-time Chat",
        "Analytics",
      ],
      features: [
        "Farm site monitoring",
        "Statistics and analytics tracking",
        "Team management system",
        "Task assignment and tracking",
        "Integrated chat system",
        "Progress reporting",
        "Resource management",
      ],
      images: [
        "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=300&fit=crop",
      ],
      status: "Live",
      client: "AgriBiz",
    },
    {
      id: 4,
      name: "Agent Dashboard",
      category: "Business",
      description:
        "Specialized mobile application for service agents to efficiently manage customer interactions and service requests.",
      longDescription:
        "Companion app to the RightCom Ticketing system, specifically designed for service agents to handle customer calls, manage tickets, and maintain high service quality standards.",
      techStack: [
        "React Native",
        "Real-time API",
        "Push Notifications",
        "Analytics",
      ],
      features: [
        "Customer call management",
        "Ticket lifecycle tracking",
        "Performance analytics",
        "Real-time notifications",
        "Service quality metrics",
      ],
      images: [
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1553484771-8ba7ee565bef?w=400&h=300&fit=crop",
      ],
      status: "Live",
      client: "RightCom",
    },
    {
      id: 5,
      name: "CyberSec Learning",
      category: "Education",
      description:
        "Interactive e-learning platform focused on cybersecurity training with responsive design and dynamic content delivery.",
      longDescription:
        "Comprehensive cybersecurity training platform developed during internship at Cyberspector, featuring interactive modules, progress tracking, and adaptive learning paths.",
      techStack: [
        "Vue.js",
        "Node.js",
        "Progressive Web App",
        "Interactive Content",
      ],
      features: [
        "Interactive cybersecurity modules",
        "Progress tracking system",
        "Responsive design",
        "Multi-device compatibility",
        "Achievement system",
      ],
      images: [
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
      ],
      status: "Completed",
      client: "Cyberspector",
    },
    {
      id: 6,
      name: "Twitter Clone",
      category: "Social",
      description:
        "Full-featured social media application built with Flutter and Firebase, showcasing modern mobile development practices.",
      longDescription:
        "Complete social media platform clone developed as a final project presentation, demonstrating proficiency in Flutter development and Firebase integration.",
      techStack: [
        "Flutter",
        "Firebase",
        "Real-time Database",
        "Authentication",
      ],
      features: [
        "User authentication",
        "Real-time posting",
        "Follow/unfollow system",
        "Like and comment functionality",
        "Media sharing",
        "Push notifications",
      ],
      images: [
        "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=400&h=300&fit=crop",
      ],
      status: "Demo",
      client: "Academic Project",
    },
  ],

  education: [
    {
      degree: "Professional License in Software Architecture",
      institution: "ESGIS Cotonou",
      location: "Cotonou, BENIN",
      period: "September 2022 - June 2023",
    },
    {
      degree: "Computer Science, Networks and Telecommunications",
      institution: "ESGIS Cotonou",
      location: "Cotonou, BENIN",
      period: "September 2020 - July 2022",
    },
    {
      degree: "Certificate in English Language",
      institution: "Infoworld Professional Institute",
      location: "Accra, Ghana",
      period: "December 2018 - January 2020",
    },
  ],
};

export const appCategories = [
  "All",
  "Business",
  "Travel",
  "Agriculture",
  "Education",
  "Social",
];
