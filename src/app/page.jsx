import ApplicationsSection from "@/components/applicationsSection/ApplicationsSection";
import BrandsSection from "@/components/brandsSection/BrandsSection";
import HomeSlider from "@/components/homeSlider/HomeSlider";
import ServicesSection from "@/components/servicesSection/ServicesSection";
import WelcomeSection from "@/components/welcomeSection/WelcomeSection";

export default function Home() {
  return (
    <>
      <HomeSlider />
      <WelcomeSection />
      <ServicesSection />
      <ApplicationsSection />
      <BrandsSection />
    </>
  );
}
