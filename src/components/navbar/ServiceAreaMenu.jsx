import Link from "next/link";
import { serviceAreaData } from "@/AppData/menuData";

const ServiceAreaMenu = ({ isMobile }) => {
  return (
    <ul className={isMobile ? "dropdown-menu" : "dropdown_menu big_with"}>
      {serviceAreaData.map((location, index) => {
        const newLocation = location.replace(/-/g, " ");
        return (
          <li key={index} className="menu_item">
            <Link href={`/${location}`} title={newLocation}>
              {newLocation}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default ServiceAreaMenu;
