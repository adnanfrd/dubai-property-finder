
import { Button } from "@/components/ui/button";
import { Phone, Home, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-800 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Main Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 animate-scale-breath"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
        
        {/* Animated Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-blue-900/85 to-transparent animate-gradient" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
      </div>
      
      {/* Floating Luxury Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-amber-400/30 to-orange-500/30 rounded-full blur-xl animate-float animate-glow" />
      <div className="absolute bottom-40 left-16 w-48 h-48 bg-gradient-to-br from-blue-400/20 to-cyan-500/20 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}} />
      <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-gradient-to-br from-violet-400/25 to-purple-500/25 rounded-full blur-xl animate-float" style={{animationDelay: '4s'}} />
      
      {/* Sparkle Effects */}
      <div className="absolute top-32 left-1/4 animate-float" style={{animationDelay: '1s'}}>
        <Sparkles className="w-6 h-6 text-amber-400/60" />
      </div>
      <div className="absolute bottom-1/3 right-1/3 animate-float" style={{animationDelay: '3s'}}>
        <Sparkles className="w-4 h-4 text-blue-300/50" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 flex flex-col justify-center min-h-screen">
        <div className="max-w-5xl">
          {/* Company Logo with Luxury Animation */}
          <div className="mb-12 animate-luxury-fade-in">
            <div className="inline-block p-6 rounded-2xl bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-400/20 backdrop-blur-sm luxury-hover">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-3">
                Luxora Dubai
              </h2>
              <p className="text-blue-200 text-lg md:text-xl font-light">
                Luxury Living. <span className="gradient-text-blue">Global Lifestyle.</span>
              </p>
            </div>
          </div>
          
          {/* Main Headline with Staggered Animation */}
          <div className="space-y-4 mb-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
              <span className="block animate-luxury-slide-up">Own a Luxury</span>
              <span className="block animate-luxury-slide-up gradient-text" style={{animationDelay: '0.2s'}}>
                Property in Dubai
              </span>
              <span className="block text-4xl md:text-5xl lg:text-6xl mt-4 animate-luxury-slide-up" style={{animationDelay: '0.4s'}}>
                Starting from Just{" "}
                <span className="gradient-text animate-shimmer">AED 850,000</span>
              </span>
            </h1>
          </div>
          
          {/* Subheadline with Elegant Animation */}
          <p className="text-xl md:text-3xl text-blue-100 mb-12 max-w-4xl leading-relaxed animate-luxury-fade-in font-light" style={{animationDelay: '0.6s'}}>
            Invest in Dubai's booming real estate market and secure your future with{" "}
            <span className="gradient-text font-semibold">tax-free returns</span>, 
            world-class amenities, and unmatched lifestyle.
          </p>
          
          {/* CTA Buttons with Luxury Effects */}
          <div className="flex flex-col sm:flex-row gap-6 mb-16 animate-luxury-fade-in" style={{animationDelay: '0.8s'}}>
            <Button 
              size="lg" 
              className="luxury-button luxury-hover bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-900 font-bold px-10 py-6 text-xl rounded-2xl border-2 border-amber-400/50 shadow-2xl"
            >
              <Phone className="mr-3 h-6 w-6" />
              Book a Free Consultation
            </Button>
            <Button 
              size="lg" 
              className="luxury-hover bg-transparent border-2 border-blue-300 text-blue-100 hover:bg-blue-300/20 hover:border-blue-200 px-10 py-6 text-xl rounded-2xl backdrop-blur-sm shadow-xl"
            >
              <Home className="mr-3 h-6 w-6" />
              View Available Properties
            </Button>
          </div>
          
          {/* Trust Indicators with Staggered Animation */}
          <div className="flex flex-wrap gap-8 text-blue-200 animate-luxury-fade-in" style={{animationDelay: '1s'}}>
            {[
              "10+ Years Experience",
              "1000+ Properties Sold", 
              "Legal & Financial Support"
            ].map((item, index) => (
              <div 
                key={index}
                className="flex items-center group luxury-hover p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
                style={{animationDelay: `${1.2 + index * 0.2}s`}}
              >
                <span className="text-amber-400 mr-3 text-lg group-hover:animate-glow">✓</span>
                <span className="font-medium text-lg">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent" />
    </section>
  );
};

export default Hero;
