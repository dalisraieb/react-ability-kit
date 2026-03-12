import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: "category",
      label: "Getting Started",
      items: ["intro", "quick-start"]
    },
    {
      type: "category",
      label: "Guide",
      items: [
        {
          type: "doc",
          id: "defining-permission-vocabulary",
          label: "Defining Permissions Vocabulary"
        },
        {
          type: "doc",
          id: "defining-policies",
          label: "Defining Policies"
        },
        {
          type: "doc",
          id: "creating-an-ability",
          label: "Creating an Ability"
        },
        {
          type: "doc",
          id: "react-integration",
          label: "React Integration"
        }
      ]
    },
    {
      type: "category",
      label: "Examples",
      items: [
        {
          type: "doc",
          id: "real-world-example",
          label: "SaaS Dashboard Example"
        }
      ]
    },
    {
      type: "category",
      label: "Reference",
      items: ["api-reference"]
    },
    "faq"
  ]
};

export default sidebars;
