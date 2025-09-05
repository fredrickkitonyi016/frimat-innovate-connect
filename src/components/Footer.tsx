import { Mail, MessageSquare, Linkedin, Facebook, Twitter, ChevronUp } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' }
  ];

  const services = [
    { name: 'Web Development', href: '#services' },
    { name: 'Mobile Apps', href: '#services' },
    { name: 'Cloud Solutions', href: '#services' },
    { name: 'AI & ML', href: '#services' }
  ];

  const company = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Team', href: '#about' },
    { name: 'Careers', href: '#contact' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com/company/frimat-technologies',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      href: 'https://facebook.com/frimattechnologies',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      href: 'https://twitter.com/frimattechnologies',
      color: 'hover:text-blue-400'
    },
    {
      name: 'WhatsApp',
      icon: MessageSquare,
      href: 'https://wa.me/0112277289',
      color: 'hover:text-green-500'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="section-dark">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">F</span>
                </div>
                <span className="text-white font-bold text-xl">FRIMAT</span>
              </div>
              <p className="text-white/80 mb-6 leading-relaxed">
                Connecting Innovation. Delivering Solutions. 
                Empowering businesses with cutting-edge technology solutions that drive growth and success.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <a 
                  href="mailto:frimattechnologies016@gmail.com"
                  className="flex items-center gap-3 text-white/80 hover:text-accent transition-colors duration-300"
                >
                  <Mail size={18} />
                  <span className="text-sm">frimattechnologies016@gmail.com</span>
                </a>
                <a 
                  href="https://wa.me/0112277289"
                  className="flex items-center gap-3 text-white/80 hover:text-success transition-colors duration-300"
                >
                  <MessageSquare size={18} />
                  <span className="text-sm">WhatsApp: 0112277289</span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-white/80 hover:text-accent transition-colors duration-300 hover:underline text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-6">Services</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <a
                      href={service.href}
                      className="text-white/80 hover:text-accent transition-colors duration-300 hover:underline text-sm"
                    >
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-6">Company</h3>
              <ul className="space-y-3">
                {company.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-white/80 hover:text-accent transition-colors duration-300 hover:underline text-sm"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="border-t border-white/10 py-8">
          <div className="text-center">
            <h3 className="text-white font-semibold text-xl mb-4">
              Stay Updated with Technology Insights
            </h3>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest technology trends, industry insights, and company updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:border-accent backdrop-blur-sm"
              />
              <button className="btn-hero px-8">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="text-white/60 text-sm">
              © 2025 FRIMAT TECHNOLOGIES. All Rights Reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white/80 transition-all duration-300 hover:bg-white/20 ${social.color} transform hover:scale-110`}
                  aria-label={social.name}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-white hover:bg-success transition-all duration-300 transform hover:scale-110"
              aria-label="Back to top"
            >
              <ChevronUp size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;