module.exports = function (eleventyConfig) {
  // Copy assets directly to _site/assets
  eleventyConfig.addPassthroughCopy("assets");

  return {
    pathPrefix:
      process.env.ELEVENTY_ENV === "production"
        ? "/eon-eleventy-product/"
        : "/eon-eleventy-client/",
    dir: {
      input: ".",
      output: "_site",
    },
  };
};
