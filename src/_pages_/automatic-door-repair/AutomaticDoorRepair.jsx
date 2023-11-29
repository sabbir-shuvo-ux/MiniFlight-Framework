import Faq from "@/components/FaqComponent/Faq";
import TitleSection from "@/components/innerPageComponents/titleSection/TitleSection";
import UnorderedList from "@/components/innerPageComponents/unorderedList/UnorderedList";
import Link from "next/link";
import React from "react";

const AutomaticDoorRepair = () => {
  const faqData = [
    {
      title: "What are some signs that my automatic door needs to be repaired?",
      des: "Any signs or signals like strange noises, shirking, movement, slow movement, malfunctioning sensors, or visible damage should indicate that your automatic door requires professional repair service.",
    },
    {
      title:
        "Why is it necessary to rapidly repair all automatic door problems?",
      des: "If you ignore potential issues with your automatic door, you can compromise the security of your property, the safety of your staff and all visitors, and the long-term functionality of your automatic doors. It pays to repair even small automatic door issues, as soon as possible, ensuring that your automatic door will last for much longer.",
    },
    {
      title: "Do you provide emergency automatic door repair service?",
      des: "Yes, we provide 24 seven emergency automatic door repair services. We understand automatic door issues can happen at all times of day or night, which is why we stand ready to rapidly respond to your automatic door issues in order to prevent disruptions to your commercial property.",
    },
    {
      title:
        "How can I prevent automatic door issues after my automatic door is repaired?",
      des: "It’s necessary to provide regular maintenance to your automatic door in order to prevent potential issues. Automatic Door Supply provides a full range of automatic door maintenance programs to ensure that your automatic stores stay in top shape. Our professional technicians will analyze your automatic doors to rapidly identify any potential issues before they get worse.",
    },
    {
      title: "What types of automatic doors do you repair?",
      des: "Automatic Door Supply repairs, all types of automatic doors, including swinging, sliding, revolving, and bifold automatic doors - and much more!",
    },
  ];
  return (
    <div>
      <TitleSection
        title={"Automatic Door Repair Service in the Greater New York Area"}
        paragraph={[
          <>
            <Link
              className="text-decoration-none"
              title="Automatic Door Supply"
              href={"/"}
            >
              Automatic Door Supply
            </Link>{" "}
            provides professional automatic door repair services throughout the
            New York City area, as well as to locations in Long Island,
            Westchester, New Jersey, and Connecticut. With regular use and
            traffic flow, thousands of people might use your automatic doors
            every day. This can cause damage to your door motor or motor sensor,
            impacting door opening time or causing people to need to press the
            exit button if they need to open the door. Door openers can also get
            worn down to the level where a total motor replacement is required.
          </>,
          <>
            It’s essential for your business security and safety to make sure
            that your automatic doors cose and function properly. In fact, it’s
            recommended by the American Association of Automatic Door
            Manufacturers that automatic doors are professionally inspected once
            a year. If your automatic door is malfunctioning, running slowly,
            closing weirdly, or causing any form of issue, contact Automatic
            Door Supply today for rapid assistance.{" "}
          </>,
          <>
            Our skilled automatic door repair technicians can rapidly assess the
            condition of your automatic door, pinpointing any potential hardware
            issue and creating a custom-tailored solution that effectively
            repairs your automatic door and restores it to perfect working
            order. Our trained and experienced team of professional automatic
            door technicians have years of industry experience in handling all
            forms of automatic door issues, no matter how complex, and service
            every form of automatic door type on the market today. Contact
            Automatic Door Supply for rapid assistance with all of your New York
            City area automatic door repair service needs.
          </>,
        ]}
      />
      <h2 className="h3">Faq</h2>
      <Faq data={faqData} />

      <UnorderedList
        title={"Automatic Door Supply Automatic Door Repair Process"}
        titleClasses={"mt-3"}
        data={[
          "Our professional automatic door inspectors examine automatic door activation devices and all sensors to ensure that they are properly working",
          "We test automatic door time delays to make sure the automatic door closes when it is supposed to",
          "We measure and test automatic door closing speed and force",
          "We ensure that the automatic door has the proper safety labels in the proper position",
          "We do everything we can to ensure that your automatic doors operate safely, properly, and stay closed when they are supposed to",
        ]}
      />

      <UnorderedList
        title={
          "Automatic Door Supply repairs a wide range of automatic door types including, but not limited to:"
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

export default AutomaticDoorRepair;
