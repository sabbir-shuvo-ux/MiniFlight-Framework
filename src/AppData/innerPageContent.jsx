/*
# RULES YOU HAVE TO FOLLOW #
1. please ensure that every object has a "metaData" and "pageContent" property. 
2. "metaData" object must have to "title" and "description" property.
3. "pageContent" value should be react component or jsx.
4. if you dont assign value of "pageContent" property then that page will be blank so make sure you import and assign value to "pageContent" property.
*/

// inner page components
import AutomaticDoorRepair from "@/innerPages/automatic-door-repair/AutomaticDoorRepair";
import AutomaticDoorsInstallation from "@/innerPages/automatic-doors-installation/AutomaticDoorsInstallation";
import CommercialAutomaticDoors from "@/innerPages/commercial-automatic-doors/CommercialAutomaticDoors";
import DoorDesign from "@/innerPages/door-design/DoorDesign";
import DoorFabrication from "@/innerPages/door-fabrication/DoorFabrication";
import HospitalAutomaticDoors from "@/innerPages/hospital-automatic-doors/HospitalAutomaticDoors";

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
};
