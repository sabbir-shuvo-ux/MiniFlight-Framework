import Image from "next/image";
import React from "react";

// css
import "@/assets/wecomeSection.scss";

// image
import WhoWeAreimg from "../../../public/about/adsBanner1.jpg";
import AccreditationImg from "../../../public/about/adsBanner2.jpg";

const WelcomeSection = () => {
  return (
    <section className="wecome_section section_padding">
      <div className="container-fluid custom_fluid">
        <div className="row">
          <div className="col-md-6">
            <h2 className="section_title">About</h2>
          </div>
          <div className="col-md-6">
            <ul
              className="nav nav-pills mb-3 justify-content-end custom_tabs_nav"
              id="pills-tab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-home"
                  type="button"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                >
                  Who We Are
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                >
                  Accreditation
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
            tabIndex="0"
          >
            <div className="container-fluid p-0">
              <div className="row">
                <div className="col-md-6 d-flex align-items-center">
                  <div className="welcome_section_inner_content">
                    <h2>Why Choose Us?</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse vitae velit sed metus egestas rutrum.
                      Phasellus iaculis purus id varius imperdiet:
                    </p>
                    <ul>
                      <li> Duis non laoreet est, in viverra diam</li>
                      <li>Nam rutrum tortor eu cursus iaculis</li>
                      <li>Sed odio neque, molestie sed mi non sodales</li>
                    </ul>
                    <p>
                      Imperdiet turpis. Interdum et malesuada fames ac ante
                      ipsum primis in faucibus.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="w-100 position-relative">
                    <Image
                      src={WhoWeAreimg}
                      className="w-100 h-auto"
                      alt="Why Choose Us"
                      sizes="(min-width: 1600px) 42.5vw, (min-width: 780px) calc(50vw - 24px), calc(100vw - 24px)"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
            tabIndex="0"
          >
            <div className="container-fluid p-0">
              <div className="row">
                <div className="col-md-6 d-flex align-items-center">
                  <div className="welcome_section_inner_content">
                    <h2>Accreditation</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse vitae velit sed metus egestas rutrum.
                      Phasellus iaculis purus id varius imperdiet:
                    </p>
                    <ul>
                      <li> Duis non laoreet est, in viverra diam</li>
                      <li>Nam rutrum tortor eu cursus iaculis</li>
                      <li>Sed odio neque, molestie sed mi non sodales</li>
                    </ul>
                    <p>
                      Imperdiet turpis. Interdum et malesuada fames ac ante
                      ipsum primis in faucibus.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="w-100 position-relative">
                    <Image
                      src={AccreditationImg}
                      className="w-100 h-auto"
                      sizes="(min-width: 1600px) 42.5vw, (min-width: 780px) calc(50vw - 24px), calc(100vw - 24px)"
                      alt="Accreditation"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
