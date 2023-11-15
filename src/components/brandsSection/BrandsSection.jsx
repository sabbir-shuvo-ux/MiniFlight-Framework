import BrandSlider from "./BrandSlider";
import "@/assets/brandSection.scss";
const BrandsSection = () => {
  return (
    <section className="brand_section py-5">
      <div className="container-fluid custom_fluid">
        <BrandSlider />
      </div>
    </section>
  );
};

export default BrandsSection;
