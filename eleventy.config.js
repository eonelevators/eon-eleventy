module.exports = function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy("assets"); // 👈 Copies CSS to _site
  return {
    dir: {
      input: ".",
      output: "_site"
    }
  };
};