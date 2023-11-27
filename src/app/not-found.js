import Breadcamp from "@/components/innerPageComponents/breadcamp/Breadcamp";
import InnerPageHeader from "@/components/innerPageComponents/innerPageHeader/InnerPageHeader";
import "@/assets/innerPage.scss";
import InnerPageSidebar from "@/components/innerPageComponents/innerPageSidebar/InnerPageSidebar";

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
            <h1>Not found page</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
