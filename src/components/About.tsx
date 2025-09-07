import { Users, Award, Target, Zap } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const About = () => {
  const { ref: statsRef, isInView: statsInView } = useScrollAnimation({ threshold: 0.3 });
  const features = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'Focused on delivering innovative solutions that drive real business value and technological advancement.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Our skilled professionals bring years of experience in cutting-edge technology and industry best practices.'
    },
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'Committed to delivering exceptional quality in every project, exceeding client expectations consistently.'
    },
    {
      icon: Zap,
      title: 'Innovation First',
      description: 'Leveraging the latest technologies and methodologies to provide future-ready solutions.'
    }
  ];

  return (
    <section id="about" className="section-light py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 sm:mb-6 leading-tight">
              About FRIMAT Technologies
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
              At FRIMAT Technologies, we are passionate about connecting innovation with practical solutions. 
              Founded with a vision to bridge the gap between cutting-edge technology and real-world business needs, 
              we have established ourselves as a trusted partner for organizations seeking digital transformation.
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
              Our team of experienced professionals combines deep technical expertise with industry knowledge 
              to deliver solutions that not only meet today's challenges but also prepare our clients for tomorrow's opportunities.
            </p>
            
            {/* Animated Key Metrics */}
            <div ref={statsRef} className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="group">
                <div className={`text-2xl sm:text-3xl font-bold text-accent mb-2 transition-all duration-500 ${statsInView ? 'scale-100 opacity-100' : 'scale-50 opacity-0'} group-hover:scale-110`}>
                  <AnimatedCounter end={8} suffix="+" duration={2000} />
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="group">
                <div className={`text-2xl sm:text-3xl font-bold text-success mb-2 transition-all duration-500 delay-200 ${statsInView ? 'scale-100 opacity-100' : 'scale-50 opacity-0'} group-hover:scale-110`}>
                  <AnimatedCounter end={99.8} suffix="%" decimals={1} duration={2500} />
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Features Grid with Staggered Animation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 order-1 lg:order-2">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`card-elevated hover-glow group transform transition-all duration-500 hover:scale-105 ${
                  statsInView 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100 + 300}ms` }}
              >
                <div className="mb-3 sm:mb-4 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <feature.icon className="w-10 h-10 sm:w-12 sm:h-12 text-accent transition-colors duration-300 group-hover:text-success" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-primary mb-2 sm:mb-3 transition-colors duration-300 group-hover:text-accent">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;