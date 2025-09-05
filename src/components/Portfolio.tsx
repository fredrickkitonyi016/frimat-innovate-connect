import { ExternalLink, Github, Award } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Enterprise Resource Planning System',
      category: 'Web Application',
      description: 'Comprehensive ERP solution for manufacturing company with real-time inventory management, production planning, and financial reporting.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
      results: '+45% efficiency, -30% operational costs',
      duration: '6 months',
      featured: true
    },
    {
      id: 2,
      title: 'Smart Healthcare Mobile App',
      category: 'Mobile Application',
      description: 'Patient management system with telemedicine capabilities, appointment scheduling, and AI-powered health monitoring.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop',
      technologies: ['React Native', 'Firebase', 'TensorFlow', 'Google Cloud'],
      results: '50K+ active users, 4.8 app store rating',
      duration: '8 months',
      featured: true
    },
    {
      id: 3,
      title: 'AI-Powered Analytics Platform',
      category: 'Data Analytics',
      description: 'Machine learning platform for predictive analytics in retail, featuring customer behavior analysis and demand forecasting.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      technologies: ['Python', 'TensorFlow', 'React', 'BigQuery'],
      results: '+25% sales prediction accuracy',
      duration: '4 months',
      featured: false
    },
    {
      id: 4,
      title: 'Cloud Infrastructure Migration',
      category: 'Cloud Solutions',
      description: 'Complete migration of legacy systems to AWS cloud with microservices architecture and automated CI/CD pipelines.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
      results: '60% cost reduction, 99.9% uptime',
      duration: '3 months',
      featured: false
    },
    {
      id: 5,
      title: 'E-commerce Marketplace',
      category: 'Web Application',
      description: 'Multi-vendor marketplace with advanced search, payment processing, vendor management, and customer support system.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      technologies: ['Next.js', 'Stripe', 'MongoDB', 'Redis'],
      results: '$2M+ in transactions, 15K+ vendors',
      duration: '10 months',
      featured: true
    },
    {
      id: 6,
      title: 'IoT Fleet Management System',
      category: 'IoT & Hardware',
      description: 'Real-time vehicle tracking and fleet optimization system with predictive maintenance and driver behavior analytics.',
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop',
      technologies: ['IoT Sensors', 'React', 'Node.js', 'InfluxDB'],
      results: '35% fuel savings, 40% maintenance reduction',
      duration: '5 months',
      featured: false
    }
  ];

  const categories = ['All', 'Web Application', 'Mobile Application', 'Data Analytics', 'Cloud Solutions', 'IoT & Hardware'];

  return (
    <section id="portfolio" className="section-dark py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Our Portfolio
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Showcasing successful technology implementations that have transformed businesses and driven measurable results.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-2 rounded-full border border-white/20 text-white/80 hover:bg-accent hover:text-white hover:border-accent transition-all duration-300"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className={`card-portfolio ${project.featured ? 'lg:col-span-2' : ''}`}>
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className={`w-full object-cover transition-transform duration-300 hover:scale-110 ${
                    project.featured ? 'h-64' : 'h-48'
                  }`}
                />
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-success text-success-foreground px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Award size={14} />
                    Featured
                  </div>
                )}
                <div className="absolute inset-0 bg-primary/90 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-4">
                    <button className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-accent transition-colors duration-300">
                      <ExternalLink className="w-5 h-5 text-white" />
                    </button>
                    <button className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-accent transition-colors duration-300">
                      <Github className="w-5 h-5 text-white" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-accent font-medium">{project.category}</span>
                  <span className="text-sm text-white/60">{project.duration}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">
                  {project.title}
                </h3>
                
                <p className="text-white/80 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-white/10 text-white/80 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Results */}
                <div className="text-success text-sm font-medium">
                  Results: {project.results}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-semibold text-white mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-white/80 mb-6">
            Let's discuss how we can bring your vision to life with cutting-edge technology.
          </p>
          <button className="btn-hero">
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;