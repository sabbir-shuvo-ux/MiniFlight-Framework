"use client";
import Link from "next/link";
import DropdownMenus from "./DropdownMenus";
import { NavDropdown, Navbar } from "react-bootstrap";
import menuData from "@/AppData/menuData";

const MobileMenu = ({ handleNavbarCollapse }) => {
  const { aboutData, services } = menuData;
  return (
    <Navbar.Collapse id="mobileVersionNavbar" className="mobile_menus">
      <ul
        className="navbar-nav me-auto mb-2 mb-lg-0"
        onSelect={handleNavbarCollapse}
      >
        <NavDropdown
          title="About"
          id="basic-nav-dropdown"
          className="custom_mobile_dropdown"
        >
          {/* Mobile About menus */}
          <DropdownMenus
            handleNavbarCollapse={handleNavbarCollapse}
            isMobile={true}
            data={aboutData.menus}
          />
        </NavDropdown>

        <NavDropdown
          title="Services"
          id="basic-nav-dropdown"
          className="custom_mobile_dropdown"
        >
          {/* Mobile Service menus */}
          <DropdownMenus
            handleNavbarCollapse={handleNavbarCollapse}
            isMobile={true}
            data={services.menus}
            path={services.path}
          />
        </NavDropdown>

        <li className="nav-item" onClick={handleNavbarCollapse}>
          <Link
            className="nav-link"
            href="/gallery"
            title="Company Name Gallery"
          >
            gallery
          </Link>
        </li>
        <li className="nav-item" onClick={handleNavbarCollapse}>
          <Link
            className="nav-link"
            href="/contact"
            title="Company Name Contact"
          >
            contact
          </Link>
        </li>
      </ul>
    </Navbar.Collapse>
  );
};

export default MobileMenu;
