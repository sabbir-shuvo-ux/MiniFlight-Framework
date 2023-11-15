import "@/assets/applicationsSection.scss";
import Image from "next/image";

// image
import FaqImg from "../../../public/faq/faq-img.jpg";
import FaqHome from "./FaqHome";

const ApplicationsSection = () => {
  return (
    <section className="application_section section_padding">
      <div className="container-fluid custom_fluid">
        <div className="row">
          <div className="col-md-12">
            <h2 className="section_title">APPLICATIONS</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mb-5 mb-md-0 d-flex flex-column justify-content-center">
            <div className="faq_header">
              <h2 className="faq_header_title">Door Systems</h2>
              <h3 className="faq_header_subtitle">for Every Application</h3>
            </div>
            <FaqHome />
          </div>
          <div className="col-md-6">
            <div className="position-relative">
              <Image
                src={FaqImg}
                className="w-100 h-auto"
                alt="Automatic Door Supply Door"
                title="Automatic Door Supply Door"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationsSection;
