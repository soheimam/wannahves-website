import smConfig from "./sm.json";

if (!smConfig.apiEndpoint) {
  console.warn(
    "Looks like Slice Machine hasn't been bootstraped already.\nCheck the `Getting Started` section of the README file :)"
  );
}

const { getStoriesPaths } = require("slice-machine-ui/helpers/storybook");

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: "static",
  ssr: false,
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "slice-library-starter-nuxt",
    meta: [
      {
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content: ""
      }
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico"
      }
    ]
  },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ["~/assets/css/tailwind.css"],
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: "@/plugins/vue-awesome-swiper", ssr: false },
    { src: "@/plugins/vue-video-background", ssr: false }
  ],
  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,
  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: ["@nuxtjs/tailwindcss", "nuxt-gsap-module"],
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    [
      "@nuxtjs/prismic",
      {
        endpoint: smConfig.apiEndpoint || "",
        apiOptions: {
          routes: [
            {
              type: "page",
              path: "/:uid"
            }
          ]
        }
      }
    ],
    ["nuxt-sm"]
  ],
  generate: {
    fallback: true
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: ["vue-slicezone", "nuxt-sm"],
    postcss: {
      plugins: {
        "postcss-import": {},
        tailwindcss: {},
        autoprefixer: {}
      }
    }
  },
  purgeCSS: {
    // <-- Added
    extractors: () => [
      {
        extractor(content) {
          return content.match(/.*/g);
        },
        extensions: ["vue"]
      }
    ]
  },
  storybook: {
    stories: [...getStoriesPaths() /*...*/]
  }
};
