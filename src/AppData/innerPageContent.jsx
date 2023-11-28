/*
# RULES YOU HAVE TO FOLLOW #
1. please ensure that every object has a "metaData" and "pageContent" property. 
2. "metaData" object must have to "title" and "description" property.
3. "pageContent" value should be react component or jsx.
4. if you dont assign value of "pageContent" property then that page will be blank so make sure you import and assign value to "pageContent" property.
*/

// inner page components
import AdaDoorOperator from "@/innerPages/ada-door-operator/AdaDoorOperator";
import AirportsAutomaticDoors from "@/innerPages/airports-automatic-doors/AirportsAutomaticDoors";
import AutomaticDoorRepair from "@/innerPages/automatic-door-repair/AutomaticDoorRepair";
import AutomaticDoorsInstallation from "@/innerPages/automatic-doors-installation/AutomaticDoorsInstallation";
import ChurchTempleAutomaticDoors from "@/innerPages/church-temple-automatic-doors/ChurchTempleAutomaticDoors";
import CommercialAutomaticDoors from "@/innerPages/commercial-automatic-doors/CommercialAutomaticDoors";
import CustomAutomaticDoors from "@/innerPages/custom-automatic-doors/CustomAutomaticDoors";
import DoorDesign from "@/innerPages/door-design/DoorDesign";
import DoorFabrication from "@/innerPages/door-fabrication/DoorFabrication";
import HeavyTrafficAutomaticDoors from "@/innerPages/heavy-traffic-automatic-doors/HeavyTrafficAutomaticDoors";
import HospitalAutomaticDoors from "@/innerPages/hospital-automatic-doors/HospitalAutomaticDoors";
import InteriorAutomaticDoors from "@/innerPages/interior-automatic-doors/InteriorAutomaticDoors";
import ResidentialBuildingAutomaticDoors from "@/innerPages/residential-building-automatic-doors/ResidentialBuildingAutomaticDoors";
import SchoolAutomaticDoors from "@/innerPages/school-automatic-doors/SchoolAutomaticDoors";
import StorefrontAutomaticDoors from "@/innerPages/storefront-automatic-doors/StorefrontAutomaticDoors";

export const innerPageDataContent = {
  "door-design": {
    metaData: {
      title: "Door Design",
      description: "Door design description",
    },
    pageContent: <DoorDesign />,
  },
  "door-fabrication": {
    metaData: {
      title: "door-fabrication",
      description: "door-fabrication",
    },
    pageContent: <DoorFabrication />,
  },
  "automatic-doors-installation": {
    metaData: {
      title: "automatic-doors-installation",
      description: "automatic-doors-installation description",
    },
    pageContent: <AutomaticDoorsInstallation />,
  },

  "automatic-door-repair": {
    metaData: {
      title: "automatic-door-repair",
      description: "automatic-door-repair",
    },
    pageContent: <AutomaticDoorRepair />,
  },
  "hospital-automatic-doors": {
    metaData: {
      title: "hospital-automatic-doors",
      description: "hello there",
    },
    pageContent: <HospitalAutomaticDoors />,
  },
  "commercial-automatic-doors": {
    metaData: {
      title: "commercial-automatic-doors",
      description: "hello there",
    },
    pageContent: <CommercialAutomaticDoors />,
  },
  "residential-building-automatic-doors": {
    metaData: {
      title: "residential-building-automatic-doors",
      description: "hello there",
    },
    pageContent: <ResidentialBuildingAutomaticDoors />,
  },
  "ada-door-operator": {
    metaData: {
      title: "ada-door-operator",
      description: "hello there",
    },
    pageContent: <AdaDoorOperator />,
  },
  "interior-automatic-doors": {
    metaData: {
      title: "interior-automatic-doors",
      description: "hello there",
    },
    pageContent: <InteriorAutomaticDoors />,
  },
  "airports-automatic-doors": {
    metaData: {
      title: "airports-automatic-doors",
      description: "hello there",
    },
    pageContent: <AirportsAutomaticDoors />,
  },
  "school-automatic-doors": {
    metaData: {
      title: "school-automatic-doors",
      description: "hello there",
    },
    pageContent: <SchoolAutomaticDoors />,
  },
  "church-temple-automatic-doors": {
    metaData: {
      title: "church-temple-automatic-doors",
      description: "hello there",
    },
    pageContent: <ChurchTempleAutomaticDoors />,
  },
  "heavy-traffic-automatic-doors": {
    metaData: {
      title: "heavy-traffic-automatic-doors",
      description: "hello there",
    },
    pageContent: <HeavyTrafficAutomaticDoors />,
  },

  "storefront-automatic-doors": {
    metaData: {
      title: "storefront-automatic-doors",
      description: "hello there",
    },
    pageContent: <StorefrontAutomaticDoors />,
  },
  "custom-automatic-doors": {
    metaData: {
      title: "custom-automatic-doors",
      description: "hello there",
    },
    pageContent: <CustomAutomaticDoors />,
  },
};
