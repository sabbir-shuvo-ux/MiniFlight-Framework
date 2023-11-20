"use client";
import { usePathname } from "next/navigation";

const InnerPageHeaderTopPart = () => {
  const pathname = usePathname();
  const newArray = pathname.split("/");
  const pagename = newArray[newArray.length - 1].replace(/-/g, " ");
  return (
    <div>
      <h1 className="text-uppercase">{pagename}</h1>
    </div>
  );
};

export default InnerPageHeaderTopPart;
