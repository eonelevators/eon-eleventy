module.exports = function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy("assets"); // 👈 Copies CSS to _site
  return {
	pathPrefix: "/eon-eleventy/",
    dir: {
      input: ".",
      output: "_site"
    }
  };
};