import InnerPageHeaderTopPart from "./InnerPageHeaderTopPart";
import SpecialsLinks from "./SpecialsLinks";

const InnerPageHeader = () => {
  return (
    <section className="inner_page_header">
      {/* header top part with bg and page name */}
      <InnerPageHeaderTopPart />
      {/* specials links bottom of the backgound part */}
      <SpecialsLinks />
    </section>
  );
};

export default InnerPageHeader;
