export interface Project {
  id: string;
  number: string;
  title: string;
  technologies: string[];
  description: string;
  details: {
    overview: string;
    problem: string;
    solution: string;
    keyFeatures: string[];
  };
}

export interface EducationItem {
  institution: string;
  location: string;
  degree: string;
  period: string;
  grade: string;
  isCurrent?: boolean;
}

export interface InternshipItem {
  number: string;
  role: string;
  company: string; period: string;
  descriptions: string[];
}

export interface AchievementItem {
  title: string;
  organization: string;
  description: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date?: string;
}

export interface SkillCategory {
  category: string;
  skills: { name: string; description?: string }[];
}

export const portfolioData = {
  personalInfo: {
    name: "RAMYA R",
    shortName: "RAMYA.",
    title: "Artificial Intelligence & Data Science Student",
    email: "rramyarayar@gmail.com",
    phone: "+91 88381 98934",
    linkedIn: "linkedin.com/in/ramya-rayar",
    linkedInUrl: "https://linkedin.com/in/ramya-rayar",
    status: "Open to Internship Opportunities",
    eyebrow: "ARTIFICIAL INTELLIGENCE & DATA SCIENCE",
    heroHeading: "Building intelligent solutions with data and technology.",
    heroHeadingHighlight: "intelligent solutions",
    heroIntro: "Dedicated Artificial Intelligence and Data Science student with hands-on experience in machine learning, data analysis, and intelligent application development.",
  },

  quickStats: [
    { label: "Degree", value: "B.Tech", subtext: "AI & Data Science" },
    { label: "CGPA", value: "8.69", subtext: "/ 10" },
    { label: "Internships", value: "3", subtext: "Completed" },
    { label: "Hackathons", value: "2", subtext: "National Level" },
  ],

  about: {
    heading: "Curious about technology.\nFocused on solving problems.",
    body: "Dedicated Artificial Intelligence and Data Science student with hands-on experience in academic projects involving machine learning, computer vision, and data analysis. Proficient in Python and SQL, with a strong interest in developing intelligent, data-driven solutions.",
    currentlyExploring: [
      "Machine Learning",
      "Data Analytics",
      "Python",
      "SQL",
      "JavaScript",
      "Data Visualization",
      "Artificial Intelligence",
    ],
  },

  education: [
    {
      institution: "Kathir College of Engineering",
      location: "Coimbatore, Tamil Nadu",
      degree: "B.Tech - Artificial Intelligence & Data Science",
      period: "2024 – 2028",
      grade: "CGPA: 8.69/ 10",
      isCurrent: true,
    },
    {
      institution: "NLC Girls Higher Secondary School",
      location: "Block-11, Neyveli, Tamil Nadu",
      degree: "HSC (Higher Secondary Certificate)",
      period: "2022 – 2023",
      grade: "HSC: 72%",
      isCurrent: false,
    },
    {
      institution: "NLC Girls Higher Secondary School",
      location: "Block-11, Neyveli, Tamil Nadu",
      degree: "SSLC (Secondary School Leaving Certificate)",
      period: "2021 – 2022",
      grade: "SSLC: 64%",
      isCurrent: false,
    },
  ] as EducationItem[],

  skills: [
    {
      category: "PROGRAMMING",
      skills: [
        { name: "Python", description: "Core language for ML algorithms, data manipulation, and AI tools." },
        { name: "MySQL", description: "Relational database querying and data management." },
        { name: "C", description: "Fundamental programming logic and memory structures." },
        { name: "JavaScript", description: "Versatile scripting language for web development and interactive applications." }
      ],
    },
    {
      category: "DATA & VISUALIZATION",
      skills: [
        { name: "Pandas", description: "Data manipulation, cleaning, and tabular analysis." },
        { name: "NumPy", description: "Numerical computing and multi-dimensional array operations." },
        { name: "Matplotlib", description: "Data visualization and graphical statistical representation." },
        { name: "MS Excel", description: "Data modeling, pivot tables, and analytical reports." },
        { name: "Power BI", description: "Interactive business intelligence dashboards and reporting." },
      ],
    },
    {
      category: "TOOLS",
      skills: [
        { name: "VS Code", description: "Primary IDE for Python, Web, and SQL development." },
        { name: "GitHub", description: "Version control and collaborative code repositories." },
      ],
    },
    {
      category: "SOFT SKILLS",
      skills: [
        { name: "Analytical Thinking" },
        { name: "Teamwork" },
        { name: "Quick Learner" },
        { name: "Adaptability" },
        { name: "Time Management" },
      ],
    },
    {
      category: "LANGUAGES",
      skills: [
        { name: "Tamil" },
        { name: "English" },
      ],
    },
  ] as SkillCategory[],

  experience: [
    {
      number: "01",
      role: "Data Analytics Intern",
      company: "LITZ Tech, Coimbatore",
      period: "December 2025",
      descriptions: [
        "Gained hands-on experience in data analysis, SQL, Excel, Python, and data visualization.",
        "Worked with real-world datasets to extract insights, build reports and dashboards, and support data-driven decisions.",
      ],
    },
    {
      number: "02",
      role: "AWS Cloud Computing Virtual Intern",
      company: "SmartBridge — NASSCOM FutureSkills Prime",
      period: "January – March 2026",
      descriptions: [
        "Learned AWS Cloud Computing concepts and gained practical experience with cloud services through hands-on assignments.",
      ],
    },
    {
      number: "03",
      role: "Power BI Intern",
      company: "CodeAlpha",
      period: "December 2025 – January 2026",
      descriptions: [
        "Developed Power BI dashboards, analyzed data, and created interactive reports.",
      ],
    },
  ] as InternshipItem[],

  projects: [
    {
      id: "ckd-prediction",
      number: "01",
      title: "CKD Prediction System",
      technologies: ["Python", "Machine Learning"],
      description: "Developed a machine learning model to predict Chronic Kidney Disease using patient health data.",
      details: {
        overview: "Developed an intelligent machine learning diagnostic framework engineered to analyze clinical health parameters and accurately predict Chronic Kidney Disease (CKD).",
        problem: "Early detection of Chronic Kidney Disease is vital for timely medical intervention, but diagnosing subtle physiological metrics requires automated, data-driven analysis.",
        solution: "Trained and evaluated machine learning classification models on multidimensional patient datasets to automate early risk stratification.",
        keyFeatures: [
          "Clinical dataset preprocessing & feature engineering",
          "Machine learning classification model training",
          "Early diagnostic risk prediction output",
        ],
      },
    },
    {
      id: "blood-bank-management",
      number: "02",
      title: "Smart Blood Bank Management System",
      technologies: ["Python", "SQL"],
      description: "Built a blood bank management system for donor and inventory management, simplifying blood request and availability tracking.",
      details: {
        overview: "A database-backed software system designed to streamline donor registration, blood inventory management, and emergency request fulfillment.",
        problem: "Manual tracking of blood inventory and donor requests leads to delays in critical healthcare emergencies.",
        solution: "Architected a relational database schema using SQL integrated with a clean Python interface to manage blood group availability and matching queries in real time.",
        keyFeatures: [
          "Donor registration & blood group database indexing",
          "Real-time inventory tracking and availability queries",
          "Automated request handling and donor-matching workflows",
        ],
      },
    },
    {
      id: "resume-ai-gap-finder",
      number: "03",
      title: "Resume AI Job Gap Finder",
      technologies: ["Python", "Gemini API", "NLP"],
      description: "Built an AI-based resume analyzer that identifies skill gaps and suggests skills based on job requirements.",
      details: {
        overview: "An AI-powered natural language processing application that parses candidate resumes against target job descriptions to extract missing skills and offer tailored recommendations.",
        problem: "Job applicants often fail automated screening (ATS) because they lack visibility into specific keyword and skill gaps in their resumes.",
        solution: "Integrated Google Gemini API and NLP string analysis to evaluate resumes against target job profiles, generating instant gap reports.",
        keyFeatures: [
          "Automated resume parsing and section classification",
          "Gemini API integration for deep semantic skill extraction",
          "Actionable skill gap reporting & improvement suggestions",
        ],
      },
    },
    {
      id: "talenttwin-ai",
      number: "04",
      title: "TalentTwin AI — Placement AI Studio",
      technologies: ["Python", "Machine Learning", "NLP"],
      description: "Developed an AI-powered placement platform to analyze resumes, identify skill gaps, and predict placement readiness.",
      details: {
        overview: "A comprehensive placement readiness studio that analyzes student profiles, measures recruitment readiness, and recommends custom learning pathways.",
        problem: "Engineering students lack objective readiness benchmarking for campus placements and need tailored guidance to bridge industry skill gaps.",
        solution: "Constructed a multi-stage ML and NLP studio that evaluates resumes, predicts readiness scores, and maps student profiles to target roles.",
        keyFeatures: [
          "AI resume parsing & profile evaluation engine",
          "Placement readiness prediction scoring model",
          "Personalized learning path, job, and internship recommendation system",
        ],
      },
    },
  ] as Project[],

  achievements: [
    {
      title: "HackZen'26",
      organization: "PPG Institute of Technology",
      description: "Participated in a National-Level Tech Fest Hackathon conducted by PPG Institute of Technology.",
    },
    {
      title: "KreativeGenesis 2026",
      organization: "KGiSL Educational Institutions",
      description: "Participated in a 30-hour National-Level Innovation Hackathon organized by KGiSL Educational Institutions.",
    },
  ] as AchievementItem[],

  certifications: [
    {
      title: "Basics of Python",
      issuer: "Infosys Springboard",
      date: "January 2026",
    },
    {
      title: "Machine Learning for Beginners",
      issuer: "Simplilearn SkillUp",
      date: "January 2026",
    },
    {
      title: "Data Science",
      issuer: "Infosys Springboard",
      date: "",
    },
    {
      title: "Introduction to SQL",
      issuer: "Simplilearn SkillUp",
      date: "January 2026",
    },
  ] as CertificationItem[],

  whatIWorkWith: [
    {
      id: "01",
      title: "Data Analytics",
      description: "Analyzing structured datasets to uncover patterns, extract insights, and enable data-driven decision making.",
    },
    {
      id: "02",
      title: "Machine Learning",
      description: "Building predictive models using classification algorithms for diagnostic applications.",
    },
    {
      id: "03",
      title: "Python Development",
      description: "Developing clean, efficient code for data processing, machine learning models, and NLP tools.",
    },
    {
      id: "04",
      title: "Data Visualization",
      description: "Creating interactive dashboards and insightful reports using Power BI and Matplotlib.",
    },
    {
      id: "05",
      title: "SQL",
      description: "Designing database queries and managing relational data schemas efficiently.",
    },
    {
      id: "06",
      title: "AI-based Applications",
      description: "Integrating NLP models and API services to solve real-world problems like resume gap analysis.",
    },
  ],

  approach: [
    {
      step: "01",
      title: "Understand",
      description: "Understand the problem and requirements.",
    },
    {
      step: "02",
      title: "Analyze",
      description: "Work with data and identify useful insights.",
    },
    {
      step: "03",
      title: "Build",
      description: "Develop practical technology-driven solutions.",
    },
    {
      step: "04",
      title: "Improve",
      description: "Refine the solution through testing and learning.",
    },
  ],
};
