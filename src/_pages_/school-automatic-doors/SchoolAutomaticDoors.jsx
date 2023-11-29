import TitleSection from "@/components/innerPageComponents/titleSection/TitleSection";
import UnorderedList from "@/components/innerPageComponents/unorderedList/UnorderedList";
import Link from "next/link";
import React from "react";

const SchoolAutomaticDoors = () => {
  return (
    <div>
      <h2 className="h3">
        School Automatic Door Installation in the Greater New York Area
      </h2>
      <TitleSection
        title={
          "Heavy-Traffic Automatic Doors for Schools and Education Institutions"
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
            provides automatic doors for school properties of all scales
            throughout New York City (as well as to locations in Long Island,
            Westchester, New Jersey, and Connecticut), ranging from large
            universities to neighborhood school districts. We understand that
            it’s important that all learning environments ensure safe and
            accessible entrance for everyone.
          </>,
          <>
            {" "}
            Automatic Door Supply installs and retrofits automatic door
            solutions that reduce entrance barriers, prevent unauthorized
            entrance, provide security, and maintain the aesthetic
            attractiveness of the school setting. Our high-quality, durable,
            long-lasting automatic doors are ideal for the regular heavy traffic
            of students and staff through your school property, and provide the
            maximum level of function and durability for an affordable rate.
          </>,
        ]}
      />
      <UnorderedList
        title={
          "What should I consider when choosing the right school automatic door?"
        }
        data={[
          "Traffic flow",
          "Traffic movement direction",
          "Weather",
          "Accessibility for handicapped",
        ]}
      />

      <UnorderedList
        title={
          "Automatic School Door Systems Applications and Features Include:"
        }
        data={[
          "Classroom Automatic Doors",
          "School Corridor Automatic Doors",
          "School Entrance Automatic Doors",
          "Meeting Room Automatic Doors",
          "Restroom Automatic Doors",
          "Swinging Automatic School Doors",
          "Sliding Automatic School Doors",
          "ADA-Compliant Automatic School Doors",
          "Fire Rated School Automatic Doors",
          "Ballistic and Impact Rated Automatic School Doors",
          "Customizable Door Opening and Closing Speeds",
          "Adjustable Time Delay Door Closing",
          "Press Button Activation",
          "Obstruction Sensing",
          "Panic Breakout Systems",
          "High-Quality Weatherseals",
          "And much more!",
        ]}
      />

      <UnorderedList
        title={
          "Automatic Door Supply installs and services a wide range of school automatic door types including, but not limited to:"
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

export default SchoolAutomaticDoors;
