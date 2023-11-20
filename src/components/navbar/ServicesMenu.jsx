import Link from "next/link";
import menuData from "@/AppData/menuData";

const ServicesMenu = ({ isMobile }) => {
  const { services } = menuData;

  const { menus, path } = services;
  return (
    <ul className={isMobile ? "dropdown-menu" : "dropdown_menu big_with"}>
      {menus.map((service, index) => {
        const newService = service.replace(/-/g, " ");
        return (
          <li key={index} className="menu_item">
            <Link href={`/${path}/${service}`} title={newService}>
              {newService}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default ServicesMenu;
