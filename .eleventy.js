
module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy("src/css")

  // Filters
  eleventyConfig.addFilter('dateFilter',   require('./js/date-filter.js'))
  eleventyConfig.addFilter('w3DateFilter', require('./js/w3-date-filter.js'))
  eleventyConfig.addFilter("pdump",        require("./js/pdump.js"))
  
  // shortcodes
  eleventyConfig.addShortcode('hasMermaid', require("./js/has-mermaid.js"))

  //  collections
  eleventyConfig.addCollection("tagList",    require("./js/get-tag-list.js"))
  eleventyConfig.addCollection('posts', collection => {
    return [...collection.getFilteredByGlob('./src/posts/*.md')].reverse();
  });


  // http://cornishweb.com/index.php/2019/05/25/using-mermaid-js-with-eleventy-io/
  
  eleventyConfig.addMarkdownHighlighter((str, language) => {
    if (language === "mermaid") {
      return `<pre class="mermaid">${str}</pre>`;
    }
  });

  eleventyConfig.setLibrary("md", require("markdown-it")({
                                    html: true,
                                    breaks: false,
                                    linkify: false,
                                    typographer: true
                                  })
    .use(require("markdown-it-multimd-table"))
    .use(require('markdown-it-footnote'))
    .use(require("markdown-it-anchor"), {
            permalink: true,
            permalinkClass: "direct-link",
            permalinkSymbol: "•"
          })
  );






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
