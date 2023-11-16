import Link from "next/link";
import ServicesMenu from "./ServicesMenu";
import ServiceAreaMenu from "./ServiceAreaMenu";
import AboutMenuData from "./AboutMenuData";

const DesktopMenu = () => {
  return (
    <div className="desktop_menus">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0 desktop_navbar">
        <li className="nav-item custom_dropdown">
          <Link className="nav-link" href={"#"} title="About Our Company">
            about
          </Link>

          {/* About data */}
          <AboutMenuData />
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
          <ServicesMenu />
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
          <ServiceAreaMenu />
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
