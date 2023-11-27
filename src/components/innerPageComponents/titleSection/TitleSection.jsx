/*
# TYPES # 
- paragraph = Array
- title = String
*/

const TitleSection = ({ title, paragraph = [] }) => {
  return (
    <>
      <h2 className="h3">{title}</h2>
      {paragraph?.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </>
  );
};

export default TitleSection;
