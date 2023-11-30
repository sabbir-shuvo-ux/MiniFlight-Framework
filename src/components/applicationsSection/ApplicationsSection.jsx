import "@/assets/applicationsSection.scss";
import Image from "next/image";

// image
import FaqImg from "../../../public/dummy/banner1-small.jpg";
import Faq from "../FaqComponent/Faq";
import { faqHomeData } from "@/AppData/faqHomeData";

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
            {/* faq */}
            <Faq data={faqHomeData} isHome={true} />
          </div>
          <div className="col-md-6">
            <div className="position-relative">
              <Image
                src={FaqImg}
                className="w-100 h-auto"
                sizes="(min-width: 1600px) 42.5vw, (min-width: 780px) calc(50vw - 24px), calc(100vw - 24px)"
                alt="application img"
                title="application img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationsSection;
