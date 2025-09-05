import { Users, Award, Target, Zap } from 'lucide-react';

const About = () => {
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
            
            {/* Key Metrics */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-accent mb-2">5+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-success mb-2">99%</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 order-1 lg:order-2">
            {features.map((feature, index) => (
              <div key={index} className="card-elevated hover-glow">
                <div className="mb-3 sm:mb-4">
                  <feature.icon className="w-10 h-10 sm:w-12 sm:h-12 text-accent" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-primary mb-2 sm:mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
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