/*
# RULES YOU HAVE TO FOLLOW #
1. please ensure that every object has a "metaData" and "pageContent" property. 
2. "metaData" object must have to "title" and "description" property.
3. "pageContent" value should be react component or jsx.
4. if you dont assign value of "pageContent" property then that page will be blank so make sure you import and assign value to "pageContent" property.
5. if you want any page full width then use [ layout: 'FULL_PAGE' ] - use this property and value to use full page layout
*/

// inner page components
import DummyContentComponent from "@/_pages_/dummy-content-component/DummyContentComponent";
import Contact from "@/_pages_/contact/Contact";
import Gallery from "@/_pages_/gallery/Gallery";

export const innerPageDataContent = {
  "about-our-company": {
    metaData: {
      title: "About our company",
      description: "About our company",
    },
    pageContent: <DummyContentComponent />,
  },
  "automatic-door-supply-near-me": {
    metaData: {
      title: "Automatic door supply near me",
      description: "Automatic door supply near me",
    },
    pageContent: <DummyContentComponent />,
  },
  "our-portfolio": {
    metaData: {
      title: "Our portfolio",
      description: "Our portfolio",
    },
    pageContent: <DummyContentComponent />,
  },
  "customer-reviews": {
    metaData: {
      title: "Customer reviews",
      description: "Customer reviews",
    },
    pageContent: <DummyContentComponent />,
  },
  resources: {
    metaData: {
      title: "Resources",
      description: "Resources",
    },
    pageContent: <DummyContentComponent />,
  },
  gallery: {
    layout: "FULL_PAGE",
    metaData: {
      title: "Gallery",
      description: "Gallery",
    },
    pageContent: <Gallery />,
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
    pageContent: <DummyContentComponent />,
  },
  "door-fabrication": {
    metaData: {
      title: "Door fabrication",
      description: "Door fabrication",
    },
    pageContent: <DummyContentComponent />,
  },
  "automatic-doors-installation": {
    metaData: {
      title: "Automatic doors installation",
      description: "Automatic doors installation",
    },
    pageContent: <DummyContentComponent />,
  },

  "automatic-door-repair": {
    metaData: {
      title: "Automatic door repair",
      description: "Automatic door repair",
    },
    pageContent: <DummyContentComponent />,
  },
  "hospital-automatic-doors": {
    metaData: {
      title: "Hospital automatic doors",
      description: "Hospital automatic doors",
    },
    pageContent: <DummyContentComponent />,
  },
  "commercial-automatic-doors": {
    metaData: {
      title: "Commercial automatic doors",
      description: "Commercial automatic doors",
    },
    pageContent: <DummyContentComponent />,
  },
  "residential-building-automatic-doors": {
    metaData: {
      title: "Residential building automatic doors",
      description: "Residential building automatic doors",
    },
    pageContent: <DummyContentComponent />,
  },
  "ada-door-operator": {
    metaData: {
      title: "ada door operator",
      description: "ada door operator",
    },
    pageContent: <DummyContentComponent />,
  },
  "interior-automatic-doors": {
    metaData: {
      title: "Interior automatic doors",
      description: "Interior automatic doors",
    },
    pageContent: <DummyContentComponent />,
  },
  "airports-automatic-doors": {
    metaData: {
      title: "Airports automatic doors",
      description: "Airports automatic doors",
    },
    pageContent: <DummyContentComponent />,
  },
  "school-automatic-doors": {
    metaData: {
      title: "School automatic doors",
      description: "School automatic doors",
    },
    pageContent: <DummyContentComponent />,
  },
  "church-temple-automatic-doors": {
    metaData: {
      title: "Church temple automatic doors",
      description: "Church temple automatic doors",
    },
    pageContent: <DummyContentComponent />,
  },
  "heavy-traffic-automatic-doors": {
    metaData: {
      title: "Heavy traffic automatic doors",
      description: "Heavy traffic automatic doors",
    },
    pageContent: <DummyContentComponent />,
  },

  "storefront-automatic-doors": {
    metaData: {
      title: "Storefront automatic doors",
      description: "Storefront automatic doors",
    },
    pageContent: <DummyContentComponent />,
  },
  "custom-automatic-doors": {
    metaData: {
      title: "Custom automatic doors",
      description: "Custom automatic doors",
    },
    pageContent: <DummyContentComponent />,
  },
};
