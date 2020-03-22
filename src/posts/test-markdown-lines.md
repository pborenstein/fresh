---
title: Working with Collections
date: 2019-01-15
category: Tech
summary:  Collections are a key concept
          of Eleventy, but they confused
          me at first. So I looked at the
          source to figure out how
          collections work.
tags:
  - eleventy
---


back quotes

``` js/2
let foo =` tick
tock`
doo = `tick tock`
```



a json thing

``` json/1
collections: {
  "all": [ items ],
  "categories": {
    "Culture": [ items ],
    "Life": [ items ],
    "Thinking": [ items ]
  }
}
```

json add/del

```json/1-3,5/9,11
{
  "all": [...],
  "nav": [...],
  "books": [
    {
      "inputPath": "./src/articles/finding-oz.md",
      "outputPath": "_site/articles/finding-oz/index.html",
      "fileSlug": "finding-oz",
      "data": {...},
      "date": "2009-08-07T13:52:12.000Z",
      "url": "/articles/finding-oz/",
      "templateContent": "<p>As with most books ... much about The Wizard of Oz</li>\n</ul>\n",
      "template": {...}
    },
    ...
  ],
  "programming": [...],
}
```

