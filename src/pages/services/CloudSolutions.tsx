import { Cloud, CheckCircle, ArrowLeft, Phone, Mail, Server, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const CloudSolutions = () => {
  const { ref: heroRef, isInView: heroInView } = useScrollAnimation({ threshold: 0.1 });
  const { ref: servicesRef, isInView: servicesInView } = useScrollAnimation({ threshold: 0.1 });
  
  const cloudServices = [
    {
      icon: Server,
      title: "Cloud Migration",
      description: "Seamless migration of your applications and data to the cloud",
      benefits: ["Zero Downtime Migration", "Data Integrity", "Performance Optimization", "Cost Reduction"]
    },
    {
      icon: Zap,
      title: "Infrastructure as Code",
      description: "Automated infrastructure deployment and management",
      benefits: ["Terraform & CloudFormation", "Version Control", "Automated Deployments", "Disaster Recovery"]
    },
    {
      icon: Shield,
      title: "Cloud Security",
      description: "Comprehensive security for your cloud infrastructure",
      benefits: ["Identity Management", "Data Encryption", "Network Security", "Compliance Monitoring"]
    }
  ];

  const platforms = [
    "Amazon Web Services (AWS)", "Microsoft Azure", "Google Cloud Platform", "DigitalOcean",
    "Kubernetes", "Docker", "Terraform", "Ansible", "Jenkins", "GitLab CI/CD"
  ];

  const benefits = [
    "99.9% Uptime SLA", "Cost Optimization", "Auto-Scaling", "Global Availability",
    "Enhanced Security", "Disaster Recovery", "24/7 Monitoring", "Performance Analytics"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section ref={heroRef} className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-6">
          <Link to="/" className="inline-flex items-center text-primary hover:text-accent mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Link>
          
          <div className={`max-w-4xl transform transition-all duration-1000 ${heroInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mr-6">
                <Cloud className="w-8 h-8 text-accent" />
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-primary">
                Cloud Solutions
              </h1>
            </div>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Optimize your infrastructure with comprehensive cloud services that improve scalability, 
              reduce operational costs, and enhance your business agility in the digital landscape.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-primary">
                Start Cloud Migration
              </Link>
              <Link to="/portfolio" className="btn-secondary">
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Services */}
      <section ref={servicesRef} className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary text-center mb-12">
            Our Cloud Services
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {cloudServices.map((service, index) => (
              <div 
                key={index} 
                className={`card-elevated text-center group hover:scale-105 transition-all duration-500 ${
                  servicesInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <service.icon className="w-8 h-8 text-accent group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-success mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Platforms */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary text-center mb-12">
            Cloud Platforms & Technologies
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {platforms.map((platform, index) => (
              <div key={index} className="bg-card border rounded-lg p-4 text-center hover:bg-accent/5 transition-colors hover:scale-105 duration-300">
                <span className="text-primary font-medium text-sm">{platform}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary text-center mb-12">
            Cloud Benefits
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 bg-card border rounded-lg p-4 hover:bg-accent/5 transition-all duration-300 hover:scale-105">
                <CheckCircle className="w-6 h-6 text-success flex-shrink-0" />
                <span className="text-primary font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Migration Process */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary text-center mb-12">
            Cloud Migration Process
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Assessment", desc: "Evaluate current infrastructure and migration readiness" },
              { step: "02", title: "Strategy", desc: "Develop comprehensive migration strategy and timeline" },
              { step: "03", title: "Migration", desc: "Execute migration with minimal business disruption" },
              { step: "04", title: "Optimization", desc: "Optimize performance, costs, and security post-migration" }
            ].map((process, index) => (
              <div key={index} className="card-elevated text-center hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold text-accent mb-4">{process.step}</div>
                <h3 className="text-lg font-semibold text-primary mb-2">{process.title}</h3>
                <p className="text-muted-foreground text-sm">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            Ready to Move to the Cloud?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let us help you leverage the power of cloud computing to transform your business operations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary inline-flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              Get Free Consultation
            </Link>
            <Link to="/contact" className="btn-secondary inline-flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              Request Assessment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CloudSolutions;