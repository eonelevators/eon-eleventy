module.exports = {
  strapiUrl:
    process.env.ELEVENTY_ENV === "production"
      ? "http://voometstudio.com/eon-strapi"
      : "http://localhost:1337",
};
