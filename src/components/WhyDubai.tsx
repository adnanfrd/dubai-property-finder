
const WhyDubai = () => {
  const benefits = [
    {
      icon: "🏛️",
      title: "0% Property Tax & 100% Ownership",
      description: "Complete ownership rights for expats with zero property taxation",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      icon: "📈",
      title: "High ROI: Up to 8–10% Rental Yields",
      description: "Exceptional returns in one of the world's fastest-growing markets",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      icon: "🏗️",
      title: "World-Class Infrastructure",
      description: "Future-ready smart city with cutting-edge amenities and connectivity",
      gradient: "from-purple-500 to-violet-600"
    },
    {
      icon: "🇦🇪",
      title: "Golden Visa Eligibility",
      description: "Investor-friendly laws with long-term residency opportunities",
      gradient: "from-amber-500 to-orange-600"
    },
    {
      icon: "✈️",
      title: "Global Business Hub",
      description: "Top destination for international business and luxury tourism",
      gradient: "from-rose-500 to-pink-600"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-100/30 to-cyan-100/30 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-amber-100/20 to-orange-100/20 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-800 mb-8 animate-luxury-slide-up">
            Why Invest in{" "}
            <span className="gradient-text">Dubai Real Estate</span>?
          </h2>
          <p className="text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed animate-luxury-fade-in font-light" style={{animationDelay: '0.3s'}}>
            Dubai offers unparalleled opportunities for global investors seeking luxury, security, and exceptional returns
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group luxury-card-hover bg-white p-10 rounded-3xl shadow-xl border border-slate-200/50 backdrop-blur-sm animate-luxury-fade-in"
              style={{animationDelay: `${0.6 + index * 0.15}s`}}
            >
              {/* Icon with Gradient Background */}
              <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${benefit.gradient} mb-6 text-white text-3xl shadow-lg animate-scale-breath group-hover:animate-glow`}>
                {benefit.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:gradient-text transition-all duration-300">
                {benefit.title}
              </h3>
              
              <p className="text-slate-600 leading-relaxed text-lg group-hover:text-slate-700 transition-colors duration-300">
                {benefit.description}
              </p>
              
              {/* Hover Effect Line */}
              <div className={`w-0 h-1 bg-gradient-to-r ${benefit.gradient} mt-6 transition-all duration-500 group-hover:w-full rounded-full`} />
            </div>
          ))}
        </div>
        
        {/* Bottom Decoration */}
        <div className="mt-20 text-center animate-luxury-fade-in" style={{animationDelay: '1.5s'}}>
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-slate-800 to-slate-700 text-white px-8 py-4 rounded-full shadow-2xl luxury-hover">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}} />
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" style={{animationDelay: '1s'}} />
            </div>
            <span className="font-semibold text-lg">Discover Your Investment Opportunity</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDubai;
