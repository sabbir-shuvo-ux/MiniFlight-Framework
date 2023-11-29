import Faq from "@/components/FaqComponent/Faq";
import TitleSection from "@/components/innerPageComponents/titleSection/TitleSection";
import UnorderedList from "@/components/innerPageComponents/unorderedList/UnorderedList";
import Link from "next/link";

const HospitalAutomaticDoors = () => {
  const faqData = [
    {
      title: "What are the benefits of Hospital automatic doors?",
      des: "Automatic doors in hospitals help increase the accessibility of your healthcare facility, make traffic flow much easier, and lower the risk of germ contamination. Staff, patients, and visitors can easily enter and exit your medical facility without making physical contact with the door, preventing germ transmission.",
    },
    {
      title:
        "Do you customize your automatic doors according to specific relevant hospital and healthcare facility needs?",
      des: "Yes. We provide highly customizable hospital automatic doors that are customized to the unique needs of your healthcare facility. We provide custom-tailored hospital automatic doors, finishes, materials, access control, accessories, and even sizing.",
    },
    {
      title:
        "Are your hospital's automatic doors compliant with healthcare regulations?",
      des: "Yes, our hospital automatic doors meet all necessary healthcare regulations. We ensure that our automatic doors comply with all healthcare requirements for safety, hygiene, and easy accessibility.",
    },
    {
      title:
        "Can your hospital automatic doors be integrated with access control systems and other security features?",
      des: "Yes. Our hospital automatic doors can be easily integrated with all forms of access control systems, alarms, and security cameras, enhancing security capabilities for hospital administrators and security staff.",
    },
  ];
  return (
    <div>
      <h2 className="h3">
        Hospital Automatic Doors for the Greater New York Area
      </h2>
      <TitleSection
        title={"Professional Medical Facility Automatic Door Installation"}
        paragraph={[
          <>
            <Link
              className="text-decoration-none"
              title="Automatic Door Supply"
              href={"/"}
            >
              Automatic Door Supply
            </Link>{" "}
            provides and installs a broad selection of healthcare door and
            entrance solutions, maximizing your medical enterpise’s efficiency
            and improving patient experience. Hospitals and other medical
            facilities have unique access needs - and Automatic Door Supply
            provides specialty doors that match all unique hospital needs
            including self-closing smoke-rated ICU door systems, and features
            like opaque glass or extra large openings for moving beds and
            equipment.
          </>,
          <>
            Automatic Door Supply’s skilled automatic door installation team
            provides hospital automatic door installations services of the
            highest level of professionalism, working directly with our
            healthcare industry clients to ensure that all practical,
            safety-based, and budgetary needs of your hospital are matched with
            a selection of high-quality, durable, efficient, and affordable
            hospital automatic doors, installed in a courteous and efficient
            manner. Contact Automatic Door Supply today for rapid solutions for
            all of your hospital automatic door installation needs in New York
            City, as well as in Long Island, Westchester, New Jersey, and
            Connecticut
          </>,
        ]}
      />
      <TitleSection
        title={"Hospital Automatic Door Systems"}
        paragraph={[
          "With the crucial work being performed at hospitals, medical facilities, and healthcare settings, it’s essential for safety that all automatic doors are functioning properly. Hospital staff need to be able to easily maneuver through hospital hallways, rooms, and other sensitive areas easily and with no obstructions - especially during emergencies. Automatic Door Supply delivers and installs high-quality, durable automatic doors that help maintain efficient traffic-flow within your healthcare facility.",
        ]}
      />
      <h2 className="h3">Faq</h2>
      <Faq data={faqData} />

      <UnorderedList
        titleClasses={"mt-3"}
        title={"Automatic Hospital Door Types May Include:"}
        data={[
          <>
            <strong>Revolving Doors</strong> - Proper speed and diameter to
            accommodate gurneys, wheelchairs, and walkers
          </>,
          <>
            <strong>Sliding Doors</strong> - Durable, high-traffic automatic
            sliding doors that can meet the demands of 24/7 medical facilities
          </>,
          <>
            <strong>Swinging and Folding Doors</strong> - ADA-compliant handicap
            accommodating door openers and automatic access technology for
            high-traffic areas. It’s possible to install swing door operators on
            brand new door systems or on existing door systems. Flexible,
            versatile folding doors ideal for both large openings and narrow
            corridors. Door design options may include mini-blinds and opaque
            glass.
          </>,
          <>
            <strong>Patient Room Doors</strong> - Door systems that allow doors
            to be left fully or partially open. Flexible options for
            customizable space usage.
          </>,
          <>
            <strong>Pressure Room Doors</strong> - Hospitals have special air
            filter requirements for positive, negative, and combination pressure
            isolation rooms, including for operating rooms and isolation
            infection rooms. Our atmospheric automatic sliding doors are meant
            to meet special clean room standards, including for laboratories and
            pharmacies.
          </>,
          <>
            <strong>Critical Care and ICU Automatic Door Systems</strong> - ICU
            environments require that patients are fully visible at all times
            through glass doors that can swing out of the way in an emergency
            situation. Telescopic ICU doors, touchless ICU doors, folding ICU
            doors, and swinging ICU doors are available.
          </>,
        ]}
      />

      <UnorderedList
        title={"Automatic Hospital Door Systems Applications Include:"}
        data={[
          "Main Hospital Entrances",
          "Hospital corridors",
          "Patient Rooms",
          "Emergency Rooms",
          "ICUs",
          "Pharmacies",
          "Surgery Rooms",
          "Restrooms",
          "High Security Areas",
          "Procedure Rooms",
          "And much more!",
        ]}
      />
      <UnorderedList
        title={
          "Automatic Door Supply installs and services a wide range of hospital automatic door types including, but not limited to:"
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

export default HospitalAutomaticDoors;
