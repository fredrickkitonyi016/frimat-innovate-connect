import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Users } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'frimattechnologies016@gmail.com',
      link: 'mailto:frimattechnologies016@gmail.com'
    },
    {
      icon: MessageSquare,
      label: 'WhatsApp',
      value: '0112277289',
      link: 'https://wa.me/0112277289'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+011 227 7289',
      link: 'tel:+0112277289'
    },
    {
      icon: MapPin,
      label: 'Office',
      value: 'Innovation Hub, Tech City',
      link: '#'
    }
  ];

  const features = [
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock assistance for all your technology needs'
    },
    {
      icon: Users,
      title: 'Expert Consultation',
      description: 'Free initial consultation with our technology specialists'
    },
    {
      icon: Send,
      title: 'Quick Response',
      description: 'We respond to all inquiries within 24 hours'
    }
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 sm:mb-6 leading-tight">
            Get In Touch
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0">
            Ready to transform your business with technology? Let's discuss your project and explore how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* Contact Form */}
          <div className="card-elevated">
            <h3 className="text-2xl font-bold text-primary mb-6">
              Send us a Message
            </h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-xs sm:text-sm font-medium text-primary mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent bg-background text-sm sm:text-base"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-xs sm:text-sm font-medium text-primary mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent bg-background text-sm sm:text-base"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent bg-background"
                  placeholder="john.doe@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-primary mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent bg-background"
                  placeholder="Your Company Name"
                />
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-primary mb-2">
                  Service of Interest
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent bg-background"
                >
                  <option value="">Select a service</option>
                  <option value="web-development">Web Development</option>
                  <option value="mobile-development">Mobile App Development</option>
                  <option value="cloud-solutions">Cloud Solutions</option>
                  <option value="ai-ml">AI & Machine Learning</option>
                  <option value="consulting">IT Consulting</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                  Project Description *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent bg-background resize-none"
                  placeholder="Tell us about your project, goals, and any specific requirements..."
                ></textarea>
              </div>
              
              <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="card-elevated">
              <h3 className="text-2xl font-bold text-primary mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-accent/5 transition-colors duration-300 group"
                  >
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-300">
                      <item.icon className="w-6 h-6 text-accent group-hover:text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{item.label}</div>
                      <div className="text-primary font-medium group-hover:text-accent">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="card-elevated">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-success" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-primary mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Business Hours */}
            <div className="card-elevated">
              <h4 className="text-lg font-semibold text-primary mb-4">
                Business Hours
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monday - Friday</span>
                  <span className="text-primary font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Saturday</span>
                  <span className="text-primary font-medium">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sunday</span>
                  <span className="text-primary font-medium">Emergency Support Only</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;