import Faq from "@/components/FaqComponent/Faq";
import TitleSection from "@/components/innerPageComponents/titleSection/TitleSection";
import UnorderedList from "@/components/innerPageComponents/unorderedList/UnorderedList";
import Link from "next/link";

const AirportsAutomaticDoors = () => {
  const faqData = [
    {
      title:
        "Can airport automatic doors handle heavy airport passenger and employee traffic?",
      des: "Our airport automatic doors are specially designed to withstand heavy traffic. Our airport automatic doors are highly durable and built for constant operation.",
    },
    {
      title:
        "Do your airport automatic doors meet airport and aviation industry security regulations?",
      des: "Absolutely. All of our airport automatic doors meet the strictest airport security requirements and can be easily integrated with access control systems, alarm systems, motion sensor systems, and security camera systems.",
    },
  ];
  return (
    <div>
      <TitleSection
        title={
          "Airport Automatic Door Installation in the Greater New York Area"
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
            provides professional automatic door installation service for
            airports. Our professional aviation industry automatic doors ensure
            that both travelers and airport staff can swiftly move to ticketing
            areas, baggage claims, frequent-flier lounges, ground transportation
            areas, and to airplane gates in an efficient fashion. We understand
            the unique pedestrian traffic needs that airports have over all
            other locations. Our airport automatic door installation services
            ensure that passengers, staff, employees, and visitors can easily
            flow into, out of, and throughout your aviation facility with
            maximum safety, accessibility, and efficiency. We install a broad
            range of automatic doors for the airport industry including grand
            revolving automatic doors, full-power swing doors, automatic slide
            doors, folding doors, swing doors, and much more.
          </>,
        ]}
      />

      <h2 className="h3">Faq</h2>
      <Faq data={faqData} />

      <UnorderedList
        titleClasses={"mt-3"}
        title={
          "Automatic Door Supply installs airport automatic door types, including, but not limited to:"
        }
        data={[
          <>
            <strong>Revolving Entrance Doors -</strong> Best for heavy traffic
            areas. Provides energy savings. Available in center shaft or center
            core vestibule designs. Provides constant, smooth rotation.
          </>,
          <>
            <strong>Full Power Swing Doors -</strong> Ideal for extremely heavy
            traffic. Highly durable. Available in many different setups and
            configurations including concealed overhead door openers and surface
            applied mounting. Also available in inswing, outswing, and parallel
            inswing layouts.
          </>,
          <>
            <strong>Automatic Slide Doors -</strong> Ideal for high-traffic
            areas. Heavy-duty and highly durable. Quietly operating.
          </>,
          <>
            <strong>Secured Exit Lanes -</strong> Ideal for single-directional
            traffic between different security zones. Ideal for airport exit
            lanes. Provides a solid barrier to prevent any unauthorized entry.
          </>,
          <>
            <strong>And much more!</strong>
          </>,
        ]}
      />
      <UnorderedList
        title={
          "Automatic Door Supply installs and services a wide range of airport automatic door types including, but not limited to:"
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
          " Automatic Door Supply installs and services automatic doors and door openers crafted by all leading industry manufacturers, including, but not limited to:"
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

export default AirportsAutomaticDoors;
