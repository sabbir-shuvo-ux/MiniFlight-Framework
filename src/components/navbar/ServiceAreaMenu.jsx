import Link from "next/link";
import menuData from "@/AppData/menuData";

const ServiceAreaMenu = ({ isMobile }) => {
  const { serviceAreaData } = menuData;
  const { menus, path } = serviceAreaData;
  return (
    <ul className={isMobile ? "dropdown-menu" : "dropdown_menu big_with"}>
      {menus.map((location, index) => {
        const newLocation = location.replace(/-/g, " ");
        return (
          <li key={index} className="menu_item">
            <Link href={`/${path}/${location}`} title={newLocation}>
              {newLocation}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default ServiceAreaMenu;
