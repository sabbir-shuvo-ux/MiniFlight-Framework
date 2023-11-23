"use client";
import { INNER_PAGE_BANNER } from "@/AppData/innerPage";
import Image from "next/image";
import { usePathname } from "next/navigation";

const InnerPageHeaderTopPart = () => {
  const pathname = usePathname();
  const newArray = pathname.split("/");
  const pagename = newArray[newArray.length - 1].replace(/-/g, " ");
  return (
    <div className="inner_page_header_top position-relative">
      <Image
        src={INNER_PAGE_BANNER}
        alt="inner page header img"
        fill
        className="object-fit-cover"
        sizes="100vw"
      />
      <h1 className="inner_page_header_title">{pagename}</h1>
    </div>
  );
};

export default InnerPageHeaderTopPart;
