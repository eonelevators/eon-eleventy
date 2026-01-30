module.exports = function (eleventyConfig) {
  // Copy assets directly to _site/assets
  eleventyConfig.addPassthroughCopy("assets");

  return {
    dir: {
      input: ".",
      output: "_site",
    },
  };
};
