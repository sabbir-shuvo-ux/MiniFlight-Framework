import menuData from "@/AppData/menuData";
import Link from "next/link";

const AboutMenuData = ({ isMobile }) => {
  const { aboutData } = menuData;
  const { menus, path } = aboutData;
  return (
    <ul className={isMobile ? "dropdown-menu" : "dropdown_menu small_width"}>
      {menus.map((about, index) => {
        const newAbout = about.replace(/-/g, " ");
        return (
          <li key={index} className="menu_item">
            <Link href={`/${about}`} title={`${newAbout}`}>
              {newAbout}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default AboutMenuData;
