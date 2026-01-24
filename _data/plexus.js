// _data/plexus.js
const fetch = require("node-fetch");

module.exports = async () => {
  try {
    // This calls Strapi and specifically asks for the 'plexus' page and all its sections
    const response = await fetch("http://localhost:1337/api/products?filters[slug][$eq]=product-plexus&populate[sections][populate]=*");
    const json = await response.json();
    console.log("Strapi fetch successful:", json);  
    // Strapi nests your data inside 'attributes'. This line digs it out.
    return json.data[0].attributes;
  } catch (error) {
    console.error("Strapi fetch failed:", error);
    return {};
  }
};