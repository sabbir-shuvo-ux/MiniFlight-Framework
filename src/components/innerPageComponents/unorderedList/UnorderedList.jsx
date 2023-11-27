/*
# TYPES # 
- data = Array
- title = String
- titleClasses = String
*/

import { IoCheckmarkOutline } from "react-icons/io5";

const UnorderedList = ({ data, title, titleClasses }) => {
  return (
    <>
      <h2 className={`h3 ${titleClasses ? titleClasses : null}`}>{title}</h2>
      <ul className="list-unstyled bulletList">
        {data.map((text, index) => (
          <li key={index}>
            <IoCheckmarkOutline size={22} className="me-2" />
            {text}
          </li>
        ))}
      </ul>
    </>
  );
};

export default UnorderedList;
