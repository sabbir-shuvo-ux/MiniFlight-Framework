import TitleSection from "@/components/innerPageComponents/titleSection/TitleSection";
import UnorderedList from "@/components/innerPageComponents/unorderedList/UnorderedList";
import Link from "next/link";
import React from "react";

const HeavyTrafficAutomaticDoors = () => {
  return (
    <div>
      <TitleSection
        title={
          "High-Traffic Automatic Door Installation in the Greater New York Area"
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
            specializes in installing and servicing heavy traffic automatic
            doors at commercial, institutional, and residential properties
            throughout New York City. Constant traffic flow can degrade door
            mechanics over time - and if there’s regular entrance and exit at
            your property by large amounts of people, your property will be best
            matched with a heavy traffic automatic door that is custom-designed
            to serve (and withstand) constant heavy traffic flow.
          </>,
          <>
            Automatic Door Supply provides a wide range of heavy traffic
            automatic door types, crafted according to the highway industry
            standards, and including sliding doors, swinging doors, revolving
            doors, and heavy duty automatic door operators.
          </>,
        ]}
      />

      <UnorderedList
        title={
          "Benefits of Automatic Doors for high-traffic Environments include:"
        }
        data={[
          <>
            <strong>Energy Savings</strong> - Automatic doors can he;p you
            preserve heated or air conditioned air in your property, and reduce
            the costs of heating and cooling your building
          </>,

          <>
            <strong>Touchless Entry </strong>- Automatic doors allow people to
            enter and exit your property without touching door handles,
            preventing the spread of germs
          </>,

          <>
            <strong>Convenience</strong> - Hands-free automatic entry is highly
            convenient, allowing people to easily enter or exit your building
            while their hands are occupied.
          </>,
          <>
            <strong>Traffic Control</strong> - Heavy-traffic automatic doors,
            especially high-volume revolving doors, are a fantastic solution for
            properties that receive high amounts of foot traffic. Heavy-traffic
            revolving doors allow for a constant inflow / outflow of traffic in
            and out of your property, preventing crowds and traffic jams from
            forming.
          </>,
        ]}
      />

      <UnorderedList
        title={
          "Automatic Door Supply installs and services a wide range of heavy traffic automatic door types including, but not limited to:"
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

export default HeavyTrafficAutomaticDoors;
