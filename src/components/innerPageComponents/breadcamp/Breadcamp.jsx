"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoHomeOutline } from "react-icons/io5";
const Breadcamp = () => {
  const pathname = usePathname();
  const breadcampItem = pathname.split("/").filter((item) => item.length > 0);
  const lastItem = breadcampItem[breadcampItem.length - 1];

  return (
    <section className="breadcrumb_section mt-5 mb-3">
      <div className="container">
        <div className="breadcrumb_container">
          <Link href={"/"} className="breadcrumb_item">
            <IoHomeOutline size={20} color="home_icon" />
            Home
            <span className="indicator"> » </span>
          </Link>
          {breadcampItem.map((item, index) => (
            <div
              key={index}
              className={`breadcrumb_item ${
                lastItem === item && "breadcamp_active"
              }`}
            >
              {item.replace(/-/g, " ")}
              {lastItem !== item && <span className="indicator"> » </span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Breadcamp;
