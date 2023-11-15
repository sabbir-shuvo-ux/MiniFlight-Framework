import { serviceCardData } from "@/AppData/servicesData";
import "@/assets/services.scss";
import Image from "next/image";
import Link from "next/link";

const ServicesSection = () => {
  return (
    <>
      <section className="services_section">
        <div className="container-fluid custom_fluid">
          <div className="row">
            <div className="col-md-12">
              <h2 className="section_title">SERVICES</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="service_content">
                <h2 className="h2 service_title">
                  From Start to Finish, We’ve Got you Covered!
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse vitae velit sed metus egestas rutrum. Phasellus
                  iaculis purus id varius imperdiet.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {serviceCardData.map((service, index) => (
              <div key={index} className="col-md-3 mb-4 mb-md-0">
                <div className="custom_card position-relative">
                  <div className="position-relative">
                    <Image
                      src={service.img}
                      alt={service.title}
                      title={service.title}
                      className="w-100 h-auto"
                    />
                  </div>
                  <div className="inner_service_card">
                    <div className="inner_service_card_content">
                      <div className="img_container position-relative">
                        <Image
                          src={service.icon}
                          alt={service.title}
                          className="w-100 h-auto"
                          title={service.title}
                        />
                      </div>
                      <h4 className="service_card_title">
                        <Link href={"#"} title={service.title}>
                          {service.title}
                        </Link>
                      </h4>
                      <p className="service_card_des">{service.des}</p>
                      <Link className="service_card_btn" href={"/"}>
                        LEARN MORE
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default ServicesSection;
