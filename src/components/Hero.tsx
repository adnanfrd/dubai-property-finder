
import { Button } from "@/components/ui/button";
import { Phone, Home } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-blue-900/80 to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 flex flex-col justify-center min-h-screen">
        <div className="max-w-4xl">
          {/* Company Logo */}
          <div className="mb-8 animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold text-amber-400 mb-2">
              Luxora Dubai
            </h2>
            <p className="text-blue-200 text-sm md:text-base">Luxury Living. Global Lifestyle.</p>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in">
            Own a Luxury Property in Dubai
            <span className="block text-amber-400 mt-2">
              Starting from Just AED 850,000
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl leading-relaxed animate-fade-in">
            Invest in Dubai's booming real estate market and secure your future with 
            <span className="text-amber-300 font-semibold"> tax-free returns</span>, 
            world-class amenities, and unmatched lifestyle.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
            <Button 
              size="lg" 
              className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-8 py-4 text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <Phone className="mr-2 h-5 w-5" />
              Book a Free Consultation
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-blue-300 text-blue-100 hover:bg-blue-300 hover:text-slate-900 px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
            >
              <Home className="mr-2 h-5 w-5" />
              View Available Properties
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap gap-6 text-blue-200 animate-fade-in">
            <div className="flex items-center">
              <span className="text-amber-400 mr-2">✓</span>
              10+ Years Experience
            </div>
            <div className="flex items-center">
              <span className="text-amber-400 mr-2">✓</span>
              1000+ Properties Sold
            </div>
            <div className="flex items-center">
              <span className="text-amber-400 mr-2">✓</span>
              Legal & Financial Support
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-amber-400/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-40 left-10 w-32 h-32 bg-blue-400/20 rounded-full blur-xl animate-pulse delay-1000" />
    </section>
  );
};

export default Hero;
