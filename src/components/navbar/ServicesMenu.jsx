import Link from "next/link";
import { services } from "@/AppData/menuData";

const ServicesMenu = ({ isMobile }) => {
  return (
    <ul className={isMobile ? "dropdown-menu" : "dropdown_menu big_with"}>
      {services.map((service, index) => {
        const newService = service.replace(/-/g, " ");
        return (
          <li key={index} className="menu_item">
            <Link href={`/${service}`} title={newService}>
              {newService}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default ServicesMenu;
