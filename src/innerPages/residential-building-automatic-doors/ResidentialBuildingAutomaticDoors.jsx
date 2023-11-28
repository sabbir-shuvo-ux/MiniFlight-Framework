import Faq from "@/components/FaqComponent/Faq";
import TitleSection from "@/components/innerPageComponents/titleSection/TitleSection";
import UnorderedList from "@/components/innerPageComponents/unorderedList/UnorderedList";
import Link from "next/link";
import React from "react";

const ResidentialBuildingAutomaticDoors = () => {
  const faqData = [
    {
      title:
        "What are some of the advantages of installing automatic doors in residential buildings or complexes?",
      des: "Installing automatic doors in residential buildings can drastically increase the convenience and accessibility for all residents and building employees. Automatic doors are also energy-efficient and can lower the amount of loss of heated or cooled air, making your interiors more comfortable and also saving you money on energy costs.",
    },
    {
      title:
        "Can you customize residential building automatic doors according to the architectural style or aesthetic of my building?",
      des: "Yes, we provide custom-tailored residential building automatic doors and design options. You can select residential automatic doors made from a wide range of materials, styles, and finishes, even including logos or other branding motifs.",
    },
    {
      title: "Are residential building automatic doors safe for families?",
      des: "Yes, we prioritize safety in all of our automatic doors. Our residential building automatic doors have a wide range of safety features, including obstruction sensors. Our residential building automatic doors meet the strictest safety standards to ensure the safety of all tenants.",
    },
  ];
  return (
    <div>
      <TitleSection
        title={
          "Residential Building Automatic Door Installation in the Greater New York Area"
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
            installs automatic doors at residential buildings throughout the New
            York City area, as well as to locations in Long Island, Westchester,
            New Jersey, and Connecticut. Automatic Door Supply can help improve
            the experience of residents at your apartment building, providing
            convenience by automatically opening when individuals approach with
            hands-full and saves you energy costs with sensors that
            automatically close doors (preventing heat and air conditioning from
            escaping). Our residential automatic doors additionally provide
            hygienic control, preventing the spread of germs associated with
            manual door handles - as well as providing optimal accessibility for
            any disabled persons or the elderly.
          </>,
        ]}
      />
      <h2 className="h3">Faq</h2>
      <Faq data={faqData} />
      <h2 className="h3 mt-3">
        Automatic Door Supply installs a broad range of residential automatic
        doors at New York City properties, including:
      </h2>
      <h5 className="py-3">Residential Automatic Sliding Doors-</h5>
      <p>
        Two way doors, directional doors, single sliding, and balanced sliding
        doors. Features include:
      </p>
      <UnorderedList
        data={[
          "Easy installation with no need to update existing door structure",
          "Attractive appearance",
          "Modern aesthetic",
          "Compact sizing",
          "Easy installation of automatic door openers - sensor door openers, remote door openers, and push button door openers",
          "Silent operation",
          "Door mode switching functions",
          "Durable and long-lasting automatic doors",
          "Hassle-free, easy access",
        ]}
      />
      <h5>Residential Automatic Swing Doors-</h5>
      <p>
        Directional doors, ideal for narrow passages. Automatic residential
        single swing door openers are installed alongside the door, overhead or
        surface-mounted (as well as with sensor systems, remote controls, push
        button controls, and safety systems). Features include:
      </p>
      <UnorderedList
        data={[
          "Ideal for Push to Open Door Operation",
          "Both automatic and manual control modes",
          "Durable and long-lasting automatic swing doors",
          "Silent operation",
          "Barrier-free access",
          "Ideal for all weather conditions",
        ]}
      />

      <UnorderedList
        title={
          "Automatic Door Supply installs and services a wide range of residential building automatic door types including, but not limited to:"
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

export default ResidentialBuildingAutomaticDoors;
