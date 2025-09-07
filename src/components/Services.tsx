import { Code, Smartphone, Cloud, Shield, Database, Cpu, Globe, Headphones } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Services = () => {
  const { ref: servicesRef, isInView: servicesInView } = useScrollAnimation({ threshold: 0.1 });
  const services = [
    {
      icon: Code,
      title: 'Custom Software Development',
      description: 'Tailor-made software solutions designed to meet your specific business requirements and scale with your growth.',
      features: ['Web Applications', 'Desktop Software', 'API Development', 'System Integration']
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.',
      features: ['iOS Development', 'Android Development', 'React Native', 'Flutter Apps']
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Comprehensive cloud services to optimize your infrastructure, improve scalability, and reduce operational costs.',
      features: ['Cloud Migration', 'AWS/Azure Services', 'DevOps', 'Infrastructure as Code']
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Robust security solutions to protect your digital assets and ensure compliance with industry standards.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Security Training']
    },
    {
      icon: Database,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics and business intelligence solutions.',
      features: ['Data Visualization', 'Predictive Analytics', 'Machine Learning', 'Business Intelligence']
    },
    {
      icon: Cpu,
      title: 'AI & Machine Learning',
      description: 'Leverage artificial intelligence and machine learning to automate processes and gain competitive advantages.',
      features: ['Computer Vision', 'Natural Language Processing', 'Predictive Models', 'Automation']
    },
    {
      icon: Globe,
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation services to modernize your business processes and technology stack.',
      features: ['Process Automation', 'Digital Strategy', 'Legacy Modernization', 'Change Management']
    },
    {
      icon: Headphones,
      title: 'IT Consulting',
      description: 'Strategic IT consulting to help you make informed technology decisions and optimize your IT investments.',
      features: ['Technology Strategy', 'Architecture Design', 'Vendor Selection', 'Project Management']
    }
  ];

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 sm:mb-6 leading-tight">
            Our Services
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0">
            Comprehensive technology solutions designed to drive innovation, efficiency, and growth for your business.
          </p>
        </div>

        {/* Animated Services Grid */}
        <div ref={servicesRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`card-elevated group transform transition-all duration-700 hover:scale-105 hover:rotate-1 ${
                servicesInView 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-12 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                  <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-accent group-hover:text-white transition-all duration-500" />
                </div>
              </div>
              
              <h3 className="text-lg sm:text-xl font-semibold text-primary mb-2 sm:mb-3 group-hover:text-accent transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed group-hover:text-foreground transition-colors duration-300">
                {service.description}
              </p>
              
              <ul className="space-y-1.5 sm:space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li 
                    key={featureIndex} 
                    className={`text-xs sm:text-sm text-muted-foreground flex items-center transition-all duration-300 group-hover:text-foreground ${
                      servicesInView ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                    }`}
                    style={{ transitionDelay: `${(index * 100) + (featureIndex * 50) + 200}ms` }}
                  >
                    <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-accent rounded-full mr-2 transition-all duration-300 group-hover:bg-success group-hover:scale-150"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="btn-ghost mt-4 sm:mt-6 w-full text-xs sm:text-sm transform transition-all duration-300 hover:scale-105 hover:bg-accent hover:text-white">
                Learn More
              </button>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16 px-4 sm:px-0">
          <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-3 sm:mb-4">
            Need a Custom Solution?
          </h3>
          <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
            Let's discuss how we can help transform your business with technology.
          </p>
          <button className="btn-primary w-full sm:w-auto">
            Get Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;