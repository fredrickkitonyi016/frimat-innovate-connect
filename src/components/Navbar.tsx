import { useState, useEffect } from 'react';
import { Menu, X, Home, Info, Settings, ShoppingBag, Briefcase, PenTool, Phone } from 'lucide-react';
import SignUpForm from './SignUpForm';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: Info },
    { id: 'services', label: 'Services', icon: Settings },
    { id: 'shop', label: 'Shop', icon: ShoppingBag },
    { id: 'portfolio', label: 'Portfolio', icon: Briefcase },
    { id: 'blog', label: 'Blog', icon: PenTool },
    { id: 'contact', label: 'Contact', icon: Phone },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
    
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'nav-solid' : 'nav-transparent'
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">F</span>
              </div>
              <span className="text-white font-bold text-xl">FRIMAT TECHNOLOGIES</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => handleNavClick(id)}
                  className={`flex items-center space-x-2 text-white/80 hover:text-white transition-colors duration-300 font-medium ${
                    activeSection === id ? 'text-accent' : ''
                  }`}
                >
                  <Icon size={18} />
                  <span>{label}</span>
                </button>
              ))}
              
              {/* Glassmorphism Sign Up Button */}
              <SignUpForm />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-primary/95 backdrop-blur-md border-t border-white/10">
            <div className="container mx-auto px-6 py-4">
              <div className="flex flex-col space-y-4">
                {navItems.map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    onClick={() => handleNavClick(id)}
                    className={`flex items-center space-x-3 text-white/80 hover:text-white transition-colors duration-300 font-medium py-2 ${
                      activeSection === id ? 'text-accent' : ''
                    }`}
                  >
                    <Icon size={20} />
                    <span>{label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Mobile Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 lg:hidden bg-primary/95 backdrop-blur-md border-t border-white/10 z-40">
        <div className="flex justify-around items-center py-2">
          {navItems.slice(0, 5).map(({ id, icon: Icon }) => (
            <button
              key={id}
              onClick={() => handleNavClick(id)}
              className={`flex flex-col items-center py-2 px-3 transition-all duration-300 ${
                activeSection === id 
                  ? 'text-accent transform scale-110' 
                  : 'text-white/60 hover:text-white'
              }`}
            >
              <Icon size={20} />
              {activeSection === id && (
                <div className="w-1 h-1 bg-accent rounded-full mt-1 animate-pulse"></div>
              )}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;