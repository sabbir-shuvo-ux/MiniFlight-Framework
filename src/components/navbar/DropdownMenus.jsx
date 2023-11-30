import Link from "next/link";

const DropdownMenus = ({
  isMobile,
  data,
  path,
  extraClass,
  handleNavbarCollapse,
}) => {
  return (
    <ul
      className={
        isMobile ? "mobile_dropdown_container" : `dropdown_menu ${extraClass}`
      }
    >
      {data.map((item, index) => {
        const newItem = item.replace(/-/g, " ");
        return (
          <li onClick={handleNavbarCollapse} key={index} className="menu_item">
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

export default DropdownMenus;
