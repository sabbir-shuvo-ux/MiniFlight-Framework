// components
import ApplicationsSection from "@/components/applicationsSection/ApplicationsSection";
import BrandsSection from "@/components/brandsSection/BrandsSection";
import GoogleMap from "@/components/googleMap/GoogleMap";
import HomeSlider from "@/components/homeSlider/HomeSlider";
import RecentWorkSection from "@/components/recentWork/RecentWorkSection";
import ReviewHome from "@/components/reviewHome/ReviewHome";
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
      <RecentWorkSection />
      <ReviewHome />
      <GoogleMap />
    </>
  );
}
