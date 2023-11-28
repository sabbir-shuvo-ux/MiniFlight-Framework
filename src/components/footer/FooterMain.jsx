import Image from "next/image";
import Link from "next/link";

import { PHONE_NUMBER } from "@/AppData/appConfig";
// imgs
import Logo from "../../../public/ads-logo.jpg";
import OraikoLogo from "../../../public/logo-oraiko.png";
import PopUpBtn from "./PopUpBtn";

const FooterMain = () => {
  const serviceAreas = [
    "nationwide",
    "new-york",
    "new-jersey",
    "connecticut",
    "philadelphia",
  ];
  const footerMenu = [
    "About US",
    "services",
    "service-areas",
    "gallery",
    "contact",
  ];
  return (
    <div className="container-fluid custom_fluid">
      {/* footer top */}
      <div className="row align-items-center">
        <div className="col-md-2">
          <div className="footer_header_left">
            <Link
              href={"/"}
              title="Automatic Door Supply"
              className="position-relative footer_logo d-block"
            >
              <Image
                src={Logo}
                className="w-100 h-auto"
                alt="Automatic Door Supply"
                title="Automatic Door Supply"
              />
            </Link>
          </div>
        </div>
        <div className="col-md-8">
          <div className="middle_line">
            <div className="inner_line"></div>
            <p className="footer_address pt-2">1234 Auto Door Blvd</p>
            <p className="footer_address">City Name, ST, 09876</p>
          </div>
        </div>
        <PopUpBtn />
      </div>
      {/* middle footer */}
      <div className="row mt-4">
        <div className="col-lg-12 col-xl-2">
          <div className="footer_free_call">
            <span>CALL TOLL-FREE</span>
            <a href={`tel:${PHONE_NUMBER}`}>{PHONE_NUMBER}</a>
          </div>
        </div>
        <div className="col-6 col-lg-10 col-xl-6">
          <div className="footer_menus">
            <ul className="menus list-unstyled">
              <li>Service Areas : </li>
              {serviceAreas.map((area, inedx) => {
                const newArea = area.replace(/-/g, " ");
                return (
                  <li key={inedx}>
                    <Link
                      href={`/${area}`}
                      title={newArea}
                      className="footer_link text-capitalize"
                    >
                      {newArea}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="col-6 col-lg-12 col-xl-4">
          <div className="footer_menus">
            <ul className="menus list-unstyled">
              {footerMenu.map((menu, index) => {
                const newMenu = menu.replace(/-/g, " ");
                return (
                  <li key={index}>
                    <Link
                      className="footer_link text-capitalize"
                      href={index === 0 ? "/about-our-company" : `/${menu}`}
                      title={newMenu}
                    >
                      {newMenu}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      {/* copy right section */}
      <div className="row py-5">
        <div className="copy_right_text">
          <p>Copyrights © 2023 Automatic Door Supply. All Rights Reserved.</p>
          <div className="oraiko_logo">
            <p>Web Design & Web Developed by </p>
            <Image
              src={OraikoLogo}
              alt="Oraiko software development company"
              height={16}
              width={85}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterMain;
