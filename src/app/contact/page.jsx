import InnerPageHeader from "@/components/innerPageComponents/innerPageHeader/InnerPageHeader";
import "@/assets/innerPage.scss";
import "@/assets/contactPage.scss";
import Breadcamp from "@/components/innerPageComponents/breadcamp/Breadcamp";
import { EMAIL, PHONE_NUMBER } from "@/AppData/appConfig";
import ContactForm from "@/components/contactForm/ContactForm";
import { CiMail } from "react-icons/ci";
const Contact = () => {
  return (
    <section className="contact_page inner_page_main">
      <InnerPageHeader />
      <Breadcamp />

      <div className="container mt-3 pt-3">
        <div className="row">
          <div className="col-md-6">
            <div className="contact_page_left">
              <h3 className="mb-5">
                Automatic Door Supply with main offices located at:
              </h3>
              <div className="container-fluid p-0">
                <div className="row">
                  <div className="col-md-6">
                    <h3>Address:</h3>
                    <h4 className="d-block text-muted h5">In New York:</h4>
                    <h4 className="d-block text-muted h6">......</h4>
                    <h4 className="d-block text-muted h5 mt-4">In New York:</h4>
                    <h4 className="d-block text-muted h6">......</h4>
                    <h4 className="d-block text-muted h6">......</h4>
                  </div>
                  <div className="col-md-6">
                    <a
                      href={`tel:${PHONE_NUMBER}`}
                      title="Call us"
                      className="text-decoration-none h1 d-block text-primary"
                    >
                      {PHONE_NUMBER}
                    </a>
                    <a
                      href={`tel:${PHONE_NUMBER}`}
                      title="Call us"
                      className="text-decoration-none h5 d-block text-primary"
                    >
                      Local: {PHONE_NUMBER}
                    </a>
                    <a
                      className="text-decoration-none text-black h5 my-3 d-block"
                      href={`mailto:${EMAIL}`}
                      title="Mail us"
                    >
                      {EMAIL}
                    </a>
                    <h3>Business Hours:</h3>
                    <h4 className="d-block text-muted h6">......</h4>
                    <h4 className="d-block text-muted h6">......</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-5 mt-md-0">
            <div className="contact_form_head">
              <h2 className="h1">
                <CiMail className="mail_icon" size={45} /> Write To Us
              </h2>
              <p>
                For consulation, suggestions, comments, complaints or estimates
                you may call us directly or contact us via the form below.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
