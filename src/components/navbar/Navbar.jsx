import "@/assets/navbar.scss";
import Image from "next/image";
import Link from "next/link";
import { FaBars } from "react-icons/fa6";
// imgs
import Logo from "../../../public/ads-logo.jpg";

// same level componets
import NavbarActions from "./NavbarActions";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import MobileTopNavbar from "./MobileTopNavbar";

const Navbar = () => {
  return (
    <header className="custom_navbar">
      <MobileTopNavbar />
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid custom_fluid">
          <Link
            className="navbar-brand position-relative navbar_logo"
            href={"/"}
          >
            <Image
              src={Logo}
              className="w-100 h-auto object-fit-cover"
              alt="Automatic Door supply Logo"
            />
          </Link>
          <button
            className="navbar-toggler shadow-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mobileVersionNavbar"
            aria-controls="mobileVersionNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FaBars size={30} color="white" />
          </button>

          {/* desktop view menus */}
          <DesktopMenu />
          {/* mobile version menus */}
          <MobileMenu />
          {/* Call to action btns */}
          <NavbarActions />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
