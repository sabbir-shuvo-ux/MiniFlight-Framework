import Faq from "@/components/FaqComponent/Faq";
import TitleSection from "@/components/innerPageComponents/titleSection/TitleSection";
import UnorderedList from "@/components/innerPageComponents/unorderedList/UnorderedList";
import Link from "next/link";

const AutomaticDoorsInstallation = () => {
  const faqData = [
    {
      title:
        "What are the benefits of Automatic Door Supply’s professional automatic door installation?",
      des: "Our professional automatic door installation team maintains full reliability and works according to the strictest industry standard. Our professional team of automatic door technicians have the broad experience necessary to effectively install your automatic doors, enhancing their longevity and safety.",
    },
    {
      title:
        "Do you install automatic doors in existing properties and structures?",
      des: "Yes! We can retrofit automatic doors into existing structures, and even attach automatic door openers and other automatic door power accessories to existing doors in your property’s architecture.",
    },
    {
      title:
        "Are there specific needs for electrical connections during automatic door installation?",
      des: "Our automatic door installation process includes all aspects of necessary electric work. We only install automatic doors with the assurance that your property’s electric system can handle the doors. We complete all necessary wiring and electrical connections in an effective, efficient, and highly professional manner.",
    },
    {
      title:
        "Do you provide post-installation automatic door support and maintenance?",
      des: "Yes! Our team remains on hand to provide you with professional automatic door maintenance service. Simply give us a call for rapid assistance with your automatic door. We always strive to ensure that your automatic door investment stays in top condition for as long as possible.",
    },
  ];
  return (
    <div>
      <TitleSection
        title={
          "Automatic Door Installation Service in the Greater New York Area"
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
            installs a broad variety of automatic doors for different
            applications and industries throughout the New York City area, as
            well as to locations in Long Island, Westchester, New Jersey, and
            Connecticut. Our expert automatic door installation technicians work
            with all forms of automatic doors including swing doors, slide
            doors, full glass doors, ADA-compliant doors, and much more. Our
            wide range of state-of-the-art, durable, and attractive automatic
            doors are ideal for all forms of commercial, industrial, retail, and
            healthcare applications. With automatic doors, customers with all
            types of physical capabilities can easily enter your facilities -
            and there won’t be any need for direct door contact which reduces
            the chances of germ transmission.
          </>,
          <>
            Automatic Door Supply’s highly experienced automatic door
            installation experts work directly with our clients to ensure that
            all of your automatic door and accessibility needs are met. We
            custom-tailor our automatic door installation services to meet your
            unique accessibility, security, and design needs - providing
            perfectly measured automatic doors in a wide range of styles
            including sliding doors, swinging doors, revolving doors, and much
            more. Automatic Door Supply additionally installs a broad range of
            automatic door openers and automatic door controllers from all
            leading brands. Contact Automatic Door Supply today for rapid
            solutions for all of your automatic door installation needs in New
            York City, and the Greater New York area - including Westchester,
            Long Island, New Jersey, and Connecticut.
          </>,
        ]}
      />

      <h2 className="h3">Faq</h2>
      <Faq data={faqData} />

      <UnorderedList
        title={
          "Automatic Door Supply installs and services a wide range of automatic door types including, but not limited to:"
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
        titleClasses={"pt-3"}
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

export default AutomaticDoorsInstallation;
