import { innerPageSpecialLinks } from "@/AppData/innerPage";
import Link from "next/link";
const SpecialsLinks = () => {
  return (
    <div className="specials_links">
      <div className="container">
        <div className="row">
          {innerPageSpecialLinks.map((item, index) => {
            const newItem = item.replace(/-/g, " "); // removed all "-" from string

            return (
              <div key={index} className="col-3">
                <Link
                  className="specials_links_btn"
                  href={`/${item}`}
                  title={newItem}
                >
                  {newItem}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SpecialsLinks;
