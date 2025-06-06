import Link from "next/link";
import DropdownMenus from "./DropdownMenus";
import menuData from "@/AppData/menuData";

const DesktopMenu = () => {
  const { aboutData, services } = menuData;

  return (
    <div className="desktop_menus">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0 desktop_navbar">
        <li className="nav-item custom_dropdown">
          <Link className="nav-link" href={"#"} title="About Our Company">
            about
          </Link>

          {/* About data */}

          <DropdownMenus data={aboutData.menus} extraClass="small_width" />
        </li>
        <li className="nav-item custom_dropdown">
          <Link className="nav-link" href="#" title="Company Name Services">
            services
          </Link>
          {/* Services menu */}
          <DropdownMenus
            data={services.menus}
            path={services.path}
            extraClass="big_width"
          />
        </li>

        <li className="nav-item">
          <Link
            className="nav-link"
            href="/gallery"
            title="Company Name Gallery"
          >
            gallery
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link"
            href="/contact"
            title="Company Name Contact"
          >
            contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default DesktopMenu;
