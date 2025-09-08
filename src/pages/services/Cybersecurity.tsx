import { Shield, CheckCircle, ArrowLeft, Phone, Mail, Lock, Eye, FileCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Cybersecurity = () => {
  const { ref: heroRef, isInView: heroInView } = useScrollAnimation({ threshold: 0.1 });
  const { ref: threatsRef, isInView: threatsInView } = useScrollAnimation({ threshold: 0.1 });
  
  const securityServices = [
    {
      icon: Eye,
      title: "Security Audits",
      description: "Comprehensive assessment of your security posture and vulnerabilities",
      features: ["Network Security Assessment", "Application Security Review", "Infrastructure Analysis", "Compliance Gap Analysis"]
    },
    {
      icon: Lock,
      title: "Penetration Testing",
      description: "Ethical hacking to identify and exploit security weaknesses",
      features: ["Web Application Testing", "Network Penetration Testing", "Social Engineering Tests", "Wireless Security Testing"]
    },
    {
      icon: FileCheck,
      title: "Compliance Management",
      description: "Ensure adherence to industry standards and regulations",
      features: ["GDPR Compliance", "HIPAA Compliance", "SOC 2 Certification", "ISO 27001 Implementation"]
    }
  ];

  const threats = [
    "Malware & Ransomware", "Phishing Attacks", "Data Breaches", "Insider Threats",
    "DDoS Attacks", "SQL Injection", "Cross-Site Scripting", "Man-in-the-Middle",
    "Zero-Day Exploits", "Social Engineering", "Advanced Persistent Threats", "IoT Vulnerabilities"
  ];

  const solutions = [
    "Multi-Factor Authentication", "Endpoint Protection", "Network Monitoring", "Incident Response",
    "Data Encryption", "Access Control", "Security Training", "Vulnerability Management",
    "Backup & Recovery", "Security Orchestration", "Threat Intelligence", "Forensic Analysis"
  ];

  const complianceStandards = [
    "GDPR", "HIPAA", "SOC 2", "ISO 27001", "PCI DSS", "NIST", "SOX", "FERPA"
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
                <Shield className="w-8 h-8 text-accent" />
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-primary">
                Cybersecurity
              </h1>
            </div>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Protect your digital assets with robust security solutions designed to defend against evolving cyber threats. 
              Our comprehensive cybersecurity services ensure your business stays secure and compliant.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-primary">
                Get Security Assessment
              </Link>
              <Link to="/portfolio" className="btn-secondary">
                View Security Cases
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Security Services */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary text-center mb-12">
            Our Security Services
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {securityServices.map((service, index) => (
              <div key={index} className="card-elevated text-center group hover:scale-105 transition-all duration-300">
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

      {/* Threat Landscape */}
      <section ref={threatsRef} className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary text-center mb-12">
            Common Cyber Threats We Protect Against
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {threats.map((threat, index) => (
              <div 
                key={index} 
                className={`bg-card border rounded-lg p-4 text-center hover:bg-destructive/5 transition-all duration-300 hover:scale-105 ${
                  threatsInView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <span className="text-primary font-medium text-sm">{threat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Solutions */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary text-center mb-12">
            Our Security Solutions
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, index) => (
              <div key={index} className="flex items-center space-x-3 bg-card border rounded-lg p-4 hover:bg-accent/5 transition-all duration-300 hover:scale-105">
                <CheckCircle className="w-6 h-6 text-success flex-shrink-0" />
                <span className="text-primary font-medium">{solution}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Standards */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary text-center mb-12">
            Compliance Standards We Support
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {complianceStandards.map((standard, index) => (
              <div key={index} className="bg-card/50 backdrop-blur-sm border rounded-lg p-6 text-center hover:bg-card transition-colors hover:scale-105 duration-300">
                <span className="text-2xl font-bold text-primary">{standard}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Process */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary text-center mb-12">
            Our Security Implementation Process
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Risk Assessment", desc: "Identify vulnerabilities and security risks in your environment" },
              { step: "02", title: "Security Strategy", desc: "Develop comprehensive security strategy and implementation plan" },
              { step: "03", title: "Implementation", desc: "Deploy security controls and monitoring systems" },
              { step: "04", title: "Monitoring", desc: "Continuous monitoring and incident response management" }
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
            Secure Your Business Today
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Don't wait for a security breach. Let us protect your business with enterprise-grade cybersecurity solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary inline-flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              Get Security Consultation
            </Link>
            <Link to="/contact" className="btn-secondary inline-flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              Request Security Audit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cybersecurity;