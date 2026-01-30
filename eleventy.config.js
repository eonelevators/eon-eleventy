module.exports = function (eleventyConfig) {
  // Copy assets directly to _site/assets
  eleventyConfig.addPassthroughCopy("assets");

  return {
    pathPrefix:
      process.env.ELEVENTY_ENV === "production"
        ? "/eon-eleventy/"
        : "/",
    dir: {
      input: ".",
      output: "_site",
    },
  };
};
