import Link from "next/link";
import DropdownMenus from "./DropdownMenus";
import menuData from "@/AppData/menuData";

const DesktopMenu = () => {
  const { aboutData, serviceAreaData, services } = menuData;

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
          <Link
            className="nav-link"
            href="#"
            title="Automatic Door Supply Services"
          >
            services
          </Link>
          {/* Services menu */}
          <DropdownMenus
            data={services.menus}
            path={services.path}
            extraClass="big_width"
          />
        </li>
        <li className="nav-item custom_dropdown">
          <Link
            className="nav-link"
            href="#"
            title="Automatic Door Supply Service Areas"
          >
            service areas
          </Link>
          {/* Service area menu */}
          <DropdownMenus
            data={serviceAreaData.menus}
            path={serviceAreaData.path}
            extraClass="big_width"
          />
        </li>
        <li className="nav-item">
          <Link
            className="nav-link"
            href="/gallery"
            title="Automatic Door Supply Gallery"
          >
            gallery
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link"
            href="/contact"
            title="Automatic Door Supply Contact"
          >
            contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default DesktopMenu;
