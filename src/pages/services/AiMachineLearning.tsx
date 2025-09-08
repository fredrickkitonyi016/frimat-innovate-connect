import { Cpu, CheckCircle, ArrowLeft, Phone, Mail, Brain, Eye, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const AiMachineLearning = () => {
  const { ref: heroRef, isInView: heroInView } = useScrollAnimation({ threshold: 0.1 });
  const { ref: servicesRef, isInView: servicesInView } = useScrollAnimation({ threshold: 0.1 });
  
  const aiServices = [
    {
      icon: Eye,
      title: "Computer Vision",
      description: "Advanced image and video analysis for automated visual recognition",
      features: ["Object Detection", "Facial Recognition", "Quality Control", "Medical Imaging"]
    },
    {
      icon: MessageSquare,
      title: "Natural Language Processing",
      description: "Understand and process human language for intelligent interactions",
      features: ["Sentiment Analysis", "Chatbots", "Text Summarization", "Language Translation"]
    },
    {
      icon: Brain,
      title: "Predictive Models",
      description: "Machine learning models that predict outcomes and behaviors",
      features: ["Sales Forecasting", "Customer Behavior", "Risk Assessment", "Demand Planning"]
    }
  ];

  const aiApplications = [
    "Recommendation Systems", "Fraud Detection", "Autonomous Systems", "Voice Recognition",
    "Personalization Engines", "Anomaly Detection", "Process Automation", "Content Generation",
    "Smart Analytics", "Intelligent Search", "Medical Diagnosis", "Financial Trading"
  ];

  const mlTechnologies = [
    "TensorFlow", "PyTorch", "Scikit-learn", "Keras", "OpenCV", "NLTK",
    "Apache Spark MLlib", "Hugging Face", "OpenAI GPT", "Azure Cognitive Services",
    "Google AI Platform", "AWS SageMaker"
  ];

  const industries = [
    "Healthcare", "Finance", "Retail", "Manufacturing", "Automotive", "Agriculture",
    "Energy", "Logistics", "Education", "Entertainment", "Security", "Real Estate"
  ];

  const benefits = [
    "Increased Efficiency", "Cost Reduction", "Better Accuracy", "24/7 Operation",
    "Scalable Solutions", "Faster Processing", "Predictive Insights", "Competitive Advantage"
  ];

  const useCases = [
    {
      title: "Customer Service Automation",
      description: "AI-powered chatbots and virtual assistants for 24/7 customer support"
    },
    {
      title: "Predictive Maintenance",
      description: "Machine learning models to predict equipment failures before they occur"
    },
    {
      title: "Personalized Recommendations",
      description: "AI algorithms that deliver personalized content and product recommendations"
    },
    {
      title: "Automated Quality Control",
      description: "Computer vision systems for real-time quality inspection and defect detection"
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
                <Cpu className="w-8 h-8 text-accent" />
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-primary">
                AI & Machine Learning
              </h1>
            </div>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Leverage artificial intelligence and machine learning to automate processes, gain competitive advantages, 
              and unlock new possibilities for your business with intelligent solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-primary">
                Start AI Project
              </Link>
              <Link to="/portfolio" className="btn-secondary">
                View AI Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AI Services */}
      <section ref={servicesRef} className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary text-center mb-12">
            Our AI & ML Services
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
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

      {/* Use Cases */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary text-center mb-12">
            Real-World AI Applications
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="card-elevated hover:scale-105 transition-all duration-300">
                <h3 className="text-xl font-semibold text-primary mb-3">{useCase.title}</h3>
                <p className="text-muted-foreground">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Applications */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary text-center mb-12">
            AI Applications We Build
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {aiApplications.map((app, index) => (
              <div key={index} className="bg-card border rounded-lg p-4 text-center hover:bg-accent/5 transition-colors hover:scale-105 duration-300">
                <span className="text-primary font-medium text-sm">{app}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary text-center mb-12">
            ML Technologies & Frameworks
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {mlTechnologies.map((tech, index) => (
              <div key={index} className="bg-card/50 backdrop-blur-sm border rounded-lg p-4 text-center hover:bg-card transition-colors hover:scale-105 duration-300">
                <span className="text-primary font-medium text-sm">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary text-center mb-12">
            Industries We Transform
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {industries.map((industry, index) => (
              <div key={index} className="bg-card border rounded-lg p-4 text-center hover:bg-accent/5 transition-colors hover:scale-105 duration-300">
                <span className="text-primary font-medium">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary text-center mb-12">
            AI Benefits for Your Business
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

      {/* AI Development Process */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary text-center mb-12">
            Our AI Development Process
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { step: "01", title: "Problem Definition", desc: "Identify AI opportunities and define success metrics" },
              { step: "02", title: "Data Preparation", desc: "Collect, clean, and prepare training data" },
              { step: "03", title: "Model Development", desc: "Design and train machine learning models" },
              { step: "04", title: "Testing & Validation", desc: "Test model performance and validate results" },
              { step: "05", title: "Deployment", desc: "Deploy AI solutions and monitor performance" }
            ].map((process, index) => (
              <div key={index} className="card-elevated text-center hover:scale-105 transition-all duration-300">
                <div className="text-2xl font-bold text-accent mb-4">{process.step}</div>
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
            Ready to Embrace AI?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Transform your business with intelligent AI solutions that automate processes and drive innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary inline-flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              Get AI Consultation
            </Link>
            <Link to="/contact" className="btn-secondary inline-flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              Discuss AI Project
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiMachineLearning;