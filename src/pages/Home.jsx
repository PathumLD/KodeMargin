import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import IntroductionSection from "../components/IntroductionSection";
import ServicesOverview from "../components/ServicesOverview";
import WhyChooseUsSection from "../components/WhyChooseUsSection";
import ClientTestimonialsSection from "../components/ClientTestimonialsSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="bg-white">
      <Header />
      <HeroSection />
      <IntroductionSection />
      <ServicesOverview />
      <WhyChooseUsSection />
      <ClientTestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Home;