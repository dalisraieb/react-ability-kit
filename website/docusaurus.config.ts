import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";

const config: Config = {
  title: "react-ability-kit",
  tagline: "Type-safe permissions and authorization for React",
  favicon: "img/logo.svg",

  url: "https://dalisraieb.github.io",
  baseUrl: "/react-ability-kit/",

  organizationName: "dalisraieb",
  projectName: "react-ability-kit",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"]
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl:
            "https://github.com/dalisraieb/react-ability-kit/tree/main/website/"
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css"
        }
      }
    ]
  ],

  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        indexDocs: true,
        indexPages: true,
        docsRouteBasePath: "docs"
      }
    ]
  ],

  themeConfig: {
    image: "img/social-card.svg",
    navbar: {
      title: "react-ability-kit",
      logo: {
        alt: "react-ability-kit logo",
        src: "img/logo.svg"
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "docsSidebar",
          position: "left",
          label: "Docs"
        },
        {
          to: "/docs/demo",
          label: "Demo",
          position: "left"
        },
        {
          href: "https://github.com/dalisraieb/react-ability-kit",
          label: "GitHub",
          position: "right"
        },
        {
          href: "https://www.npmjs.com/package/react-ability-kit",
          label: "NPM",
          position: "right"
        }
      ]
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting Started",
              to: "/docs/getting-started"
            },
            {
              label: "React Integration",
              to: "/docs/react-integration"
            }
          ]
        },
        {
          title: "Community",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/dalisraieb/react-ability-kit"
            },
            {
              label: "NPM",
              href: "https://www.npmjs.com/package/react-ability-kit"
            }
          ]
        }
      ],
      copyright: `Copyright ${new Date().getFullYear()} react-ability-kit.`
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["bash", "typescript"]
    },
    colorMode: {
      defaultMode: "light",
      disableSwitch: false,
      respectPrefersColorScheme: true
    }
  }
};

export default config;
