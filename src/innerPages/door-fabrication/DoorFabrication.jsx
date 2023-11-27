import Faq from "@/components/FaqComponent/Faq";
import TitleSection from "@/components/innerPageComponents/titleSection/TitleSection";
import UnorderedList from "@/components/innerPageComponents/unorderedList/UnorderedList";
import Link from "next/link";

const DoorFabrication = () => {
  const faqArray = [
    {
      title: "What materials are automatic doors fabricated from?",
      des: "Automatic doors are usually made out of aluminum, stainless steel, and glass - all materials that provide robust durability, are aesthetically attractive and are appropriate for a wide range of environments and applications.",
    },
    {
      title:
        "What sort of customization can Automatic Door Supply perform during automatic door fabrication service?",
      des: "Our excellent automatic door fabrication team can create highly customized automatic doors for all of your needs. Choose from automatic door sizing, finishes, design, and even custom-tailored logos or branding elements to match your property’s unique aesthetic and practical requirements.",
    },
    {
      title:
        "Does Automatic Door Supply provide energy-efficient automatic doors?",
      des: "Absolutely. We provide fabricated automatic doors that are highly energy efficient, utilizing elements like insulated glass and high-tech sealing and weatherproofing techniques to lower heating or cooling loss (lowering your energy consumption and saving you money on your energy bill in turn!)",
    },
  ];

  return (
    <div>
      <TitleSection
        title={"Door Fabricating Service in the Greater New York Area"}
        paragraph={[
          <>
            <Link
              className="text-decoration-none"
              href={"/"}
              title="Automatic Door Supply"
            >
              Automatic Door Supply
            </Link>{" "}
            provides automatic door fabrication and installation service to
            properties of all types throughout the New York City area. First,
            our team will directly consult with you in order to discuss the
            specifics of your product, budget, and design needs. We will then
            provide you with a project proposal - an initial drawing of our door
            design - and work directly with you to ensure that you receive the
            ideal automatic door for your property that matches all necessary
            construction codes and legal accessibility requirements.
          </>,

          <>
            Automatic Door Supply works with the top automatic door and
            automatic door hardware manufacturers in the entire industry. Our
            team provides your enterprise with the highest quality custom
            automatic doors available anywhere, ensuring that door materials and
            door assembly exceed all industry quality standards. Our team
            transports and handles material directly from the factory to your
            location, ensuring that material arrives in optimal condition.
          </>,
        ]}
      />

      <h2 className="h3">Faq</h2>
      <Faq data={faqArray} />

      <UnorderedList
        title="Automatic Door Supply fabricates a wide range of automatic door types
      including, but not limited to:"
        titleClasses="mt-4"
        data={[
          "Sliding Doors",
          "Swinging Doors",
          "Single and Double Swinging Automatic Door Operators and Sensors",
          "Overhead Concealed Sliding Doors",
          "Surface Mount Sliding Doors",
          "Commercial Glass Entry Sliding Doors",
          "ADA-Compliant Automatic Doors",
          "Hurricane Resistant Sliding Doors",
          "Telescoping Automatic Sliding Doors",
          "Automatic Door Sensors",
          "Locking Devices",
          "Automatic Door Push Plates",
          "Automatic Door Transmitters / Receivers",
          "Fire-Rated Automatic Doors",
          "Impact Resistant Automatic Doors",
          "Ballistic Resistant Automatic Doors",
          "Commercial Automatic Door Applications",
          "Heavy-Duty Automatic Doors",
          "Low-Energy Automatic Doors",
          "Revolving Doors",
          "High-Traffic Revolving Doors",
          "Compact Revolving Doors",
          "High Capacity Revolving Doors",
          "Bi-Fold Automatic Doors",
          "Overhead Concealed Automatic Door Closers",
          "Surface-mounted automatic Door Closers",
          "Single Swinging Automatic Doors",
        ]}
      />

      <UnorderedList
        title={
          "Automatic Door Supply installs and services automatic doors and door openers crafted by all leading industry manufacturers, including, but not limited to:"
        }
        data={[
          "Stanley Access Automatic Doors",
          "ASSA ABLOY Automatic Doors",
          "Autoslide Automatic Doors",
          "Horton Doors Automatic Doors",
          "Caesar Door Automatic Doors",
          "Boon Edam Automatic Doors",
          "Doormakaba Automatic Doors",
          "Crane Revolving Doors",
          "Optex Technologies Automatic Doors",
          "And much more!",
        ]}
      />
    </div>
  );
};

export default DoorFabrication;
