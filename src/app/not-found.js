import Breadcamp from "@/components/innerPageComponents/breadcamp/Breadcamp";
import InnerPageHeader from "@/components/innerPageComponents/innerPageHeader/InnerPageHeader";
import "@/assets/innerPage.scss";
import InnerPageSidebar from "@/components/innerPageComponents/innerPageSidebar/InnerPageSidebar";
import ReviewHome from "@/components/reviewHome/ReviewHome";
import GoogleMap from "@/components/googleMap/GoogleMap";
import { BsGear } from "react-icons/bs";
import Link from "next/link";
export default function NotFound() {
  return (
    <div className="inner_page_main">
      <InnerPageHeader />
      <Breadcamp />
      <div className="container pt-4">
        <div className="row">
          <div className="col-lg-3 order-2 order-lg-1">
            <InnerPageSidebar />
          </div>
          <div className="col-lg-9 order-1 order-lg-2">
            <div className="not_found_page_container">
              <h2>
                <BsGear className="spin_animation" size={40} /> Page Not Found!
              </h2>
              <h3>Ooops, It looks like the requested page was not found.</h3>
              <h4>
                You may{" "}
                <Link className="text-decoration-none" href={"/contact"}>
                  report
                </Link>{" "}
                this error or go to our{" "}
                <Link className="text-decoration-none" href={"/"}>
                  Home Page
                </Link>
              </h4>
            </div>
          </div>
        </div>
      </div>
      {/* Review slider */}
      <ReviewHome />
      {/* Google map */}
      <GoogleMap />
    </div>
  );
}
