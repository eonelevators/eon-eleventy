const fetch = require("node-fetch");

module.exports = async () => {
  try {
    const response = await fetch(
      "http://voometstudio.com/eon-strapi/api/products?filters[slug][$eq]=product-plexus&populate[sections][populate]=*"
    );

    const json = await response.json();

    //console.log(
      //"Sections array:",
      //JSON.stringify(json.data[0].sections, null, 2)
   // );

    return json.data[0];

  } catch (error) {
    console.error("Strapi fetch failed:", error);
    return {};
  }
};
