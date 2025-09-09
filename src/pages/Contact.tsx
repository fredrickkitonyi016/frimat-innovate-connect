import { Phone, Mail, MapPin, Clock, Send, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Contact = () => {
  const { ref: heroRef, isInView: heroInView } = useScrollAnimation({ threshold: 0.1 });
  const { ref: formRef, isInView: formInView } = useScrollAnimation({ threshold: 0.1 });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section ref={heroRef} className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-6">
          <Link to="/" className="inline-flex items-center text-primary hover:text-accent mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          
          <div className={`max-w-4xl transform transition-all duration-1000 ${heroInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <h1 className="text-4xl lg:text-6xl font-bold text-primary mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Ready to transform your business with technology? Let's discuss your project and find the perfect solution together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="card-elevated text-center group hover:scale-105 transition-all duration-300">
              <Phone className="w-12 h-12 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-primary mb-2">Phone</h3>
              <p className="text-muted-foreground">+1 (555) 123-4567</p>
            </div>
            
            <div className="card-elevated text-center group hover:scale-105 transition-all duration-300">
              <Mail className="w-12 h-12 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-primary mb-2">Email</h3>
              <p className="text-muted-foreground">hello@frimattechnologies.com</p>
            </div>
            
            <div className="card-elevated text-center group hover:scale-105 transition-all duration-300">
              <MapPin className="w-12 h-12 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-primary mb-2">Location</h3>
              <p className="text-muted-foreground">San Francisco, CA</p>
            </div>
            
            <div className="card-elevated text-center group hover:scale-105 transition-all duration-300">
              <Clock className="w-12 h-12 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-primary mb-2">Hours</h3>
              <p className="text-muted-foreground">Mon-Fri 9AM-6PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section ref={formRef} className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className={`text-center mb-12 transform transition-all duration-1000 ${formInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
                Let's Start a Conversation
              </h2>
              <p className="text-muted-foreground">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </div>

            <form className={`card-elevated transform transition-all duration-1000 ${formInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label className="block text-primary font-medium mb-2">First Name *</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-4 border-2 border-border/50 rounded-xl bg-background/50 backdrop-blur-sm focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-300 hover:border-accent/30 placeholder:text-muted-foreground/60"
                    placeholder="Enter your first name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-primary font-medium mb-2">Last Name *</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-4 border-2 border-border/50 rounded-xl bg-background/50 backdrop-blur-sm focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-300 hover:border-accent/30 placeholder:text-muted-foreground/60"
                    placeholder="Enter your last name"
                    required
                  />
                </div>
              </div>

              <div className="mb-6 space-y-2">
                <label className="block text-primary font-medium mb-2">Email Address *</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-4 border-2 border-border/50 rounded-xl bg-background/50 backdrop-blur-sm focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-300 hover:border-accent/30 placeholder:text-muted-foreground/60"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className="mb-6 space-y-2">
                <label className="block text-primary font-medium mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-4 border-2 border-border/50 rounded-xl bg-background/50 backdrop-blur-sm focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-300 hover:border-accent/30 placeholder:text-muted-foreground/60"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div className="mb-6 space-y-2">
                <label className="block text-primary font-medium mb-2">Service Interest</label>
                <select className="w-full px-4 py-4 border-2 border-border/50 rounded-xl bg-background backdrop-blur-sm focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-300 hover:border-accent/30 cursor-pointer z-10">
                  <option value="">Select a service</option>
                  <option value="custom-software">Custom Software Development</option>
                  <option value="mobile-app">Mobile App Development</option>
                  <option value="cloud-solutions">Cloud Solutions</option>
                  <option value="cybersecurity">Cybersecurity</option>
                  <option value="data-analytics">Data Analytics</option>
                  <option value="ai-ml">AI & Machine Learning</option>
                  <option value="digital-transformation">Digital Transformation</option>
                  <option value="it-consulting">IT Consulting</option>
                </select>
              </div>

              <div className="mb-8 space-y-2">
                <label className="block text-primary font-medium mb-2">Project Details *</label>
                <textarea 
                  rows={6}
                  className="w-full px-4 py-4 border-2 border-border/50 rounded-xl bg-background/50 backdrop-blur-sm focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-300 hover:border-accent/30 resize-none placeholder:text-muted-foreground/60"
                  placeholder="Tell us about your project, timeline, budget, and any specific requirements..."
                  required
                ></textarea>
              </div>

              <div className="mb-6">
                <div className="flex items-start space-x-3">
                  <input 
                    type="checkbox" 
                    id="terms" 
                    className="w-5 h-5 mt-1 rounded border-2 border-border/50 text-accent focus:ring-accent/50 transition-all duration-300"
                    required
                  />
                  <label htmlFor="terms" className="text-sm text-muted-foreground leading-relaxed">
                    I agree to the <a href="#" className="text-accent hover:text-accent/80 underline transition-colors">Terms of Service</a> and <a href="#" className="text-accent hover:text-accent/80 underline transition-colors">Privacy Policy</a>
                  </label>
                </div>
              </div>

              <button 
                type="submit" 
                className="btn-primary w-full inline-flex items-center justify-center py-4 text-lg font-semibold transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Send className="w-5 h-5 mr-3" />
                Send Message
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </button>

              <p className="text-center text-sm text-muted-foreground mt-4">
                We'll respond within 24 hours
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;