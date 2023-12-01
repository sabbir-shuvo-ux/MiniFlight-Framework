import "@/assets/galleryPage.scss";
import GalleryComponent from "@/components/gallery/GalleryComponent";

const Gallery = () => {
  return (
    <section className="galleryPage">
      <div className="container">
        <div className="row">
          <div className="col-md-10 text-center mx-auto">
            <h2 className="text-center">Company Name Portfolio</h2>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              ipsa animi beatae velit, magni deserunt ab commodi veniam non
              earum! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Possimus accusantium delectus qui quasi hic ratione, quaerat
              officiis dolorem. Sit, veritatis.
            </p>
          </div>
        </div>
        <GalleryComponent />
      </div>
    </section>
  );
};

export default Gallery;
