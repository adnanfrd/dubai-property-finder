
const AboutCompany = () => {
  const features = [
    "10+ Years Experience",
    "Local Market Knowledge", 
    "Multilingual Team",
    "Full Legal & Financial Assistance"
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Your Trusted Dubai Property Experts
          </h2>
          
          <p className="text-xl text-slate-600 mb-12 leading-relaxed">
            We help investors, families, and first-time buyers find the perfect property 
            in Dubai with complete transparency and zero hassle.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-amber-500 text-3xl mb-3">✔</div>
                <p className="font-semibold text-slate-800">{feature}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-slate-800 p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">Luxora Dubai</h3>
            <p className="text-blue-200 text-lg">
              "Luxury Living. Global Lifestyle." - Your gateway to Dubai's premium real estate market.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
