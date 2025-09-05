import heroBackground from '@/assets/hero-background.jpg';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="section-hero min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 animate-fade-in leading-tight">
            FRIMAT TECHNOLOGIES
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 sm:mb-8 animate-fade-in-delay font-light">
            Connecting Innovation. Delivering Solutions.
          </p>
          
          {/* Description */}
          <p className="text-base sm:text-lg text-white/80 mb-8 sm:mb-12 max-w-2xl mx-auto animate-fade-in-delay px-4 sm:px-0">
            Empowering businesses with cutting-edge technology solutions. From innovative software development to comprehensive IT consulting, we bridge the gap between vision and reality.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center animate-slide-up px-4 sm:px-0">
            <button className="btn-hero w-full sm:w-auto">
              Get Started
            </button>
            <button className="btn-secondary w-full sm:w-auto">
              Sign Up
            </button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16 animate-slide-up px-4 sm:px-0">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent mb-2">100+</div>
              <div className="text-sm sm:text-base text-white/80">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-success mb-2">50+</div>
              <div className="text-sm sm:text-base text-white/80">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent mb-2">24/7</div>
              <div className="text-sm sm:text-base text-white/80">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;