
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    budget: "",
    location: ""
  });
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Thank you for your interest!",
      description: "We'll contact you within 24 hours with personalized property options.",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-slate-800">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let's Find Your Dream Property
            </h2>
            <p className="text-xl text-blue-200">
              Get a free consultation or custom property shortlist.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-slate-800 font-semibold">
                    📍 Full Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="border-2 border-slate-200 focus:border-amber-500 transition-colors"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-slate-800 font-semibold">
                    📍 Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="border-2 border-slate-200 focus:border-amber-500 transition-colors"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-slate-800 font-semibold">
                    📍 Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="border-2 border-slate-200 focus:border-amber-500 transition-colors"
                    placeholder="+971 50 123 4567"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label className="text-slate-800 font-semibold">📍 Budget Range</Label>
                  <Select onValueChange={(value) => handleInputChange("budget", value)}>
                    <SelectTrigger className="border-2 border-slate-200 focus:border-amber-500">
                      <SelectValue placeholder="Select your budget" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="500k-1m">AED 500K - 1M</SelectItem>
                      <SelectItem value="1m-2m">AED 1M - 2M</SelectItem>
                      <SelectItem value="2m-5m">AED 2M - 5M</SelectItem>
                      <SelectItem value="5m+">AED 5M+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label className="text-slate-800 font-semibold">📍 Preferred Location</Label>
                <Select onValueChange={(value) => handleInputChange("location", value)}>
                  <SelectTrigger className="border-2 border-slate-200 focus:border-amber-500">
                    <SelectValue placeholder="Choose preferred area" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="marina">Dubai Marina</SelectItem>
                    <SelectItem value="downtown">Downtown Dubai</SelectItem>
                    <SelectItem value="palm">Palm Jumeirah</SelectItem>
                    <SelectItem value="business-bay">Business Bay</SelectItem>
                    <SelectItem value="jlt">Jumeirah Lake Towers</SelectItem>
                    <SelectItem value="other">Other/Flexible</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-4 text-lg transition-all duration-300 hover:scale-105"
              >
                Get My Property List ➜
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
