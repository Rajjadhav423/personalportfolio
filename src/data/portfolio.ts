
export const portfolioData = {
  personal: {
    name: "Rajesh Jadhav",
    role: "Full Stack Developer",
    roles: [
      "Software Developer",
      "Full Stack Engineer",
      "Salesforce Developer",
    ],
    description: "Aspiring Software Developer with hands-on experience in full-stack web development, Salesforce CRM platform development, and machine learning research.",
    aboutDescription: {
      p1: "Hi! I'm Rajesh Jadhav, an aspiring Full Stack Developer and Machine Learning enthusiast with a passion for creating cutting-edge software solutions.",
      p2: "Currently a Software Engineer at Koshine Tech Labs, I specialize in Java, Python, and MERN stack development. I am a 3x Certified Salesforce Developer committed to building scalable, efficient, and innovative web applications.",
      p3: "My mission is to push the boundaries of technology—merging conversational AI with seamless user experiences and streamlining complex workflows through code. I am a fast learner, problem-solver, and ready to make an impact."
    },
    location: "Nanded, Maharashtra, India",
    email: "jadhavrz423@gmail.com",
    phone: "+91-9322850587",
    linkedin: "https://www.linkedin.com/in/rajeshjadhav057",
    github: "https://github.com/Rajjadhav423",
  },
  
  stats: [
    { value: "4+", label: "Projects Built" },
    { value: "1+", label: "Year Experience" },
    { value: "3", label: "Salesforce Certs" },
    { value: "3x", label: "Certified Dev" },
  ],

  experiences: [
    {
      company: "Koshine Tech Labs",
      role: "Software Engineer",
      duration: "Nov 2025 – Present",
      location: "Pune, India",
      description: "Spearheading software and Salesforce development, designing scalable solutions and enterprise-grade applications.",
      highlights: [
        "Designing and optimizing scalable applications using MERN stack and Salesforce cloud-based technologies.",
        "Contributing to 'Replydock', a multi-tenant platform integrating Slack and WhatsApp for seamless customer communication.",
        "Implementing complex Salesforce automation workflows and custom LWC components for enterprise clients.",
      ],
      color: "cyan",
    },
    {
      company: "Koshine Tech Labs",
      role: "Software Developer Intern",
      duration: "Feb 2025 – Oct 2025",
      location: "Pune, India",
      description: "Gained hands-on experience in cloud solutions, focusing on backend architecture and CRM capability enhancement.",
      highlights: [
        "Assisted in building 'CRUDSpace', a multi-org management tool with custom metadata editors.",
        "Enhanced platform capabilities by integrating secure REST APIs and optimizing database queries.",
        "Collaborated with senior developers to implement industry best practices in code quality and deployment pipelines.",
      ],
      color: "blue",
    },
    {
      company: "BITS Pilani Goa Campus",
      role: "Research Intern",
      duration: "Jan 2025 – May 2025",
      location: "Goa, India",
      description: "Worked on predictive modeling and AI-driven capability research for sustainable chemistry applications.",
      highlights: [
        "Developed a 'Predictive Lignin Dissolution Model' using Large Language Models (LLMs) to advance sustainable chemistry research.",
        "Designed a 'Thermodynamic Property Prediction Chatbot' leveraging conversational AI for real-time scientific data analysis.",
        "Utilized Python, TensorFlow, and Scikit-learn to process experimental data and solve complex interdisciplinary problems.",
      ],
      color: "purple",
    },
  ],

  education: {
    degree: "Bachelor of Technology in Information Technology",
    university: "SGGS Institute of Engineering and Technology, Nanded",
    year: "2021 – 2025",
    cgpa: "CGPA: 7.94/10",
    certifications: [
      {
        title: "Salesforce Certified Administrator",
        issuer: "Salesforce",
        year: "2025",
        color: "cyan",
      },
      {
        title: "Salesforce AI Associate",
        issuer: "Salesforce",
        year: "2025",
        color: "purple",
      },
      {
        title: "Salesforce Agentforce",
        issuer: "Salesforce",
        year: "2025",
        color: "pink",
      },
      {
        title: "Full Stack Web Development (MERN)",
        issuer: "Certification Course",
        year: "2024",
        color: "blue",
      },
      {
        title: "Java Application Development",
        issuer: "Innovative Products Workshop",
        year: "2023",
        color: "orange",
      },
      {
        title: "Introduction to Programming Using Python",
        issuer: "Certification",
        year: "Completed",
        color: "green",
      },
    ],
    coursework: [
      "Data Structures & Algorithms",
      "Database Management",
      "Software Engineering",
      "Computer Networks",
      "Machine Learning",
      "Object Oriented Programming",
    ]
  },

  skills: [
    {
      title: "Programming Languages",
      skills: ["JavaScript", "TypeScript", "Python", "Java", "C++", "SQL", "HTML5", "CSS3"],
      color: "cyan",
    },
    {
      title: "Frontend Technologies",
      skills: ["React.js", "Next.js", "LWC", "Tailwind CSS", "Bootstrap", "Responsive Design"],
      color: "purple",
    },
    {
      title: "Backend Technologies",
      skills: ["Node.js", "Express.js", "Apache Kafka", "RESTful APIs", "Microservices"],
      color: "pink",
    },
    {
      title: "Salesforce Technologies",
      skills: ["Apex", "Salesforce Admin", "jsforce", "SOQL/SOSL", "Lightning Platform"],
      color: "blue",
    },
    {
      title: "Databases & Storage",
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Supabase", "Prisma ORM"],
      color: "green",
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS", "Git", "GitHub", "Slack Integration", "Docker", "CI/CD", "OAuth", "JWT"],
      color: "orange",
    },
    {
      title: "Machine Learning",
      skills: ["Supervised Learning", "Unsupervised Learning", "Reinforcement Learning", "TensorFlow", "scikit-learn"],
      color: "red",
    },
  ],

  projects: [
    {
      title: "Cloud Force CRM Manager (CFCRM)",
      description: "AI-powered Salesforce CRM platform with Sales Cloud & Service Cloud support, natural language query assistant, schema visualization, multi-org management, and secure OAuth authentication.",
      tech: ["Next.js", "jsforce", "Salesforce API", "AI Integration", "Tailwind CSS"],
      date: "May 2025",
      features: ["Natural Language Query", "Schema Visualization", "Multi-Org Management", "Real-time Analytics"],
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      title: "Uber Clone - Ride Sharing App",
      description: "Full-stack ride-sharing application with real-time booking, vehicle selection, fare estimation, live GPS tracking, and responsive React.js frontend.",
      tech: ["React.js", "Node.js", "Socket.IO", "Google Maps API", "JWT"],
      date: "November 2024",
      features: ["Real-time Tracking", "Live Booking", "Fare Estimation", "Driver Matching"],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "StudyNotion - EdTech Platform",
      description: "Educational platform for course creation, enrollment, content management, and progress tracking. Integrated secure Razorpay payments supporting 1000+ users.",
      tech: ["MERN Stack", "Razorpay", "MongoDB", "Express.js", "React.js"],
      date: "November 2023",
      features: ["Course Management", "Payment Integration", "User Authentication", "Rating System"],
      gradient: "from-orange-500 to-red-500",
    },
  ]
};
