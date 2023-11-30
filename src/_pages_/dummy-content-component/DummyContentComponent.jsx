import Faq from "@/components/FaqComponent/Faq";
import TitleSection from "@/components/innerPageComponents/titleSection/TitleSection";
import UnorderedList from "@/components/innerPageComponents/unorderedList/UnorderedList";

const DummyContentComponent = () => {
  const faqData = [
    {
      title:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, impedit?",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum itaque dolore fugit dolor debitis enim quo, ratione omnis maxime tenetur tempora consectetur ipsam dignissimos magni reiciendis cum laboriosam molestias dolores?",
    },
    {
      title:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, impedit?",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum itaque dolore fugit dolor debitis enim quo, ratione omnis maxime tenetur tempora consectetur ipsam dignissimos magni reiciendis cum laboriosam molestias dolores?",
    },
    {
      title:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, impedit?",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum itaque dolore fugit dolor debitis enim quo, ratione omnis maxime tenetur tempora consectetur ipsam dignissimos magni reiciendis cum laboriosam molestias dolores?",
    },
    {
      title:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, impedit?",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum itaque dolore fugit dolor debitis enim quo, ratione omnis maxime tenetur tempora consectetur ipsam dignissimos magni reiciendis cum laboriosam molestias dolores?",
    },
  ];
  return (
    <div>
      <TitleSection
        title={"Title Will Be Here..."}
        paragraph={[
          <>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            consectetur facere alias porro aut, magni quidem delectus incidunt
            numquam eaque fuga quis deserunt. Commodi quidem incidunt debitis
            repellat perspiciatis porro doloribus laborum enim facilis,
            laboriosam excepturi dolorem blanditiis suscipit neque, voluptas
            mollitia aspernatur numquam et? Illo totam eveniet nulla magni.
          </>,
          <>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            consectetur facere alias porro aut, magni quidem delectus incidunt
            numquam eaque fuga quis deserunt. Commodi quidem incidunt debitis
            repellat perspiciatis porro doloribus laborum enim facilis,
            laboriosam excepturi dolorem blanditiis suscipit neque, voluptas
            mollitia aspernatur numquam et? Illo totam eveniet nulla magni.
          </>,
          <>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            consectetur facere alias porro aut, magni quidem delectus incidunt
            numquam eaque fuga quis deserunt. Commodi quidem incidunt debitis
            repellat perspiciatis porro doloribus laborum enim facilis,
            laboriosam excepturi dolorem blanditiis suscipit neque, voluptas
            mollitia aspernatur numquam et? Illo totam eveniet nulla magni.
          </>,
        ]}
      />
      <h2 className="h3">Faq</h2>
      <Faq data={faqData} />

      <UnorderedList
        title={"Unordered List Will Be Here..."}
        titleClasses={"mt-3"}
        data={[
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "Ut enim ad minim veniam, quis nostrud commodo consequat.",
          "Duis aute irure dolor in iatur.",
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa .",
          "adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
          "Duis aute irure dolor in reprehenderit in voluptate velit ",
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officil.",
          "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        ]}
      />
    </div>
  );
};

export default DummyContentComponent;
