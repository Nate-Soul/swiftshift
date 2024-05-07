import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import HowItWorks from "@/components/sections/HowItWorks";
import ServicesSection from "@/components/sections/Services";
import AboutSection from "@/components/sections/About";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import TestimonialsSection from "@/components/sections/Testimonials";
import FAQSection from "@/components/sections/FAQs";

export default function Home() {
  return (
    <>
    <Hero/>
    <Features/>
    <HowItWorks/>
    <ServicesSection/>
    <AboutSection/>
    <WhyChooseUs/>
    <TestimonialsSection/>
    <FAQSection/>
    </>
  );
}
