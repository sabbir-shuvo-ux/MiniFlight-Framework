import TitleSection from "@/components/innerPageComponents/titleSection/TitleSection";
import UnorderedList from "@/components/innerPageComponents/unorderedList/UnorderedList";
import Link from "next/link";

const DoorDesign = () => {
  return (
    <div>
      <TitleSection
        title={"Door Design"}
        paragraph={[
          <>
            <Link
              className="text-decoration-none"
              href={"/"}
              title="Automatic Door Supply"
            >
              Automatic Door Supply
            </Link>{" "}
            provides professional automatic door design services for a broad
            range of locations, industries, and applications everywhere in the
            New York City area, as well as to locations in Long Island,
            Westchester, New Jersey, and Connecticut. Our trained and
            experienced automatic door technicians can customize high-tech
            entryways for your business, fully customized to match any dimension
            and all of your accessibility needs. Our team conducts all necessary
            measurements and environment evaluations, carrying out a thorough
            design process that matches all of your unique specifications.
            Automatic Door Supply designs doors for all forms of commercial and
            industrial applications, with unique security features as well as
            special functional elements like safety sensors, door closers, and
            keypad entry technology.
          </>,
        ]}
      />

      <TitleSection
        title={
          "How exactly do automatic doors work and what are their main components?"
        }
        paragraph={[
          <>
            {" "}
            Automatic doors work with a set of sensors, motors, and control
            systems. Sensors help to feel movement or approach towards the door,
            making the motor open or close the door. Other key elements of
            automatic doors include motion sensors, safety sensors, obstruction
            sensors, control sensors, and the door opening mechanism, which
            differs in construction based on the type of automatic door.
          </>,
        ]}
      />

      <UnorderedList
        title={
          "What are some of the benefits of commercial automatic door installation?"
        }
        data={[
          "Accessibility enhancement",
          "Energy efficiency (lowers heat or air conditioned air loss)",
          "Modern and attractive appearance",
          "Traffic-flow control",
          "Curb appeal for customers",
        ]}
      />
      <p>
        Can Automatic Door Supply customize automatic doors to match my
        property’s aesthetics? Yes, our team provides a wide variety of
        automatic door design configurations. You can select from a wide range
        of materials, styles, and finishes to ensure that your automatic doors
        will blend into the existing aesthetics of your building.
      </p>

      <UnorderedList
        title={
          "Automatic Door Supply custom-designs a wide range of automatic door types including:"
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

export default DoorDesign;
