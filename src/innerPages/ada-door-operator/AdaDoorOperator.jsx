import Faq from "@/components/FaqComponent/Faq";
import TitleSection from "@/components/innerPageComponents/titleSection/TitleSection";
import Link from "next/link";
import React from "react";

const AdaDoorOperator = () => {
  const faqData = [
    {
      title: "Why ADA-Compliant Door Operators?",
      des: "The Americans with Disabilities Act (ADA) was ratified in 1990 - protecting any person with disabilities from discrimination in public life by instituting regulations for public spaces including businesses, hospitals, and residential buildings. Building managers are required to install handicap door openers (also called automatic door operators) in order to allow any persons with disabilities to easily open doors and access your property. Automatic Door Supply installs a broad range of ADA-compliant door operators and handicap automatic doors ideal for NYC properties of all types.",
    },
    {
      title: "What exactly is an ADA door operator?",
      des: "ADA door operators are special devices that help to automate doors, making sure that they can be accessed by people with disabilities. This allows businesses or public areas of residential buildings to comply with the Americans with Disabilities Act (the ADA).",
    },
    {
      title: "How do ADA door operators operate?",
      des: "ADA door operators use a range of sensors to detect proximity or motion. This will help the door open automatically when it is approached by a person. You can adjust ADA door operators to detect different speeds, force levels, and even stay open for different amounts of time in order to meet different ADA requirements or user needs.",
    },
    {
      title:
        "What are some of the main features in an ADA-compliant door operator?",
      des: "ADA-compliant door operators have a range of features, including low-energy operation, customizable opening and closing speeds, and obstacle sensors. All of these features make sure that the ADA-compliant automatic door will open and close smoothly and safely.",
    },
    {
      title:
        "Can ADA door operators be installed in all types of doors and buildings?",
      des: "Yes, ADA door operators can be installed on a wide range of doors, including sliding doors, swinging doors, and folding doors. ADA door operators can be installed inside a wide range of applications, including commercial environments, retail environments, offices, healthcare facilities, schools, government buildings, and much more.",
    },
    {
      title: "Can you retrofit existing doors with ADA door operators?",
      des: "Yes, we can easily retrofit ADA door operators on your existing doors, allowing you to make your building more accessible to all and compliant with ADA stipulations for an affordable and budget-friendly rate.",
    },
  ];
  return (
    <div>
      <TitleSection
        title={"ADA Door Operator Installation in the Greater New York Area"}
        paragraph={[
          <>
            <Link
              className="text-decoration-none"
              title="Automatic Door Supply"
              href={"/"}
            >
              Automatic Door Supply
            </Link>{" "}
            installs ADA-compliant automatic door operators at properties
            throughout the New York City area, as well as to locations in Long
            Island, Westchester, New Jersey, and Connecticut. Here at Automatic
            Door Supply, we understand why accessibility is crucial in
            environments of all kinds, and for industries of all kinds -
            hospital, government, education, aviation, and even for retail
            stores. Our professional NYC handicap automatic door installation
            experts are dedicated to improving accessibility for all.
          </>,
          <>
            Our automatic doors are fully Americans With Disabilities Act (ADA)
            compliant. You can choose to install a brand new ADA-compliant
            automatic door and automatic door operator at your property, or
            simply retrofit your existing door with an ADA-compliant swing door
            opener. Automatic Door Supply makes sure that your property is
            provided with the highest-quality accessibility door technology
            available in the entire industry, with accessibility solutions
            custom-tailored to the unique needs of your property, employees, and
            visitors. Our team ensures that all of our automatic doors are fully
            installed within ADA codes, with clear and easily identified
            controls located in an area that’s both convenient for visitors and
            not in the path of the door.
          </>,
          <>
            If you manage a property of any scale in the NYC area, you can rely
            on the professional team here at Automatic Door Supply to provide
            you with professional ADA door operator installation services of the
            highest caliber, and for the most affordable rates available.
          </>,
        ]}
      />
      <h2 className="h3">Faq</h2>
      <Faq data={faqData} />
    </div>
  );
};

export default AdaDoorOperator;
