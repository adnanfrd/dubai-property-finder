
import { Button } from "@/components/ui/button";
import { MapPin, Bed, Bath, Square, Star } from "lucide-react";

const FeaturedProperties = () => {
  const properties = [
    {
      title: "Marina & Downtown Luxury",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      priceFrom: "AED 1,200,000",
      location: "Dubai Marina",
      beds: "2-3",
      baths: "2-3", 
      sqft: "1,200-1,800",
      amenities: ["Marina Views", "Gym & Pool", "24/7 Security", "Metro Access"],
      rating: 4.9,
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      title: "Palm Jumeirah Waterfront",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      priceFrom: "AED 2,500,000",
      location: "Palm Jumeirah",
      beds: "3-4",
      baths: "3-4",
      sqft: "2,000-3,000",
      amenities: ["Beach Access", "Private Pool", "Concierge", "Sea Views"],
      rating: 5.0,
      gradient: "from-amber-600 to-orange-600"
    },
    {
      title: "Business Bay Towers",
      image: "https://images.unsplash.com/photo-1486304873000-235643847519?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      priceFrom: "AED 850,000",
      location: "Business Bay",
      beds: "1-2",
      baths: "1-2",
      sqft: "800-1,200",
      amenities: ["City Views", "Business Hub", "Modern Amenities", "Investment Ready"],
      rating: 4.8,
      gradient: "from-emerald-600 to-teal-600"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 animate-luxury-slide-up">
            Luxury Apartments, Waterfront Villas &{" "}
            <span className="gradient-text">Off-Plan Investments</span>
          </h2>
          <p className="text-2xl text-blue-200 max-w-4xl mx-auto font-light animate-luxury-fade-in" style={{animationDelay: '0.3s'}}>
            Discover premium properties in Dubai's most sought-after locations
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          {properties.map((property, index) => (
            <div 
              key={index}
              className="group luxury-card-hover bg-white rounded-3xl overflow-hidden shadow-2xl animate-luxury-fade-in"
              style={{animationDelay: `${0.6 + index * 0.2}s`}}
            >
              <div className="relative overflow-hidden h-80">
                <img 
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${property.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
                
                {/* Price Badge */}
                <div className="absolute top-6 right-6 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-900 px-4 py-2 rounded-full font-bold text-lg shadow-xl animate-glow">
                  From {property.priceFrom}
                </div>
                
                {/* Rating Badge */}
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full flex items-center space-x-1 shadow-lg">
                  <Star className="w-4 h-4 text-amber-500 fill-current" />
                  <span className="font-semibold text-sm">{property.rating}</span>
                </div>
                
                {/* Location */}
                <div className="absolute bottom-4 left-6 flex items-center space-x-2 text-white">
                  <MapPin className="w-4 h-4" />
                  <span className="font-medium">{property.location}</span>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:gradient-text transition-all duration-300">
                  {property.title}
                </h3>
                
                {/* Property Details */}
                <div className="flex items-center justify-between mb-6 text-slate-600">
                  <div className="flex items-center space-x-1">
                    <Bed className="w-4 h-4" />
                    <span className="text-sm font-medium">{property.beds} Beds</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Bath className="w-4 h-4" />
                    <span className="text-sm font-medium">{property.baths} Baths</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Square className="w-4 h-4" />
                    <span className="text-sm font-medium">{property.sqft} sqft</span>
                  </div>
                </div>
                
                {/* Amenities */}
                <div className="space-y-3 mb-8">
                  {property.amenities.map((amenity, idx) => (
                    <div key={idx} className="flex items-center text-slate-600 group-hover:text-slate-700 transition-colors duration-300">
                      <span className="text-amber-500 mr-3 font-bold">✓</span>
                      <span className="font-medium">{amenity}</span>
                    </div>
                  ))}
                </div>
                
                <Button className={`w-full luxury-button bg-gradient-to-r ${property.gradient} hover:shadow-xl text-white font-semibold py-4 text-lg rounded-2xl`}>
                  View Details & Book Tour
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Custom Recommendations CTA */}
        <div className="text-center bg-gradient-to-br from-blue-900/80 to-slate-800/80 p-12 rounded-3xl border border-blue-400/20 backdrop-blur-sm animate-luxury-fade-in luxury-hover" style={{animationDelay: '1.4s'}}>
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 mb-4 animate-glow">
              <span className="text-2xl">🔍</span>
            </div>
          </div>
          <h3 className="text-3xl font-bold text-white mb-4 gradient-text">
            Looking for something custom?
          </h3>
          <p className="text-blue-200 mb-8 text-xl font-light max-w-2xl mx-auto">
            Tell us your budget and preferences, and we'll send you personalized property options within 24 hours.
          </p>
          <Button className="luxury-button bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-900 font-bold px-10 py-4 text-xl rounded-2xl shadow-2xl">
            Get Custom Recommendations
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
