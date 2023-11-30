"use client";
import "@/assets/navbar.scss";
import Image from "next/image";
import Link from "next/link";
import { FaBars } from "react-icons/fa6";
// imgs
import Logo from "../../../public/ads-logo.jpg";
import Navbar from "react-bootstrap/Navbar";

// same level componets
import NavbarActions from "./NavbarActions";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import MobileTopNavbar from "./MobileTopNavbar";
import { useState } from "react";

const NavbarMain = () => {
  const [expanded, setExpanded] = useState(false);

  const handleNavbarToggle = () => {
    setExpanded(!expanded);
  };

  const handleNavbarCollapse = () => {
    setExpanded(false); // Collapse the navbar when a menu item is selected
  };

  return (
    <header className="custom_navbar">
      <MobileTopNavbar />
      <Navbar
        expanded={expanded}
        collapseOnSelect
        expand="lg"
        className="navbar navbar-expand-lg"
      >
        <div className="container-fluid custom_fluid">
          <Link
            className="navbar-brand position-relative navbar_logo"
            href={"/"}
          >
            <Image
              src={Logo}
              className="w-100 h-auto object-fit-cover"
              alt="Automatic Door supply Logo"
              priority
            />
          </Link>

          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="shadow-none"
            onClick={handleNavbarToggle}
          >
            <FaBars size={30} color="white" />
          </Navbar.Toggle>

          {/* desktop view menus */}
          <DesktopMenu />
          {/* mobile version menus */}
          <MobileMenu handleNavbarCollapse={handleNavbarCollapse} />
          {/* Call to action btns */}
          <NavbarActions />
        </div>
      </Navbar>
    </header>
  );
};

export default NavbarMain;
