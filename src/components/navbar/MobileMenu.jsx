import Link from "next/link";
import ServicesMenu from "./ServicesMenu";
import ServiceAreaMenu from "./ServiceAreaMenu";
import AboutMenuData from "./AboutMenuData";

const MobileMenu = () => {
  return (
    <div
      className="collapse navbar-collapse mobile_menus"
      id="mobileVersionNavbar"
    >
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item dropdown custom_mobile_dropdown">
          <Link
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            title="About Our Company"
          >
            about
          </Link>
          {/* Mobile Service menus */}
          <AboutMenuData isMobile={true} />
        </li>

        <li className="nav-item dropdown custom_mobile_dropdown">
          <Link
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            title="Automatic Door Supply Services"
          >
            services
          </Link>
          {/* Mobile Service menus */}
          <ServicesMenu isMobile={true} />
        </li>

        <li className="nav-item dropdown custom_mobile_dropdown">
          <Link
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            title="Automatic Door Supply Service Areas"
          >
            service areas
          </Link>
          {/* Mobile Service menus */}
          <ServiceAreaMenu isMobile={true} />
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

export default MobileMenu;
