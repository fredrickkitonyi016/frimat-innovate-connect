import { Code, CheckCircle, ArrowLeft, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const CustomSoftwareDevelopment = () => {
  const { ref: heroRef, isInView: heroInView } = useScrollAnimation({ threshold: 0.1 });
  const { ref: processRef, isInView: processInView } = useScrollAnimation({ threshold: 0.1 });
  
  const processSteps = [
    {
      step: "01",
      title: "Requirements Analysis",
      description: "We conduct thorough analysis of your business needs, technical requirements, and project goals."
    },
    {
      step: "02", 
      title: "System Design",
      description: "Our architects design scalable, maintainable software architecture tailored to your needs."
    },
    {
      step: "03",
      title: "Development",
      description: "Expert developers build your solution using best practices and modern technologies."
    },
    {
      step: "04",
      title: "Testing & QA",
      description: "Rigorous testing ensures your software is reliable, secure, and performs optimally."
    },
    {
      step: "05",
      title: "Deployment",
      description: "Seamless deployment and configuration in your preferred environment."
    },
    {
      step: "06",
      title: "Support",
      description: "Ongoing maintenance and support to keep your software running smoothly."
    }
  ];

  const technologies = [
    "React & Vue.js", "Node.js & Python", ".NET & Java", "PostgreSQL & MongoDB",
    "AWS & Azure", "Docker & Kubernetes", "REST & GraphQL APIs", "Microservices"
  ];

  const benefits = [
    "Increased Efficiency", "Cost Reduction", "Scalable Solutions", "Better Integration",
    "Enhanced Security", "Custom Features", "Competitive Advantage", "24/7 Support"
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
                <Code className="w-8 h-8 text-accent" />
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-primary">
                Custom Software Development
              </h1>
            </div>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Transform your business with tailor-made software solutions designed specifically for your unique requirements. 
              Our expert team delivers scalable, secure, and efficient applications that grow with your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-primary">
                Start Your Project
              </Link>
              <Link to="/portfolio" className="btn-secondary">
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary text-center mb-12">
            What We Offer
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {["Web Applications", "Desktop Software", "API Development", "System Integration"].map((service, index) => (
              <div key={index} className="card-elevated text-center group hover:scale-105 transition-all duration-300">
                <CheckCircle className="w-12 h-12 text-success mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-primary mb-2">{service}</h3>
                <p className="text-muted-foreground text-sm">
                  {service === "Web Applications" && "Modern, responsive web applications built with latest technologies"}
                  {service === "Desktop Software" && "Powerful desktop applications for Windows, macOS, and Linux"}
                  {service === "API Development" && "Robust APIs for seamless integration and data exchange"}
                  {service === "System Integration" && "Connect and synchronize your existing systems efficiently"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section ref={processRef} className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary text-center mb-12">
            Our Development Process
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div 
                key={index}
                className={`card-elevated transform transition-all duration-700 hover:scale-105 ${
                  processInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl font-bold text-accent mb-4">{step.step}</div>
                <h3 className="text-xl font-semibold text-primary mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary text-center mb-12">
            Technologies We Use
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-card border rounded-lg p-4 text-center hover:bg-accent/5 transition-colors">
                <span className="text-primary font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary text-center mb-12">
            Why Choose Our Custom Software?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 bg-card/50 backdrop-blur-sm rounded-lg p-4">
                <CheckCircle className="w-6 h-6 text-success flex-shrink-0" />
                <span className="text-primary font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            Ready to Start Your Custom Software Project?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your requirements and create a solution that perfectly fits your business needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary inline-flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              Get Free Consultation
            </Link>
            <Link to="/contact" className="btn-secondary inline-flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              Request Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomSoftwareDevelopment;