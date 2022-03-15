const autoprefixer = require("autoprefixer")();
const postcssCombineMediaQuery = require("postcss-combine-media-query");
const cssnano = require("cssnano")();

module.exports = {
  plugins: [postcssCombineMediaQuery, cssnano, autoprefixer],
};
