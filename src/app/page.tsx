"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, ExternalLink, Code, Database, Server, Monitor, Menu, X, MapPin, Calendar, Star, Quote, Briefcase, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/components/theme-toggle";
import { ContactForm } from "@/components/contact-form";
import { useState } from "react";

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const skills = [
    { name: "JavaScript/TypeScript", level: 90, icon: Code },
    { name: "React/Next.js", level: 85, icon: Monitor },
    { name: "Node.js", level: 80, icon: Server },
    { name: "MongoDB/PostgreSQL", level: 75, icon: Database },
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and MongoDB",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates",
      tech: ["Next.js", "PostgreSQL", "Socket.io", "TypeScript"],
      link: "#"
    },
    {
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for data analytics and reporting",
      tech: ["React", "D3.js", "Python", "FastAPI"],
      link: "#"
    }
  ];

  const experience = [
    {
      type: "work",
      title: "Senior Full-Stack Developer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description: "Led development of scalable web applications serving 100k+ users. Architected microservices infrastructure and mentored junior developers.",
      achievements: [
        "Increased application performance by 40%",
        "Led team of 5 developers",
        "Implemented CI/CD pipeline reducing deployment time by 60%"
      ]
    },
    {
      type: "work",
      title: "Full-Stack Developer",
      company: "StartupXYZ",
      location: "Austin, TX",
      period: "2020 - 2022",
      description: "Developed MVP and core features for fintech startup. Built responsive web applications and RESTful APIs.",
      achievements: [
        "Built platform from ground up",
        "Integrated payment processing systems",
        "Achieved 99.9% uptime"
      ]
    },
    {
      type: "education",
      title: "Master of Computer Science",
      company: "Stanford University",
      location: "Stanford, CA",
      period: "2018 - 2020",
      description: "Specialized in Software Engineering and Machine Learning. Graduated Magna Cum Laude.",
      achievements: [
        "GPA: 3.8/4.0",
        "Research in distributed systems",
        "Teaching Assistant for Web Development"
      ]
    },
    {
      type: "education",
      title: "Bachelor of Computer Science",
      company: "UC Berkeley",
      location: "Berkeley, CA",
      period: "2014 - 2018",
      description: "Foundation in computer science fundamentals, algorithms, and software development.",
      achievements: [
        "Dean's List for 6 semesters",
        "Computer Science Society President",
        "Hackathon winner (3x)"
      ]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO at TechCorp Solutions",
      company: "TechCorp Solutions",
      content: "Sandeep is an exceptional developer who consistently delivers high-quality solutions. His technical expertise and leadership skills make him invaluable to any team.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      role: "Product Manager",
      company: "StartupXYZ",
      content: "Working with Sandeep was a game-changer for our startup. He built our entire platform from scratch and his attention to detail is remarkable.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Professor",
      company: "Stanford University",
      content: "Sandeep was one of the most dedicated students I've taught. His passion for learning and problem-solving abilities are truly outstanding.",
      rating: 5,
      avatar: "ER"
    }
  ];

  const navItems = ["About", "Experience", "Skills", "Projects", "Testimonials", "Contact"];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-red-gradient"
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.h1
            className="text-2xl font-bold cursor-pointer gradient-text"
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection('hero')}
          >
            SM
          </motion.h1>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <nav className="flex space-x-6">
              {navItems.map((item) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-foreground hover:text-primary transition-colors font-medium"
                  whileHover={{ y: -2 }}
                >
                  {item}
                </motion.button>
              ))}
            </nav>
            <ThemeToggle />
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-background/95 backdrop-blur-md border-t"
            >
              <div className="container mx-auto px-4 py-4 space-y-2">
                {navItems.map((item) => (
                  <motion.button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
                    whileTap={{ scale: 0.95 }}
                  >
                    {item}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-4 bg-dark-gradient dark:bg-background">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="mb-8"
          >
            <Avatar className="w-32 h-32 mx-auto mb-6 ring-4 ring-primary/30 red-glow">
              <AvatarFallback className="text-4xl bg-red-gradient text-white font-bold">
                SM
              </AvatarFallback>
            </Avatar>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 gradient-text"
          >
            Sandeep Meche
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8"
          >
            Full-Stack Developer & Software Engineer
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="btn-primary" onClick={() => scrollToSection('contact')}>
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" size="lg" className="group border-primary/50 hover:border-primary">
                <Github className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                GitHub
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" size="lg" className="group border-primary/50 hover:border-primary">
                <Linkedin className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                LinkedIn
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="animate-bounce cursor-pointer"
            onClick={() => scrollToSection('about')}
          >
            <ArrowDown className="mx-auto h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <div className="border-red-gradient w-20 mx-auto mb-4"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            whileHover={{ y: -5 }}
          >
            <Card className="card-hover">
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  I'm a passionate full-stack developer with over 5 years of experience in building
                  modern web applications. I specialize in JavaScript technologies, with expertise
                  in React, Node.js, and various databases. I love creating efficient, scalable
                  solutions and staying up-to-date with the latest technologies in the ever-evolving
                  world of web development.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Experience & Education</h2>
            <div className="border-red-gradient w-20 mx-auto mb-4"></div>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary transform md:-translate-x-1/2"></div>

            <div className="space-y-12">
              {experience.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background transform md:-translate-x-1/2 red-glow">
                    {item.type === 'work' ? (
                      <Briefcase className="w-2 h-2 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                    ) : (
                      <GraduationCap className="w-2 h-2 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                    )}
                  </div>

                  <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                    <motion.div whileHover={{ scale: 1.02 }}>
                      <Card className="card-hover">
                        <CardHeader>
                          <div className="flex items-start justify-between">
                            <div>
                              <CardTitle className="text-xl font-bold">{item.title}</CardTitle>
                              <CardDescription className="text-primary font-semibold">{item.company}</CardDescription>
                            </div>
                            <Badge variant="secondary" className="bg-primary/10 text-primary">
                              {item.type === 'work' ? 'Work' : 'Education'}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {item.location}
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {item.period}
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground mb-4">{item.description}</p>
                          <div className="space-y-2">
                            {item.achievements.map((achievement, i) => (
                              <div key={i} className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                                <span className="text-sm">{achievement}</span>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Skills</h2>
            <div className="border-red-gradient w-20 mx-auto mb-4"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card className="card-hover">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <skill.icon className="h-8 w-8 mr-3 text-primary" />
                      </motion.div>
                      <h3 className="text-lg font-semibold">{skill.name}</h3>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <motion.div
                        className="bg-red-gradient h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.5, duration: 1.5, ease: "easeOut" }}
                      />
                    </div>
                    <p className="text-right text-sm text-muted-foreground mt-2 font-medium">
                      {skill.level}%
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Projects</h2>
            <div className="border-red-gradient w-20 mx-auto mb-4"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="h-full"
              >
                <Card className="h-full card-hover group">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {project.title}
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 45 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Button variant="ghost" size="icon" className="group-hover:bg-primary group-hover:text-primary-foreground">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </motion.div>
                    </CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                          whileHover={{ scale: 1.1 }}
                        >
                          <Badge variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Testimonials</h2>
            <div className="border-red-gradient w-20 mx-auto mb-4"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full card-hover">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Quote className="h-8 w-8 text-primary mr-3" />
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                        ))}
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center">
                      <Avatar className="h-10 w-10 mr-3">
                        <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                          {testimonial.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        <p className="text-sm text-primary font-medium">{testimonial.company}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <div className="border-red-gradient w-20 mx-auto mb-4"></div>
            <p className="text-lg text-muted-foreground">
              Ready to work together? Send me a message and let's create something amazing!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ContactForm />

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <Card className="card-hover">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Let's Connect</h3>
                  <div className="space-y-4">
                    <motion.div whileHover={{ scale: 1.02 }}>
                      <Button variant="outline" className="w-full justify-start border-primary/50 hover:border-primary">
                        <Mail className="mr-3 h-5 w-5 text-primary" />
                        sandeep.meche@email.com
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.02 }}>
                      <Button variant="outline" className="w-full justify-start border-primary/50 hover:border-primary">
                        <Github className="mr-3 h-5 w-5 text-primary" />
                        github.com/sandeepmeche
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.02 }}>
                      <Button variant="outline" className="w-full justify-start border-primary/50 hover:border-primary">
                        <Linkedin className="mr-3 h-5 w-5 text-primary" />
                        linkedin.com/in/sandeepmeche
                      </Button>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Why Work With Me?</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>5+ years of professional experience</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Full-stack expertise</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Proven track record of delivery</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Strong communication skills</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t">
        <div className="container mx-auto text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-muted-foreground"
          >
            © 2024 Sandeep Meche. Built with Next.js, Tailwind CSS & ❤️
          </motion.p>
        </div>
      </footer>
    </div>
  );
}
