import { Smartphone, CheckCircle, ArrowLeft, Phone, Mail, Apple, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const MobileAppDevelopment = () => {
  const { ref: heroRef, isInView: heroInView } = useScrollAnimation({ threshold: 0.1 });
  const { ref: featuresRef, isInView: featuresInView } = useScrollAnimation({ threshold: 0.1 });
  
  const platforms = [
    {
      icon: Apple,
      title: "iOS Development",
      description: "Native iOS apps using Swift and SwiftUI for optimal performance",
      features: ["Swift Programming", "SwiftUI", "Core Data", "App Store Optimization"]
    },
    {
      icon: PlayCircle,
      title: "Android Development", 
      description: "Native Android apps using Kotlin and modern Android frameworks",
      features: ["Kotlin Programming", "Jetpack Compose", "Room Database", "Google Play Store"]
    },
    {
      icon: Smartphone,
      title: "Cross-Platform",
      description: "React Native and Flutter apps for multiple platforms",
      features: ["React Native", "Flutter", "Code Reusability", "Faster Time-to-Market"]
    }
  ];

  const appTypes = [
    "E-commerce Apps", "Social Media Apps", "Healthcare Apps", "Finance Apps",
    "Education Apps", "Travel Apps", "Food Delivery Apps", "Fitness Apps",
    "Real Estate Apps", "Entertainment Apps", "Productivity Apps", "Gaming Apps"
  ];

  const features = [
    "User Authentication", "Push Notifications", "Offline Functionality", "Payment Integration",
    "GPS & Location Services", "Camera & Media", "Social Media Integration", "Analytics & Reporting",
    "Cloud Synchronization", "In-App Purchases", "Multi-language Support", "Security & Encryption"
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
                <Smartphone className="w-8 h-8 text-accent" />
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-primary">
                Mobile App Development
              </h1>
            </div>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Create exceptional mobile experiences that engage users and drive business growth. 
              We develop native and cross-platform mobile applications that deliver outstanding performance across all devices.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-primary">
                Start Your App Project
              </Link>
              <Link to="/portfolio" className="btn-secondary">
                View Our Apps
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Expertise */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary text-center mb-12">
            Platform Expertise
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <div key={index} className="card-elevated text-center group hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <platform.icon className="w-8 h-8 text-accent group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">{platform.title}</h3>
                <p className="text-muted-foreground mb-6">{platform.description}</p>
                <ul className="space-y-2">
                  {platform.features.map((feature, featureIndex) => (
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

      {/* App Types */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary text-center mb-12">
            Types of Apps We Build
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {appTypes.map((type, index) => (
              <div key={index} className="bg-card border rounded-lg p-4 text-center hover:bg-accent/5 transition-colors hover:scale-105 duration-300">
                <span className="text-primary font-medium">{type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features & Capabilities */}
      <section ref={featuresRef} className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary text-center mb-12">
            Features & Capabilities
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`flex items-center space-x-3 bg-card border rounded-lg p-4 hover:bg-accent/5 transition-all duration-300 hover:scale-105 ${
                  featuresInView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <CheckCircle className="w-6 h-6 text-success flex-shrink-0" />
                <span className="text-primary font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary text-center mb-12">
            Our Mobile Development Process
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Strategy & Planning", desc: "Define app goals, target audience, and technical requirements" },
              { step: "02", title: "UI/UX Design", desc: "Create intuitive and engaging user interface designs" },
              { step: "03", title: "Development", desc: "Build your app with clean, efficient, and scalable code" },
              { step: "04", title: "Testing & Launch", desc: "Rigorous testing and successful app store deployment" }
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
            Ready to Build Your Mobile App?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Transform your idea into a powerful mobile application that users will love.
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

export default MobileAppDevelopment;