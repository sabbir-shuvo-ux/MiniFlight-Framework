/*
# RULES YOU HAVE TO FOLLOW #
1. please ensure that every object has a "metaData" and "pageContent" property. 
2. "metaData" object must have to "title" and "description" property.
3. "pageContent" value should be react component or jsx.
4. if you dont assign value of "pageContent" property then that page will be blank so make sure you import and assign value to "pageContent" property.
5. if you want any page full width then use [ layout: 'FULL_PAGE' ] - use this property and value to use full page layout
*/

// inner page components
import AdaDoorOperator from "@/_pages_/ada-door-operator/AdaDoorOperator";
import AirportsAutomaticDoors from "@/_pages_/airports-automatic-doors/AirportsAutomaticDoors";
import AutomaticDoorRepair from "@/_pages_/automatic-door-repair/AutomaticDoorRepair";
import AutomaticDoorsInstallation from "@/_pages_/automatic-doors-installation/AutomaticDoorsInstallation";
import ChurchTempleAutomaticDoors from "@/_pages_/church-temple-automatic-doors/ChurchTempleAutomaticDoors";
import CommercialAutomaticDoors from "@/_pages_/commercial-automatic-doors/CommercialAutomaticDoors";
import Contact from "@/_pages_/contact/Contact";
import CustomAutomaticDoors from "@/_pages_/custom-automatic-doors/CustomAutomaticDoors";
import DoorDesign from "@/_pages_/door-design/DoorDesign";
import DoorFabrication from "@/_pages_/door-fabrication/DoorFabrication";
import HeavyTrafficAutomaticDoors from "@/_pages_/heavy-traffic-automatic-doors/HeavyTrafficAutomaticDoors";
import HospitalAutomaticDoors from "@/_pages_/hospital-automatic-doors/HospitalAutomaticDoors";
import InteriorAutomaticDoors from "@/_pages_/interior-automatic-doors/InteriorAutomaticDoors";
import ResidentialBuildingAutomaticDoors from "@/_pages_/residential-building-automatic-doors/ResidentialBuildingAutomaticDoors";
import SchoolAutomaticDoors from "@/_pages_/school-automatic-doors/SchoolAutomaticDoors";
import StorefrontAutomaticDoors from "@/_pages_/storefront-automatic-doors/StorefrontAutomaticDoors";

export const innerPageDataContent = {
  "about-our-company": {
    metaData: {
      title: "About our company",
      description: "About our company",
    },
    pageContent: <h1>About us page</h1>,
  },
  contact: {
    layout: "FULL_PAGE",
    metaData: {
      title: "Contact",
      description: "Contact",
    },
    pageContent: <Contact />,
  },
  "door-design": {
    metaData: {
      title: "Door Design",
      description: "Door design",
    },
    pageContent: <DoorDesign />,
  },
  "door-fabrication": {
    metaData: {
      title: "Door fabrication",
      description: "Door fabrication",
    },
    pageContent: <DoorFabrication />,
  },
  "automatic-doors-installation": {
    metaData: {
      title: "Automatic doors installation",
      description: "Automatic doors installation",
    },
    pageContent: <AutomaticDoorsInstallation />,
  },

  "automatic-door-repair": {
    metaData: {
      title: "Automatic door repair",
      description: "Automatic door repair",
    },
    pageContent: <AutomaticDoorRepair />,
  },
  "hospital-automatic-doors": {
    metaData: {
      title: "Hospital automatic doors",
      description: "Hospital automatic doors",
    },
    pageContent: <HospitalAutomaticDoors />,
  },
  "commercial-automatic-doors": {
    metaData: {
      title: "Commercial automatic doors",
      description: "Commercial automatic doors",
    },
    pageContent: <CommercialAutomaticDoors />,
  },
  "residential-building-automatic-doors": {
    metaData: {
      title: "Residential building automatic doors",
      description: "Residential building automatic doors",
    },
    pageContent: <ResidentialBuildingAutomaticDoors />,
  },
  "ada-door-operator": {
    metaData: {
      title: "ada door operator",
      description: "ada door operator",
    },
    pageContent: <AdaDoorOperator />,
  },
  "interior-automatic-doors": {
    metaData: {
      title: "Interior automatic doors",
      description: "Interior automatic doors",
    },
    pageContent: <InteriorAutomaticDoors />,
  },
  "airports-automatic-doors": {
    metaData: {
      title: "Airports automatic doors",
      description: "Airports automatic doors",
    },
    pageContent: <AirportsAutomaticDoors />,
  },
  "school-automatic-doors": {
    metaData: {
      title: "School automatic doors",
      description: "School automatic doors",
    },
    pageContent: <SchoolAutomaticDoors />,
  },
  "church-temple-automatic-doors": {
    metaData: {
      title: "Church temple automatic doors",
      description: "Church temple automatic doors",
    },
    pageContent: <ChurchTempleAutomaticDoors />,
  },
  "heavy-traffic-automatic-doors": {
    metaData: {
      title: "Heavy traffic automatic doors",
      description: "Heavy traffic automatic doors",
    },
    pageContent: <HeavyTrafficAutomaticDoors />,
  },

  "storefront-automatic-doors": {
    metaData: {
      title: "Storefront automatic doors",
      description: "Storefront automatic doors",
    },
    pageContent: <StorefrontAutomaticDoors />,
  },
  "custom-automatic-doors": {
    metaData: {
      title: "Custom automatic doors",
      description: "hello there",
    },
    pageContent: <CustomAutomaticDoors />,
  },
};
