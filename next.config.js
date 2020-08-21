// next.config.js
const withPlugins = require("next-compose-plugins");
const withPWA = require("next-pwa");
const withSvgr = require("next-svgr");

module.exports = withPlugins([
  [
    withPWA,
    {
      pwa: {
        dest: "public",
      },
    },
  ],
  withSvgr,
  // your other plugins here
]);
