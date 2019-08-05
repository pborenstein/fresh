module.exports = function(eleventyConfig) {

  return {
    dir: {
      input:    "src",
      output:   "dist",
      
      //  These are inside the `input` directory
      includes: "_includes",
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
    passthroughFileCopy:     true,
    pathPrefix:              "/"
  }
}
