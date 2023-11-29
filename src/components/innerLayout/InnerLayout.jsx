"use client";
import { innerPageDataContent } from "@/AppData/innerPageContent";
import InnerPageSidebar from "../innerPageComponents/innerPageSidebar/InnerPageSidebar";
import { usePathname } from "next/navigation";

const InnerLayout = ({ children }) => {
  // geting path
  const pathname = usePathname();
  const breadcampItem = pathname.split("/").filter((item) => item.length > 0);
  const currenPage = breadcampItem[breadcampItem.length - 1];

  // checking is this page layout key and its value FULL_PAGE or not
  const isFullPage = innerPageDataContent[currenPage]?.layout === "FULL_PAGE";

  if (isFullPage) {
    return children;
  } else {
    return (
      <div className="container pt-4">
        <div className="row">
          <div className="col-lg-3 order-2 order-lg-1">
            <InnerPageSidebar />
          </div>
          <div className="col-lg-9 order-1 order-lg-2">{children}</div>
        </div>
      </div>
    );
  }
};

export default InnerLayout;
