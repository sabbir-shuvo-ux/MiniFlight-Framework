import "@/assets/footer.scss";
import FooterMain from "./FooterMain";
import DesktopStickyFooter from "./DesktopStickyFooter";

const Footer = () => {
  return (
    <>
      <footer className="footer_main">
        <FooterMain />

        {/* <DesktopStickyFooter /> */}
      </footer>
    </>
  );
};

export default Footer;
