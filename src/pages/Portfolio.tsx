import { ExternalLink, Github, Calendar, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Portfolio = () => {
  const { ref: heroRef, isInView: heroInView } = useScrollAnimation({ threshold: 0.1 });
  const { ref: portfolioRef, isInView: portfolioInView } = useScrollAnimation({ threshold: 0.1 });

  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Application",
      description: "Modern e-commerce solution with advanced inventory management and analytics.",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
      image: "/api/placeholder/400/300",
      liveUrl: "#",
      githubUrl: "#",
      date: "2024"
    },
    {
      title: "Healthcare Management System",
      category: "Custom Software",
      description: "Comprehensive patient management system with appointment scheduling and records.",
      technologies: [".NET", "SQL Server", "Azure", "React"],
      image: "/api/placeholder/400/300",
      liveUrl: "#",
      githubUrl: "#",
      date: "2024"
    },
    {
      title: "Financial Analytics Dashboard",
      category: "Data Analytics",
      description: "Real-time financial data visualization and reporting platform.",
      technologies: ["Python", "React", "MongoDB", "D3.js"],
      image: "/api/placeholder/400/300",
      liveUrl: "#",
      githubUrl: "#",
      date: "2023"
    },
    {
      title: "Mobile Banking App",
      category: "Mobile Application",
      description: "Secure mobile banking application with biometric authentication.",
      technologies: ["React Native", "Node.js", "PostgreSQL", "AWS"],
      image: "/api/placeholder/400/300",
      liveUrl: "#",
      githubUrl: "#",
      date: "2023"
    },
    {
      title: "AI-Powered CRM",
      category: "AI & Machine Learning",
      description: "Customer relationship management system with AI-driven insights and automation.",
      technologies: ["Python", "TensorFlow", "React", "MongoDB"],
      image: "/api/placeholder/400/300",
      liveUrl: "#",
      githubUrl: "#",
      date: "2023"
    },
    {
      title: "Cloud Infrastructure Migration",
      category: "Cloud Solutions",
      description: "Complete infrastructure migration from on-premise to AWS cloud.",
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform"],
      image: "/api/placeholder/400/300",
      liveUrl: "#",
      githubUrl: "#",
      date: "2022"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section ref={heroRef} className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-6">
          <Link to="/" className="inline-flex items-center text-primary hover:text-accent mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          
          <div className={`max-w-4xl transform transition-all duration-1000 ${heroInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <h1 className="text-4xl lg:text-6xl font-bold text-primary mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Explore our successful projects and see how we've helped businesses transform through technology.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section ref={portfolioRef} className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className={`card-elevated group hover:scale-105 transition-all duration-500 transform ${
                  portfolioInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <div className="w-full h-48 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                    <span className="text-muted-foreground">Project Image</span>
                  </div>
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-3">
                      <a href={project.liveUrl} className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                        <ExternalLink className="w-5 h-5 text-primary" />
                      </a>
                      <a href={project.githubUrl} className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                        <Github className="w-5 h-5 text-primary" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-accent font-medium bg-accent/10 px-2 py-1 rounded-full">
                        {project.category}
                      </span>
                      <div className="flex items-center text-muted-foreground text-xs">
                        <Calendar className="w-3 h-3 mr-1" />
                        {project.date}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-primary group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="text-xs bg-muted px-2 py-1 rounded-md text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's create something amazing together. Contact us to discuss your project requirements.
          </p>
          
          <Link to="/contact" className="btn-primary">
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;