
const WhyDubai = () => {
  const benefits = [
    {
      icon: "🏛️",
      title: "0% Property Tax & 100% Ownership",
      description: "Complete ownership rights for expats with zero property taxation"
    },
    {
      icon: "📈",
      title: "High ROI: Up to 8–10% Rental Yields",
      description: "Exceptional returns in one of the world's fastest-growing markets"
    },
    {
      icon: "🏗️",
      title: "World-Class Infrastructure",
      description: "Future-ready smart city with cutting-edge amenities and connectivity"
    },
    {
      icon: "🇦🇪",
      title: "Golden Visa Eligibility",
      description: "Investor-friendly laws with long-term residency opportunities"
    },
    {
      icon: "✈️",
      title: "Global Business Hub",
      description: "Top destination for international business and luxury tourism"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Why Invest in Dubai Real Estate?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Dubai offers unparalleled opportunities for global investors seeking luxury, security, and exceptional returns
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-100"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                {benefit.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyDubai;
