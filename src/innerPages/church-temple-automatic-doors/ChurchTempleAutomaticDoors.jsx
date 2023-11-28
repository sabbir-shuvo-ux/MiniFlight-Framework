import Faq from "@/components/FaqComponent/Faq";
import TitleSection from "@/components/innerPageComponents/titleSection/TitleSection";
import UnorderedList from "@/components/innerPageComponents/unorderedList/UnorderedList";
import Link from "next/link";

const ChurchTempleAutomaticDoors = () => {
  const faqData = [
    {
      title:
        "What are the benefits of installing automatic doors in churches, temples, and other places of worship?",
      des: "Automatic doors in places of worship provide benefits, including increased accessibility for all worshipers and parishioners, energy-efficiency, and a welcoming and easily accessible entrance.",
    },
    {
      title:
        "Can my church or temple automatic doors be designed to match my building's architecture?",
      des: "Absolutely. Our church and temple automatic doors are customizable to match the existing design and architectural style of your place of worship. You can choose from a wide range of finishes, materials, and designs to match existing structures.",
    },
    {
      title:
        "How can automatic doors increase the safety in my religious institution?",
      des: "We understand the importance of safety in your religious institution. Our professional church and temple automatic doors have safety sensors that detect obstructions and prevent closing on somebody standing in the doorway. Our automatic doors can be impact-proof and comply with all professional safety regulations to protect the well-being of all visitors to your place of worship.",
    },
  ];
  return (
    <div>
      <TitleSection
        title={
          "Church, Temple, Mosque, and Place of Worship Automatic Door Installation in the Greater New York Area"
        }
        paragraph={[
          <>
            <Link
              className="text-decoration-none"
              title="Automatic Door Supply"
              href={"/"}
            >
              Automatic Door Supply
            </Link>{" "}
            installs automatic doors at churches, temples, mosques, and all
            religious institutions in New York City, as well as to locations in
            Long Island, Westchester, New Jersey, and Connecticut. Our highly
            knowledgeable and experienced automatic door technicians work
            directly with you to determine the ideal automatic door solution to
            meet the traffic flow, security, and accessibility needs of your
            religious institution.
          </>,
          <>
            We understand the important value of security for your religious
            institution, and provide a range of high-quality, durable
            fire-rated, impact-resistant, and ballistic-resistant automatic
            doors. Our automatic doors and automatic door openers are created
            according to the highest standards - providing robust security when
            your institution is closed. Our automatic doors are highly-durable
            and built-to-last, providing your religious institution with years
            of efficient entrance and accessibility.
          </>,
        ]}
      />

      <h2 className="h3">Faq</h2>
      <Faq data={faqData} />

      <UnorderedList
        title={
          "Automatic Door Supply installs and services a wide range of church, temple, and place of worship automatic door types including, but not limited to:"
        }
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

export default ChurchTempleAutomaticDoors;
