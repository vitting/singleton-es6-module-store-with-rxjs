// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: { url: "/", static: true }, //Copy files from public to build root directory
    src: { url: "/dist" }, //Transpile files from src to build/dist directory
  },
  plugins: [
    "@snowpack/plugin-typescript", // Adds type checking on build
  ],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    sourcemap: true
  },
};
