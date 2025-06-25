
import Hero from "@/components/Hero";
import WhyDubai from "@/components/WhyDubai";
import FeaturedProperties from "@/components/FeaturedProperties";
import AboutCompany from "@/components/AboutCompany";
import ContactForm from "@/components/ContactForm";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <WhyDubai />
      <FeaturedProperties />
      <AboutCompany />
      <ContactForm />
      <Testimonials />
      <FinalCTA />
    </div>
  );
};

export default Index;
