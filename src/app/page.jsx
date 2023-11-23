import dynamic from "next/dynamic";

// components
import ApplicationsSection from "@/components/applicationsSection/ApplicationsSection";
import BrandsSection from "@/components/brandsSection/BrandsSection";
import HomeSlider from "@/components/homeSlider/HomeSlider";
import RecentWorkSection from "@/components/recentWork/RecentWorkSection";
import ReviewHome from "@/components/reviewHome/ReviewHome";
import ServicesSection from "@/components/servicesSection/ServicesSection";
import WelcomeSection from "@/components/welcomeSection/WelcomeSection";

const DynamicMap = dynamic(() => import("@/components/googleMap/GoogleMap"), {
  ssr: false,
});

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
      <DynamicMap />
    </>
  );
}
