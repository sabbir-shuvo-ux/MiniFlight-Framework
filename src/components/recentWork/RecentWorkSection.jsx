import "@/assets/recentWork.scss";

import recentWorkImg1 from "../../../public/recent-work/recent-work-1.jpg";
import recentWorkImg2 from "../../../public/recent-work/recent-work-2.jpg";
import recentWorkImg3 from "../../../public/recent-work/recent-work-3.jpg";
import recentWorkImg4 from "../../../public/recent-work/recent-work-4.jpg";
import recentWorkImg5 from "../../../public/recent-work/recent-work-5.jpg";
import recentWorkImg6 from "../../../public/recent-work/recent-work-6.jpg";
import recentWorkImg7 from "../../../public/recent-work/recent-work-7.jpg";
import recentWorkImg8 from "../../../public/recent-work/recent-work-8.jpg";
import Image from "next/image";
import Link from "next/link";

const RecentWorkSection = () => {
  const recentWorkData = [
    { title: "HOSPITALS", img: recentWorkImg1 },
    { title: "COMMERCIAL", img: recentWorkImg2 },
    { title: "RESIDENTIAL", img: recentWorkImg3 },
    { title: "AIRPORTS", img: recentWorkImg4 },
    { title: "SCHOOLS", img: recentWorkImg5 },
    { title: "CHURCH/TEMPLE", img: recentWorkImg6 },
    { title: "STOREFRONT", img: recentWorkImg7 },
    { title: "CUSTOM", img: recentWorkImg8 },
  ];
  return (
    <section className="recent_work_section section_padding">
      <div className="container-fluid custom_fluid">
        <div className="row">
          <div className="col-md-12">
            <h2 className="section_title">RECENT WORK</h2>
          </div>
        </div>
        <div className="row">
          {recentWorkData.map((work, index) => (
            <div key={index} className="col-md-3">
              <div className="recent_card position-relative my-3 mx-2">
                <Image
                  src={work.img}
                  alt={work.title}
                  title={work.title}
                  className="w-100 h-auto"
                />
                <h4 className="work_card_title">
                  <Link href={"/"} title={work.title}>
                    {work.title}
                  </Link>
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentWorkSection;
