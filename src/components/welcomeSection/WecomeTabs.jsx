"use client";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Image from "next/image";

// image
import WhoWeAreimg from "../../../public/about/adsBanner1.jpg";
import AccreditationImg from "../../../public/about/adsBanner2.jpg";

function WecomeTabs() {
  return (
    <div className="container-fluid custom_fluid">
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={6}>
            <h2 className="section_title">About</h2>
          </Col>
          <Col
            className="d-flex justify-content-md-end custom_tabs_nav mt-4 mt-md-0"
            sm={6}
          >
            <Nav variant="pills" className="align-items-center">
              <Nav.Item>
                <Nav.Link eventKey="first">Who We Are</Nav.Link>
              </Nav.Item>
              |
              <Nav.Item>
                <Nav.Link eventKey="second">Accreditation</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
        <Row className="mt-4 mt-md-5">
          <Col sm={12}>
            <Tab.Content>
              {/* # One # */}
              <Tab.Pane eventKey="first">
                <div className="container-fluid p-0">
                  <div className="row">
                    <div className="col-md-6 d-flex align-items-center">
                      <div className="welcome_section_inner_content">
                        <h2>Why Choose Us?</h2>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse vitae velit sed metus egestas
                          rutrum. Phasellus iaculis purus id varius imperdiet:
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
              </Tab.Pane>
              {/* # Two # */}
              <Tab.Pane eventKey="second">
                {" "}
                <div className="container-fluid p-0">
                  <div className="row">
                    <div className="col-md-6 d-flex align-items-center">
                      <div className="welcome_section_inner_content">
                        <h2>Accreditation</h2>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse vitae velit sed metus egestas
                          rutrum. Phasellus iaculis purus id varius imperdiet:
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
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}

export default WecomeTabs;
