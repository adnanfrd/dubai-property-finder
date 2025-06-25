
import { Button } from "@/components/ui/button";

const FeaturedProperties = () => {
  const properties = [
    {
      title: "Marina & Downtown Luxury",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      priceFrom: "AED 1,200,000",
      amenities: ["Marina Views", "Gym & Pool", "24/7 Security", "Metro Access"]
    },
    {
      title: "Palm Jumeirah Waterfront",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      priceFrom: "AED 2,500,000",
      amenities: ["Beach Access", "Private Pool", "Concierge", "Sea Views"]
    },
    {
      title: "Business Bay Towers",
      image: "https://images.unsplash.com/photo-1486304873000-235643847519?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      priceFrom: "AED 850,000",
      amenities: ["City Views", "Business Hub", "Modern Amenities", "Investment Ready"]
    }
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Luxury Apartments, Waterfront Villas & Off-Plan Investments
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Discover premium properties in Dubai's most sought-after locations
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {properties.map((property, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden h-64">
                <img 
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-amber-500 text-slate-900 px-3 py-1 rounded-full font-bold text-sm">
                  From {property.priceFrom}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">
                  {property.title}
                </h3>
                
                <div className="space-y-2 mb-6">
                  {property.amenities.map((amenity, idx) => (
                    <div key={idx} className="flex items-center text-slate-600">
                      <span className="text-amber-500 mr-2">✓</span>
                      {amenity}
                    </div>
                  ))}
                </div>
                
                <Button className="w-full bg-slate-800 hover:bg-slate-700 text-white">
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center bg-blue-900/50 p-8 rounded-2xl">
          <h3 className="text-2xl font-bold text-white mb-4">
            🔍 Looking for something custom?
          </h3>
          <p className="text-blue-200 mb-6 text-lg">
            Tell us your budget and we'll send you personalized options.
          </p>
          <Button className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-8 py-3">
            Get Custom Recommendations
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
