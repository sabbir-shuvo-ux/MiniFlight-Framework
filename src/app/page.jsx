import HomeSlider from "@/components/homeSlider/HomeSlider";
import ServicesSection from "@/components/servicesSection/ServicesSection";
import WelcomeSection from "@/components/welcomeSection/WelcomeSection";

export default function Home() {
  return (
    <>
      <HomeSlider />
      <WelcomeSection />
      <ServicesSection />
    </>
  );
}
