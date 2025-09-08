import { Headphones, CheckCircle, ArrowLeft, Phone, Mail, Lightbulb, Target, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const ItConsulting = () => {
  const { ref: heroRef, isInView: heroInView } = useScrollAnimation({ threshold: 0.1 });
  const { ref: servicesRef, isInView: servicesInView } = useScrollAnimation({ threshold: 0.1 });
  
  const consultingServices = [
    {
      icon: Lightbulb,
      title: "Technology Strategy",
      description: "Strategic IT planning aligned with your business objectives and goals",
      features: ["IT Roadmap Development", "Technology Assessment", "Digital Strategy", "Innovation Planning"]
    },
    {
      icon: Target,
      title: "Architecture Design",
      description: "Design robust, scalable technology architectures for your organization",
      features: ["Solution Architecture", "Enterprise Architecture", "Cloud Architecture", "Security Architecture"]
    },
    {
      icon: Users,
      title: "Project Management",
      description: "Expert project management for successful technology implementations",
      features: ["Agile Methodology", "Resource Planning", "Risk Management", "Quality Assurance"]
    }
  ];

  const consultingAreas = [
    "IT Strategy & Planning", "Technology Assessment", "Digital Transformation", "Cloud Migration",
    "Security Consulting", "Process Optimization", "Vendor Selection", "IT Governance",
    "Risk Management", "Compliance Consulting", "Performance Optimization", "Cost Optimization"
  ];

  const methodologies = [
    "Agile", "Scrum", "DevOps", "ITIL", "COBIT", "PMI", "Six Sigma", "Lean"
  ];

  const industries = [
    "Financial Services", "Healthcare", "Manufacturing", "Retail", "Government", "Education",
    "Energy", "Telecommunications", "Transportation", "Real Estate", "Non-Profit", "Startups"
  ];

  const benefits = [
    "Strategic Alignment", "Cost Optimization", "Risk Mitigation", "Performance Improvement",
    "Innovation Acceleration", "Compliance Assurance", "Operational Excellence", "Competitive Advantage"
  ];

  const consultingProcess = [
    {
      step: "01",
      title: "Discovery",
      description: "Understand your business, challenges, and technology landscape"
    },
    {
      step: "02",
      title: "Analysis",
      description: "Analyze current state and identify improvement opportunities"
    },
    {
      step: "03",
      title: "Strategy",
      description: "Develop comprehensive IT strategy and implementation roadmap"
    },
    {
      step: "04",
      title: "Implementation",
      description: "Guide and support implementation of recommended solutions"
    },
    {
      step: "05",
      title: "Optimization",
      description: "Continuous monitoring and optimization for ongoing success"
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
                <Headphones className="w-8 h-8 text-accent" />
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-primary">
                IT Consulting
              </h1>
            </div>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Strategic IT consulting to help you make informed technology decisions and optimize your IT investments. 
              Our experts provide guidance to align technology with your business goals and drive sustainable growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-primary">
                Get IT Consultation
              </Link>
              <Link to="/portfolio" className="btn-secondary">
                View Consulting Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Services */}
      <section ref={servicesRef} className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary text-center mb-12">
            Our Consulting Services
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {consultingServices.map((service, index) => (
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

      {/* Consulting Areas */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary text-center mb-12">
            Consulting Focus Areas
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {consultingAreas.map((area, index) => (
              <div key={index} className="bg-card border rounded-lg p-4 text-center hover:bg-accent/5 transition-colors hover:scale-105 duration-300">
                <span className="text-primary font-medium text-sm">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodologies */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary text-center mb-12">
            Methodologies & Frameworks
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {methodologies.map((methodology, index) => (
              <div key={index} className="bg-card border rounded-lg p-6 text-center hover:bg-accent/5 transition-colors hover:scale-105 duration-300">
                <span className="text-xl font-bold text-primary">{methodology}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary text-center mb-12">
            Industries We Serve
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {industries.map((industry, index) => (
              <div key={index} className="bg-card/50 backdrop-blur-sm border rounded-lg p-4 text-center hover:bg-card transition-colors hover:scale-105 duration-300">
                <span className="text-primary font-medium">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary text-center mb-12">
            Consulting Benefits
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

      {/* Consulting Process */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary text-center mb-12">
            Our Consulting Process
          </h2>
          
          <div className="grid md:grid-cols-5 gap-8">
            {consultingProcess.map((step, index) => (
              <div key={index} className="card-elevated text-center hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold text-accent mb-4">{step.step}</div>
                <h3 className="text-lg font-semibold text-primary mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary text-center mb-12">
            Why Choose Our IT Consulting?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Knowledge",
                description: "Deep expertise across multiple technologies and industries with proven track record"
              },
              {
                title: "Strategic Focus",
                description: "Technology decisions aligned with business strategy and long-term objectives"
              },
              {
                title: "Vendor Neutral",
                description: "Unbiased recommendations based on your specific needs, not vendor partnerships"
              },
              {
                title: "Implementation Support",
                description: "End-to-end support from strategy development to successful implementation"
              },
              {
                title: "Proven Methodologies",
                description: "Industry-standard frameworks and best practices for consistent results"
              },
              {
                title: "Ongoing Partnership",
                description: "Long-term partnership to ensure continued success and optimization"
              }
            ].map((feature, index) => (
              <div key={index} className="card-elevated hover:scale-105 transition-all duration-300">
                <h3 className="text-xl font-semibold text-primary mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            Ready to Optimize Your IT Strategy?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get expert guidance to make informed technology decisions that drive business success.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary inline-flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              Schedule Consultation
            </Link>
            <Link to="/contact" className="btn-secondary inline-flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              Request Information
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ItConsulting;