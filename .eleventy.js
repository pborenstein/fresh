// Import filters
const dateFilter = require('./src/filters/date-filter.js');
const w3DateFilter = require('./src/filters/w3-date-filter.js');


module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy("src/css");

  // Filters
  eleventyConfig.addFilter('dateFilter', dateFilter);
  eleventyConfig.addFilter('w3DateFilter', w3DateFilter);

  return {
    dir: {
      output:     "dist",
      input:      "src",
        includes: "_includes", //  These are inside the `input` directory
        data:     "_data"
    },
    templateFormats: [
      "md",
      "njk",
      "html"
    ],
    dataTemplateEngine:     "njk",
    htmlTemplateEngine:     "njk",
    markdownTemplateEngine: "njk",
    passthroughFileCopy:     true
  }
}
