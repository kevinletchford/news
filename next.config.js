// next.config.js
const withPlugins = require("next-compose-plugins");
const runtimeCaching = require('next-pwa/cache');
const withPWA = require("next-pwa");
const withSvgr = require("next-svgr");

module.exports = withPlugins([
    [
        withPWA,
        {
            pwa: {
                dest: "public",
                runtimeCaching
            },
        },
    ],
    withSvgr,
    // your other plugins here
]);