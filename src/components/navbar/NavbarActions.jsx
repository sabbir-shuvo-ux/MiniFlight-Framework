import { PHONE_NUMBER } from "@/AppData/appConfig";

const NavbarActions = () => {
  return (
    <div className="actions_btns large_screen">
      <div className="phone_number">
        <span className="phone_number_small_text">CALL TOLL-FREE</span>
        <a
          className="phone_number_main"
          href={`tel:${PHONE_NUMBER}`}
          title="Call Automatic Door Supply Toll Free"
        >
          {PHONE_NUMBER}
        </a>
      </div>
      <button
        href={"/"}
        className="main_btn"
        title="Get Estimate from Automatic Door Supply"
      >
        GET ESTIMATE
      </button>
    </div>
  );
};

export default NavbarActions;
