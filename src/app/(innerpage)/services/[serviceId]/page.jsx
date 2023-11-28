import { innerPageDataContent } from "@/AppData/innerPageContent";
import { notFound } from "next/navigation";

// Get page content and metadata
const getPageContent = (id) => {
  if (innerPageDataContent[id]) {
    return innerPageDataContent[id];
  }

  // if there is no params match in "innerPageContent" then show notFound page
  notFound();
};

// main
const InnerDetailsPage = ({ params }) => {
  const data = getPageContent(params.serviceId);
  return <>{data.pageContent}</>;
};

export default InnerDetailsPage;

// generate metadata for each page
export const generateMetadata = ({ params }) => {
  const { metaData } = getPageContent(params.serviceId);

  return {
    title: metaData.title,
  };
};

export const generateStaticParams = async ({ params }) => {
  return Object.keys(innerPageDataContent).map((item) => ({
    serviceId: item,
  }));
};
