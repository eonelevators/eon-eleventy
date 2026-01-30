const fetch = require("node-fetch");

module.exports = async () => {
  try {
    const response = await fetch(
      "http://voometstudio.com/eon-strapi/api/products?populate[sections][populate]=*"
    );

    const json = await response.json();
    return json.data;

  } catch (err) {
    console.error("Strapi fetch error:", err);
    return [];
  }
};
