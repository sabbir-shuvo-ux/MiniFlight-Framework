import { innerPageSpecialLinks } from "@/AppData/innerPage";
import Link from "next/link";
const SpecialsLinks = () => {
  return (
    <div className="container">
      <div className="row">
        {innerPageSpecialLinks.map((item, index) => {
          const newItem = item.replace(/-/g, " ");

          return (
            <div key={index} className="col-3">
              <Link href={`/${item}`} title={newItem}>
                {newItem}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SpecialsLinks;
