const fetch = require("node-fetch");

module.exports = async () => {
  try {
    const response = await fetch(
      "http://localhost:1337/api/products?populate[sections][populate]=*"
    );

    const json = await response.json();

    return json.data.map(item => {
      const attrs = item.attributes || {};

      return {
        id: item.id,
        title: attrs.title,
        slug: attrs.slug,      // 👈 force explicit mapping
        sections: attrs.sections || []
      };
    });

  } catch (error) {
    console.error("Strapi fetch failed:", error);
    return [];
  }
};
