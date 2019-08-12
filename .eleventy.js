module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy("src/css");

  return {
    dir: {
      output:   "dist",
      input:    "src",
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
