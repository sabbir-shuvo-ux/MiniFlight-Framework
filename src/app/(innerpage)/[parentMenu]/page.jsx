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
const ParentInnerDetailsPage = ({ params }) => {
  const data = getPageContent(params.parentMenu);
  return <>{data.pageContent}</>;
};

export default ParentInnerDetailsPage;

// generate metadata for each page
export const generateMetadata = ({ params }) => {
  const { metaData } = getPageContent(params.parentMenu);

  return {
    title: metaData.title,
    description: metaData.description,
  };
};

// export const generateStaticParams = async () => {
//   return Object.keys(innerPageDataContent).map((item) => ({
//     parentMenu: item,
//   }));
// };
