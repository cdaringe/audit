/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: { url: "/", static: true },
    src: { url: "/dist" },
  },
  plugins: [
    "@snowpack/plugin-dotenv",
    "@snowpack/plugin-typescript",
    "@prefresh/snowpack",
  ],
  install: [
    /* ... */
  ],
  installOptions: {
    installTypes: true,
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  "proxy": {
    // Short form:
    "/api/graphql": "http://localhost:9000/v1/graphql",
    // // Long form:
    // "/api/02": {
    //   on: { proxyReq: (p, req, res) => { /* Custom event handlers (JS only) */ },
    //   /* Custom http-proxy options */
    // }
  },
  alias: {
    react: "preact/compat",
    "react-dom": "preact/compat",
  },
};
