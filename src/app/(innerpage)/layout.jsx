import Breadcamp from "@/components/innerPageComponents/breadcamp/Breadcamp";
import InnerPageHeader from "@/components/innerPageComponents/innerPageHeader/InnerPageHeader";
import React from "react";

const InnerPageLayout = ({ children }) => {
  return (
    <div>
      <InnerPageHeader />
      <Breadcamp />
      {children}
    </div>
  );
};

export default InnerPageLayout;
