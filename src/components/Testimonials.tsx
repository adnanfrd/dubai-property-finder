
const Testimonials = () => {
  const testimonials = [
    {
      rating: 5,
      text: "Luxora Dubai helped me buy an apartment in Business Bay and even took care of the legal paperwork. Seamless experience!",
      author: "Sarah Mitchell",
      location: "United Kingdom",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      rating: 5,
      text: "Dubai was confusing at first. Their team explained everything step by step and made it easy. Highly recommended!",
      author: "Ahmed Al-Rashid",
      location: "Saudi Arabia",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      rating: 5,
      text: "Professional service and great ROI on my investment. The team's market knowledge is exceptional.",
      author: "Priya Sharma",
      location: "India",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-slate-600">
            Trusted by investors, families, and expats worldwide
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Rating Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-amber-400 text-xl">★</span>
                ))}
              </div>
              
              {/* Testimonial Text */}
              <p className="text-slate-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              
              {/* Author Info */}
              <div className="flex items-center">
                <img 
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="font-bold text-slate-800">{testimonial.author}</p>
                  <p className="text-slate-600 text-sm">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-amber-100 px-6 py-3 rounded-full">
            <span className="text-amber-600 font-semibold mr-2">🛡️</span>
            <span className="text-slate-800 font-semibold">Trusted by 1000+ Happy Clients</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
