import Image from "next/image";
import GoogleLogo from "../../../public/google.png";
import YelpLogo from "../../../public/yelp.png";

// css
import "@/assets/reviewHome.scss";
import Link from "next/link";
import ReviewSlider from "./ReviewSlider";

const ReviewHome = () => {
  return (
    <section className="review_home_section section_padding">
      <div className="container-fluid custom_fluid">
        <div className="row">
          <div className="col-md-7">
            <h2 className="section_title">REVIEWS</h2>
            <h2 className="review_title">What Our Customers Say...</h2>
          </div>
          <div className="col-md-5">
            <div className="img_wraper d-flex gap-4 align-items-center justify-content-end">
              <Link
                href={"/"}
                className="review_top_img_container position-relative"
              >
                <Image
                  src={GoogleLogo}
                  alt="Automatic Door Supply on Google Reviews"
                  title="Automatic Door Supply on Google Reviews"
                  className="h-auto w-100 object-fit-contain"
                />
              </Link>
              <Link
                href={"/"}
                className="review_top_img_container position-relative"
              >
                <Image
                  src={YelpLogo}
                  alt="Automatic Door Supply on Yelp Reviews"
                  title="Automatic Door Supply on Yelp Reviews"
                  className="h-auto w-100 object-fit-contain"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Review slider */}
        <ReviewSlider />
      </div>
    </section>
  );
};

export default ReviewHome;
