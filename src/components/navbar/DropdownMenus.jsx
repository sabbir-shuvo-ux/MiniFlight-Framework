import Link from "next/link";

const AboutMenuData = ({ isMobile, data, path, extraClass }) => {
  return (
    <ul
      className={
        isMobile ? "mobile_dropdown_container" : `dropdown_menu ${extraClass}`
      }
    >
      {data.map((item, index) => {
        const newItem = item.replace(/-/g, " ");
        return (
          <li key={index} className="menu_item">
            <Link
              href={path ? `/${path}/${item}` : `/${item}`}
              title={`${newItem}`}
            >
              {newItem}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default AboutMenuData;
