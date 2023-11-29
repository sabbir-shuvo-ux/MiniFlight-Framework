import Breadcamp from "@/components/innerPageComponents/breadcamp/Breadcamp";
import InnerPageHeader from "@/components/innerPageComponents/innerPageHeader/InnerPageHeader";
import "@/assets/innerPage.scss";
import ReviewHome from "@/components/reviewHome/ReviewHome";
import GoogleMap from "@/components/googleMap/GoogleMap";
import InnerLayout from "@/components/innerLayout/InnerLayout";

const InnerPageLayout = ({ children }) => {
  return (
    <div className="inner_page_main">
      <InnerPageHeader />
      <Breadcamp />
      <InnerLayout>{children}</InnerLayout>
      {/* Review slider */}
      <ReviewHome />
      {/* Google map */}
      <GoogleMap />
    </div>
  );
};

export default InnerPageLayout;
