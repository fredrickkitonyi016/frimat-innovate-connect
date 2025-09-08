import { Globe, CheckCircle, ArrowLeft, Phone, Mail, Settings, Zap, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const DigitalTransformation = () => {
  const { ref: heroRef, isInView: heroInView } = useScrollAnimation({ threshold: 0.1 });
  const { ref: servicesRef, isInView: servicesInView } = useScrollAnimation({ threshold: 0.1 });
  
  const transformationServices = [
    {
      icon: Zap,
      title: "Process Automation",
      description: "Streamline and automate business processes for maximum efficiency",
      features: ["Workflow Automation", "RPA Implementation", "Integration Solutions", "Performance Monitoring"]
    },
    {
      icon: Settings,
      title: "Digital Strategy",
      description: "Comprehensive digital roadmap aligned with your business goals",
      features: ["Technology Assessment", "Digital Roadmap", "ROI Planning", "Risk Management"]
    },
    {
      icon: Users,
      title: "Change Management",
      description: "Guide your organization through digital transformation successfully",
      features: ["Training Programs", "Culture Change", "Stakeholder Alignment", "Adoption Support"]
    }
  ];

  const transformationAreas = [
    "Customer Experience", "Business Processes", "Technology Infrastructure", "Data Management",
    "Digital Workplace", "Supply Chain", "Marketing & Sales", "Financial Operations",
    "Human Resources", "Product Development", "Customer Service", "Operations Management"
  ];

  const technologies = [
    "Cloud Computing", "Artificial Intelligence", "IoT Solutions", "Blockchain",
    "Automation Tools", "Analytics Platforms", "CRM Systems", "ERP Solutions",
    "API Management", "DevOps Tools", "Security Solutions", "Mobile Platforms"
  ];

  const benefits = [
    "Increased Efficiency", "Cost Reduction", "Better Customer Experience", "Faster Innovation",
    "Improved Agility", "Data-Driven Decisions", "Competitive Advantage", "Scalable Operations"
  ];

  const transformationSteps = [
    {
      step: "01",
      title: "Assessment",
      description: "Comprehensive evaluation of current systems, processes, and capabilities"
    },
    {
      step: "02",
      title: "Strategy",
      description: "Develop digital transformation roadmap aligned with business objectives"
    },
    {
      step: "03",
      title: "Planning",
      description: "Create detailed implementation plan with timelines and milestones"
    },
    {
      step: "04",
      title: "Implementation",
      description: "Execute transformation initiatives with minimal business disruption"
    },
    {
      step: "05",
      title: "Optimization",
      description: "Continuous improvement and optimization of digital solutions"
    }
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
                <Globe className="w-8 h-8 text-accent" />
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-primary">
                Digital Transformation
              </h1>
            </div>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Modernize your business with end-to-end digital transformation services. 
              We help organizations embrace digital technologies to improve processes, enhance customer experiences, and drive growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-primary">
                Start Transformation
              </Link>
              <Link to="/portfolio" className="btn-secondary">
                View Success Stories
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Services */}
      <section ref={servicesRef} className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary text-center mb-12">
            Our Transformation Services
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {transformationServices.map((service, index) => (
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
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-success mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation Areas */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary text-center mb-12">
            Areas of Transformation
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {transformationAreas.map((area, index) => (
              <div key={index} className="bg-card border rounded-lg p-4 text-center hover:bg-accent/5 transition-colors hover:scale-105 duration-300">
                <span className="text-primary font-medium text-sm">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary text-center mb-12">
            Transformation Technologies
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-card border rounded-lg p-4 text-center hover:bg-accent/5 transition-colors hover:scale-105 duration-300">
                <span className="text-primary font-medium text-sm">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary text-center mb-12">
            Transformation Benefits
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 bg-card/50 backdrop-blur-sm rounded-lg p-4 hover:bg-card transition-colors hover:scale-105 duration-300">
                <CheckCircle className="w-6 h-6 text-success flex-shrink-0" />
                <span className="text-primary font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation Process */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary text-center mb-12">
            Our Transformation Process
          </h2>
          
          <div className="grid md:grid-cols-5 gap-8">
            {transformationSteps.map((step, index) => (
              <div key={index} className="card-elevated text-center hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold text-accent mb-4">{step.step}</div>
                <h3 className="text-lg font-semibold text-primary mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary text-center mb-12">
            Typical Success Metrics
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { metric: "40%", title: "Process Efficiency Gain", desc: "Average improvement in operational efficiency" },
              { metric: "25%", title: "Cost Reduction", desc: "Typical reduction in operational costs" },
              { metric: "60%", title: "Faster Time-to-Market", desc: "Acceleration in product/service delivery" },
              { metric: "99.5%", title: "Customer Satisfaction", desc: "Improved customer experience scores" }
            ].map((success, index) => (
              <div key={index} className="card-elevated text-center hover:scale-105 transition-all duration-300">
                <div className="text-4xl font-bold text-accent mb-2">{success.metric}</div>
                <h3 className="text-lg font-semibold text-primary mb-2">{success.title}</h3>
                <p className="text-muted-foreground text-sm">{success.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start your digital transformation journey today and unlock new possibilities for growth and innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary inline-flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              Get Transformation Consultation
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

export default DigitalTransformation;