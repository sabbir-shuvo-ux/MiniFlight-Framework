import Image from "next/image";
import BestPrice from "../../../public/price-guarantee.png";
import BestChoice from "../../../public/best-choice.png";
import CertifiteService from "../../../public/certified-service.png";
import reviewUSGoogle from "../../../public/review-us-on-google.png";
import googleReview from "../../../public/google-review.png";

import { socialIcons } from "@/AppData/socialIcons";

const DesktopStickyFooter = () => {
  return (
    <div className="fixed-bottom sticky_desktop_footer">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="seals_wraper">
              <div className="sticky_footer_img_container d-flex align-items-center h-100 justify-content-center gap-4">
                {/* Selas imgs */}
                <div className="seals d-flex align-items-center gap-3">
                  <Image
                    src={BestPrice}
                    alt="Company Name Best Price"
                    height={150}
                    width={200}
                  />
                  <a href="#" title="">
                    <Image
                      src={BestChoice}
                      alt="Company Name Best Choice"
                      height={150}
                      width={166}
                    />
                  </a>
                  <a href="#" title="Company Name Certifite Service">
                    <Image
                      src={CertifiteService}
                      alt="best price"
                      height={150}
                      width={144}
                    />
                  </a>
                </div>
                {/* Google reviews imgs */}
                <div className="google_imgs d-flex gap-3 align-items-center">
                  <a
                    href="#"
                    target="_blank"
                    title="Reviews Us on Google"
                    className="position-relative d-inline-flex"
                  >
                    <Image src={reviewUSGoogle} alt="Google review" />
                  </a>

                  <a
                    href="#"
                    target="_blank"
                    title="Company Name on Google Reviews"
                    className="position-relative d-inline-flex"
                  >
                    <Image
                      src={googleReview}
                      alt="Company Name on Google Reviews"
                    />
                  </a>
                </div>
                {/* socialMediaIcons */}
                <div className="socials_links">
                  <ul className="list-unstyled">
                    {socialIcons.map((item, index) => (
                      <li key={index}>
                        <a href={item.link} target="_blank" title={item.title}>
                          {item.icon}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopStickyFooter;
