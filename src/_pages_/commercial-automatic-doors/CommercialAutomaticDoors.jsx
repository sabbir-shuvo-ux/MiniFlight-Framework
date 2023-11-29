import Faq from "@/components/FaqComponent/Faq";
import TitleSection from "@/components/innerPageComponents/titleSection/TitleSection";
import UnorderedList from "@/components/innerPageComponents/unorderedList/UnorderedList";
import Link from "next/link";
import React from "react";

const CommercialAutomaticDoors = () => {
  const faqData = [
    {
      title: "What are the main benefits of commercial automatic doors?",
      des: "Commercial automatic doors provide increased accessibility, energy efficiency, and aesthetic appeal to businesses of all types. Commercial automatic doors can improve traffic flow into and outside of businesses, and also have a high level of curb appeal for customers.",
    },
    {
      title:
        "Can you customize your commercial automatic doors to match my business's style, aesthetic, or branding?",
      des: "Our commercial automatic doors are highly customizable. You can choose from a wide range of materials, finishes, and design options in order to make sure they match the unique aesthetics of your business.",
    },
    {
      title:
        "Can commercial automatic doors increase the energy efficiency of my business?",
      des: "Yes. Commercial automatic doors are designed with energy efficiency features. Due to the rapid opening and closing cycles, commercial automatic doors can lower heat or cold air loss, helping your business save money on energy bills.",
    },
    {
      title: "Are commercial automatic doors suited for high-traffic areas?",
      des: "Yes! Commercial automatic doors are built to withstand heavy use and high levels of traffic, making them ideal for environments like offices, retail stores, malls, government buildings, and much more.",
    },
    {
      title:
        "Do you provide repair and maintenance service for commercial automatic doors?",
      des: "Yes, our team of professional automatic door technicians provides comprehensive automatic door repair and maintenance services to ensure that your commercial automatic doors operate smoothly and durably for many years.",
    },
  ];
  return (
    <div>
      <TitleSection
        title={
          "Commercial Automatic Door Installation in the Greater New York Area"
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
            installs and services commercial automatic doors at commercial
            properties of all types throughout the New York City area. Herea t
            Automatic Door Supply, we understand the essential importance of
            ensuring easy accessibility at your commercial property for both
            your staff and visitors. Our expert automatic door technicians
            provide the highest-quality automatic doors available in the
            industry, seamlessly installing them according to all rigorous ADA
            standards.
          </>,
          <>
            Our team works directly with our clients to recommend and install
            automatic doors that perfectly match the needs of your commercial
            enterprise - considering all aspects including door size, layout,
            and traffic flow - as well as security, and aesthetic
            considerations. Installs highly durable, long-lasting automatic
            doors at commercial properties of all types - from small retail
            properties to large offices, factories, and industrial settings.
          </>,
        ]}
      />

      <h2 className="h3">Faq</h2>
      <Faq data={faqData} />
      <UnorderedList
        titleClasses={"mt-3"}
        title={"Commercial Automatic Door Systems Applications Include:"}
        data={[
          "Office Entrances",
          "Meeting Rooms",
          "Executive Offices",
          "Bathrooms",
          "Storage Spaces",
          "Lounges",
          "And much more!",
        ]}
      />
      <UnorderedList
        title={
          "Automatic Door Supply installs and services a wide range of commercial automatic door types including, but not limited to:"
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

export default CommercialAutomaticDoors;
