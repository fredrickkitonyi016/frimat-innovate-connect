import { Database, CheckCircle, ArrowLeft, Phone, Mail, BarChart, TrendingUp, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const DataAnalytics = () => {
  const { ref: heroRef, isInView: heroInView } = useScrollAnimation({ threshold: 0.1 });
  const { ref: servicesRef, isInView: servicesInView } = useScrollAnimation({ threshold: 0.1 });
  
  const analyticsServices = [
    {
      icon: BarChart,
      title: "Data Visualization",
      description: "Transform complex data into clear, actionable visual insights",
      features: ["Interactive Dashboards", "Real-time Charts", "Custom Reports", "Mobile-Responsive Views"]
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Forecast trends and outcomes using advanced statistical models",
      features: ["Trend Analysis", "Forecasting Models", "Risk Assessment", "Performance Prediction"]
    },
    {
      icon: Brain,
      title: "Business Intelligence",
      description: "Comprehensive BI solutions for data-driven decision making",
      features: ["KPI Monitoring", "Executive Dashboards", "Automated Reporting", "Data Mining"]
    }
  ];

  const technologies = [
    "Python & R", "Tableau", "Power BI", "Apache Spark", "TensorFlow", "Jupyter Notebooks",
    "SQL & NoSQL", "Azure Synapse", "Amazon Redshift", "Google BigQuery", "Elasticsearch", "Kafka"
  ];

  const industries = [
    "Healthcare", "Finance", "Retail", "Manufacturing", "Education", "Government",
    "Real Estate", "Transportation", "Energy", "Telecommunications", "Media", "Insurance"
  ];

  const benefits = [
    "Improved Decision Making", "Cost Reduction", "Revenue Growth", "Risk Mitigation",
    "Operational Efficiency", "Customer Insights", "Market Intelligence", "Performance Optimization"
  ];

  const dataTypes = [
    "Customer Data", "Sales Data", "Financial Data", "Operational Data", "Marketing Data", "Social Media Data",
    "IoT Sensor Data", "Web Analytics", "Mobile App Data", "Supply Chain Data", "HR Data", "Compliance Data"
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
                <Database className="w-8 h-8 text-accent" />
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-primary">
                Data Analytics
              </h1>
            </div>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Transform your data into actionable insights with advanced analytics and business intelligence solutions. 
              Make data-driven decisions that drive growth and competitive advantage.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-primary">
                Start Data Journey
              </Link>
              <Link to="/portfolio" className="btn-secondary">
                View Analytics Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Services */}
      <section ref={servicesRef} className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary text-center mb-12">
            Our Analytics Services
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {analyticsServices.map((service, index) => (
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

      {/* Technologies */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary text-center mb-12">
            Technologies & Tools
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

      {/* Industries We Serve */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary text-center mb-12">
            Industries We Serve
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

      {/* Data Types */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary text-center mb-12">
            Types of Data We Analyze
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dataTypes.map((dataType, index) => (
              <div key={index} className="flex items-center space-x-3 bg-card/50 backdrop-blur-sm rounded-lg p-4 hover:bg-card transition-colors hover:scale-105 duration-300">
                <CheckCircle className="w-6 h-6 text-success flex-shrink-0" />
                <span className="text-primary font-medium">{dataType}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary text-center mb-12">
            Business Benefits
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

      {/* Analytics Process */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary text-center mb-12">
            Our Analytics Process
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { step: "01", title: "Data Collection", desc: "Gather and consolidate data from multiple sources" },
              { step: "02", title: "Data Cleaning", desc: "Clean, validate, and prepare data for analysis" },
              { step: "03", title: "Analysis", desc: "Apply statistical models and machine learning algorithms" },
              { step: "04", title: "Visualization", desc: "Create compelling visualizations and dashboards" },
              { step: "05", title: "Insights", desc: "Deliver actionable insights and recommendations" }
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
            Unlock the Power of Your Data
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Transform your business with data-driven insights that drive growth and innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary inline-flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              Get Analytics Consultation
            </Link>
            <Link to="/contact" className="btn-secondary inline-flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              Request Data Assessment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DataAnalytics;