"use client";
import Link from "next/link";
import DropdownMenus from "./DropdownMenus";
import { NavDropdown, Navbar } from "react-bootstrap";
import menuData from "@/AppData/menuData";

const MobileMenu = () => {
  const { aboutData, serviceAreaData, services } = menuData;
  return (
    <Navbar.Collapse id="mobileVersionNavbar" className="mobile_menus">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <NavDropdown
          title="About"
          id="basic-nav-dropdown"
          className="custom_mobile_dropdown"
        >
          {/* Mobile About menus */}
          <DropdownMenus isMobile={true} data={aboutData.menus} />
        </NavDropdown>

        <NavDropdown
          title="Services"
          id="basic-nav-dropdown"
          className="custom_mobile_dropdown"
        >
          {/* Mobile Service menus */}
          <DropdownMenus
            isMobile={true}
            data={services.menus}
            path={services.path}
          />
        </NavDropdown>

        <NavDropdown
          title="Service Areas"
          id="basic-nav-dropdown"
          className="custom_mobile_dropdown"
        >
          {/* Mobile Service menus */}
          <DropdownMenus
            isMobile={true}
            data={serviceAreaData.menus}
            path={serviceAreaData.path}
          />
        </NavDropdown>
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
    </Navbar.Collapse>
  );
};

export default MobileMenu;
