import TitleSection from "@/components/innerPageComponents/titleSection/TitleSection";
import UnorderedList from "@/components/innerPageComponents/unorderedList/UnorderedList";
import Link from "next/link";
import React from "react";

const CustomAutomaticDoors = () => {
  return (
    <div>
      <TitleSection
        title={"Custom Automatic Door Service in the Greater New York Area"}
        paragraph={[
          <>
            <Link
              className="text-decoration-none"
              title="Automatic Door Supply"
              href={"/"}
            >
              Automatic Door Supply
            </Link>{" "}
            provides custom automatic door design and installation services to
            properties throughout the New York City area. Our skilled team of
            automatic door expert technicians meet the unique needs of
            properties of all scales and sizes. Our team will assess your
            entrance and exit needs, taking in mind a broad range of factors
            including security, accessibility, crowd flow, and even your
            aesthetic design preferences.
          </>,

          <>
            {" "}
            We will then design you a custom-tailored automatic door that is
            perfectly fit to the dimensions of your space. Automatic doors can
            drastically improve the crowd-flow, security, convenience, and
            security of your property - as well as accommodating this disabled
            according to mandatory ADA-compliance codes, and even limiting the
            spread of germs associated with manual door handles. Today,
            automatic doors are more popular than ever - and the skilled team
            here at Automatic Door Supply specializes in matching your NYC
            property with the best possible, most durable custom automatic door
            to match your needs - and always for a fair, affordable, and
            competitive rate.
          </>,
        ]}
      />
      <UnorderedList
        title={
          "Automatic Door Supply installs and services a wide range of custom automatic door types including, but not limited to:"
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

export default CustomAutomaticDoors;
