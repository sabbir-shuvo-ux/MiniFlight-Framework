import Link from "next/link";
import React from "react";
import menuData from "@/AppData/menuData";
const InnerPageSidebar = () => {
  const { services } = menuData;
  return (
    <aside className="inner_page_sidebar">
      <ul className="list-unstyled">
        {services.menus.map((item, index) => {
          const newItem = item.replace(/-/g, " ");
          return (
            <li key={index}>
              <Link href={`/${services.path}/${item}`} title={newItem}>
                {newItem}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default InnerPageSidebar;
