// Data management system for portfolio content
export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  link: string;
  image?: string;
  featured?: boolean;
}

export interface Experience {
  id: string;
  type: 'work' | 'education';
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

export interface Skill {
  id: string;
  name: string;
  level: number;
  icon: string;
  category?: string;
}

export interface PortfolioData {
  projects: Project[];
  experience: Experience[];
  testimonials: Testimonial[];
  skills: Skill[];
  personalInfo: {
    name: string;
    title: string;
    bio: string;
    email: string;
    github: string;
    linkedin: string;
    resume?: string;
  };
}

// Default data
const defaultData: PortfolioData = {
  projects: [
    {
      id: '1',
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#',
      featured: true
    },
    {
      id: '2',
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates',
      tech: ['Next.js', 'PostgreSQL', 'Socket.io', 'TypeScript'],
      link: '#'
    },
    {
      id: '3',
      title: 'Data Visualization Dashboard',
      description: 'Interactive dashboard for data analytics and reporting',
      tech: ['React', 'D3.js', 'Python', 'FastAPI'],
      link: '#'
    }
  ],
  experience: [
    {
      id: '1',
      type: 'work',
      title: 'Senior Full-Stack Developer',
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: 'Led development of scalable web applications serving 100k+ users. Architected microservices infrastructure and mentored junior developers.',
      achievements: [
        'Increased application performance by 40%',
        'Led team of 5 developers',
        'Implemented CI/CD pipeline reducing deployment time by 60%'
      ]
    },
    {
      id: '2',
      type: 'work',
      title: 'Full-Stack Developer',
      company: 'StartupXYZ',
      location: 'Austin, TX',
      period: '2020 - 2022',
      description: 'Developed MVP and core features for fintech startup. Built responsive web applications and RESTful APIs.',
      achievements: [
        'Built platform from ground up',
        'Integrated payment processing systems',
        'Achieved 99.9% uptime'
      ]
    },
    {
      id: '3',
      type: 'education',
      title: 'Master of Computer Science',
      company: 'Stanford University',
      location: 'Stanford, CA',
      period: '2018 - 2020',
      description: 'Specialized in Software Engineering and Machine Learning. Graduated Magna Cum Laude.',
      achievements: [
        'GPA: 3.8/4.0',
        'Research in distributed systems',
        'Teaching Assistant for Web Development'
      ]
    },
    {
      id: '4',
      type: 'education',
      title: 'Bachelor of Computer Science',
      company: 'UC Berkeley',
      location: 'Berkeley, CA',
      period: '2014 - 2018',
      description: 'Foundation in computer science fundamentals, algorithms, and software development.',
      achievements: [
        "Dean's List for 6 semesters",
        'Computer Science Society President',
        'Hackathon winner (3x)'
      ]
    }
  ],
  testimonials: [
    {
      id: '1',
      name: 'Sarah Johnson',
      role: 'CTO at TechCorp Solutions',
      company: 'TechCorp Solutions',
      content: 'Sandeep is an exceptional developer who consistently delivers high-quality solutions. His technical expertise and leadership skills make him invaluable to any team.',
      rating: 5,
      avatar: 'SJ'
    },
    {
      id: '2',
      name: 'Michael Chen',
      role: 'Product Manager',
      company: 'StartupXYZ',
      content: 'Working with Sandeep was a game-changer for our startup. He built our entire platform from scratch and his attention to detail is remarkable.',
      rating: 5,
      avatar: 'MC'
    },
    {
      id: '3',
      name: 'Dr. Emily Rodriguez',
      role: 'Professor',
      company: 'Stanford University',
      content: "Sandeep was one of the most dedicated students I've taught. His passion for learning and problem-solving abilities are truly outstanding.",
      rating: 5,
      avatar: 'ER'
    }
  ],
  skills: [
    { id: '1', name: 'JavaScript/TypeScript', level: 90, icon: 'Code' },
    { id: '2', name: 'React/Next.js', level: 85, icon: 'Monitor' },
    { id: '3', name: 'Node.js', level: 80, icon: 'Server' },
    { id: '4', name: 'MongoDB/PostgreSQL', level: 75, icon: 'Database' }
  ],
  personalInfo: {
    name: 'Sandeep Meche',
    title: 'Full-Stack Developer & Software Engineer',
    bio: "I'm a passionate full-stack developer with over 5 years of experience in building modern web applications. I specialize in JavaScript technologies, with expertise in React, Node.js, and various databases. I love creating efficient, scalable solutions and staying up-to-date with the latest technologies in the ever-evolving world of web development.",
    email: 'sandeep.meche@email.com',
    github: 'github.com/sandeepmeche',
    linkedin: 'linkedin.com/in/sandeepmeche'
  }
};

// Data management functions
export const getPortfolioData = (): PortfolioData => {
  if (typeof window === 'undefined') return defaultData;

  try {
    const stored = localStorage.getItem('portfolio_data');
    return stored ? JSON.parse(stored) : defaultData;
  } catch (error) {
    console.error('Failed to load portfolio data:', error);
    return defaultData;
  }
};

export const savePortfolioData = (data: PortfolioData): void => {
  if (typeof window === 'undefined') return;

  try {
    localStorage.setItem('portfolio_data', JSON.stringify(data));
  } catch (error) {
    console.error('Failed to save portfolio data:', error);
  }
};

// CRUD operations for projects
export const addProject = (project: Omit<Project, 'id'>): void => {
  const data = getPortfolioData();
  const newProject = { ...project, id: Date.now().toString() };
  data.projects.push(newProject);
  savePortfolioData(data);
};

export const updateProject = (id: string, updates: Partial<Project>): void => {
  const data = getPortfolioData();
  const index = data.projects.findIndex(p => p.id === id);
  if (index !== -1) {
    data.projects[index] = { ...data.projects[index], ...updates };
    savePortfolioData(data);
  }
};

export const deleteProject = (id: string): void => {
  const data = getPortfolioData();
  data.projects = data.projects.filter(p => p.id !== id);
  savePortfolioData(data);
};

// CRUD operations for experience
export const addExperience = (experience: Omit<Experience, 'id'>): void => {
  const data = getPortfolioData();
  const newExperience = { ...experience, id: Date.now().toString() };
  data.experience.push(newExperience);
  savePortfolioData(data);
};

export const updateExperience = (id: string, updates: Partial<Experience>): void => {
  const data = getPortfolioData();
  const index = data.experience.findIndex(e => e.id === id);
  if (index !== -1) {
    data.experience[index] = { ...data.experience[index], ...updates };
    savePortfolioData(data);
  }
};

export const deleteExperience = (id: string): void => {
  const data = getPortfolioData();
  data.experience = data.experience.filter(e => e.id !== id);
  savePortfolioData(data);
};

// CRUD operations for testimonials
export const addTestimonial = (testimonial: Omit<Testimonial, 'id'>): void => {
  const data = getPortfolioData();
  const newTestimonial = { ...testimonial, id: Date.now().toString() };
  data.testimonials.push(newTestimonial);
  savePortfolioData(data);
};

export const updateTestimonial = (id: string, updates: Partial<Testimonial>): void => {
  const data = getPortfolioData();
  const index = data.testimonials.findIndex(t => t.id === id);
  if (index !== -1) {
    data.testimonials[index] = { ...data.testimonials[index], ...updates };
    savePortfolioData(data);
  }
};

export const deleteTestimonial = (id: string): void => {
  const data = getPortfolioData();
  data.testimonials = data.testimonials.filter(t => t.id !== id);
  savePortfolioData(data);
};

// CRUD operations for skills
export const addSkill = (skill: Omit<Skill, 'id'>): void => {
  const data = getPortfolioData();
  const newSkill = { ...skill, id: Date.now().toString() };
  data.skills.push(newSkill);
  savePortfolioData(data);
};

export const updateSkill = (id: string, updates: Partial<Skill>): void => {
  const data = getPortfolioData();
  const index = data.skills.findIndex(s => s.id === id);
  if (index !== -1) {
    data.skills[index] = { ...data.skills[index], ...updates };
    savePortfolioData(data);
  }
};

export const deleteSkill = (id: string): void => {
  const data = getPortfolioData();
  data.skills = data.skills.filter(s => s.id !== id);
  savePortfolioData(data);
};

// Update personal info
export const updatePersonalInfo = (updates: Partial<PortfolioData['personalInfo']>): void => {
  const data = getPortfolioData();
  data.personalInfo = { ...data.personalInfo, ...updates };
  savePortfolioData(data);
};

// Reset to default data
export const resetToDefaults = (): void => {
  savePortfolioData(defaultData);
};

// Export data for backup
export const exportData = (): string => {
  return JSON.stringify(getPortfolioData(), null, 2);
};

// Import data from backup
export const importData = (jsonData: string): boolean => {
  try {
    const data = JSON.parse(jsonData);
    savePortfolioData(data);
    return true;
  } catch (error) {
    console.error('Failed to import data:', error);
    return false;
  }
};
