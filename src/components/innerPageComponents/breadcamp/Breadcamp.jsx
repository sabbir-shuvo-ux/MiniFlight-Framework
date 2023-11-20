"use client";

import { usePathname } from "next/navigation";

const Breadcamp = () => {
  const pathname = usePathname();
  const breadcampItem = pathname.split("/");
  return (
    <div className="d-flex gap-2">
      <div>Home </div>
      {breadcampItem.map((item, index) => (
        <div key={index}>{item.replace(/-/g, " ")}</div>
      ))}
    </div>
  );
};

export default Breadcamp;
