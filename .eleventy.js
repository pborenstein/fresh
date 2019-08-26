
module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy("src/css")

  // Filters
  eleventyConfig.addFilter('dateFilter',   require('./src/filters/date-filter.js'))
  eleventyConfig.addFilter('w3DateFilter', require('./src/filters/w3-date-filter.js'))

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
