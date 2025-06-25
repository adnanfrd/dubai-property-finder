
import { Button } from "@/components/ui/button";
import { Phone, Book } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to Own in Dubai?
          </h2>
          
          <p className="text-xl md:text-2xl text-blue-200 mb-12 leading-relaxed">
            Get expert help, exclusive listings, and legal guidance — all in one place.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold px-8 py-4 text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <Phone className="mr-2 h-5 w-5" />
              Book a Free Property Call
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-blue-300 text-blue-100 hover:bg-blue-300 hover:text-slate-900 px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
            >
              <Book className="mr-2 h-5 w-5" />
              Download Investor Guide (PDF)
            </Button>
          </div>
          
          {/* Company Footer */}
          <div className="border-t border-blue-800 pt-12">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <h3 className="text-2xl font-bold text-amber-400 mb-2">Luxora Dubai</h3>
                <p className="text-blue-200">Luxury Living. Global Lifestyle.</p>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6 text-blue-200">
                <div className="text-center md:text-left">
                  <p className="font-semibold mb-1">📞 Call Us</p>
                  <p>+971 4 123 4567</p>
                </div>
                <div className="text-center md:text-left">
                  <p className="font-semibold mb-1">✉️ Email</p>
                  <p>hello@luxoradubai.com</p>
                </div>
                <div className="text-center md:text-left">
                  <p className="font-semibold mb-1">📍 Location</p>
                  <p>Dubai Marina, UAE</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-blue-800 text-center text-blue-300">
              <p>&copy; 2025 Luxora Dubai. All rights reserved. | Developed by <span className="font-bold text-amber-400 mb-2"> M Adnan Fareed </span> </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
