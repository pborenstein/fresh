# Worklog for implementing tailwind


The point here is to
change the CSS in `fresh` template
to use [Tailwind][tailwind] framework.
Why?

- to try it out
- to see if going from an established
  CSS framework to another is possible
- all the cool kids are using it

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**contents**

- [Plan](#plan)
- [tailwind/beginnings](#tailwindbeginnings)
  - [Dive right in](#dive-right-in)
  - [Let's install PostCSS](#lets-install-postcss)
- [tailwind/now-what](#tailwindnow-what)
  - [The site laid bare](#the-site-laid-bare)
  - [Adding PostCSS to our build](#adding-postcss-to-our-build)
- [tailwind/styling](#tailwindstyling)
- [So, I've been thinking](#so-ive-been-thinking)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


## Plan

All this work is off of the branch `tailwind`.
First, we'll just play with this branching
model by putting this document in
`tailwind/main`.

## tailwind/beginnings

One of the things I want to see is
how it goes switching from my custom CSS
to Tailwind, so I'm not starting with
a starter project.

### Dive right in

So the first thing to do is to install
the thing. We'll start with the
instructions in the
[installation guide][].
We're not using any of the frameworks mentioned
there, so it looks like we need to
[install Tailwind as a PostCSS plugin](https://tailwindcss.com/docs/installation#installing-tailwind-css-as-a-post-css-plugin).
I have no idea what PostCSS is,
but it looks like I'll learn.

> There is an article about using
> [Tailwind with Webpack](https://statickit.com/guides/eleventy-tailwind).
> but let's deal with one thing at a time.
>
> Is there an article about using Eleventy,
> Tailwind, and CSS to save some time?
> There is
> [An Eleventy Starter with Tailwind CSS and Alpine.js](https://css-tricks.com/eleventy-starter-with-tailwind-css-alpine-js/)
> which uses Alpine.js and, apparently, only
> incidentally PostCSS.
>
> And there is
> [Goodbye Squarespace. Hello Eleventy, Tailwind CSS and Netlify!][goodbye-squarespace]
> which may be all we need, but it looks like it started
> with another starter project.

Let's just follow the instructions in the [installation guide][],
which starts at
[Installing Tailwind CSS as a PostCSS plugin][install-postcss],
and wants us to go to
[Using PostCSS as your preprocessor][using-postcss].
This is already fun.

Let us begin:

```bash
[tailwind/beginnings ]$ npm install postcss-import --save-dev
npm WARN postcss-import@14.0.0 requires a peer of postcss@^8.0.0 but none is installed. You must install peer dependencies yourself.

+ postcss-import@14.0.0
added 3 packages from 2 contributors and audited 457 packages in 2.118s

14 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

Looks like we need to install PostCSS itself.

```bash
[tailwind/beginnings ]$ npm install postcss --save-dev
+ postcss@8.2.2
added 3 packages from 2 contributors and audited 460 packages in 2.101s

15 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

Now what?

Looking at
[one of the articles][goodbye-squarespace]
it looks like there's a bunch of other stuff
and that everyone knows what's going on.

Let's roll back and start with PostCSS.

### Let's install PostCSS

Still not clear to me that we need PostCSS to begin with,
but all I've been reading indicates that we really want it.

What does the PostCSS page say?

There's this tantalizing bit in the section
[**npm Scripts**](https://github.com/postcss/postcss#npm-scripts):

> To use PostCSS from your command-line interface or with npm scripts
> there is [`postcss-cli`].
>
> ```sh
> postcss --use autoprefixer -o main.css css/*.css
> ```

[`postcss-cli`]: https://github.com/postcss/postcss-cli

So let's install `postcss-cli`:

```sh
[tailwind/beginnings ]$ npm install postcss postcss-cli --save-dev
+ postcss@8.2.2
+ postcss-cli@8.3.1
added 59 packages from 34 contributors, removed 2 packages, updated 1 package and audited 517 packages in 3.477s

23 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

And the things the Tailwind doc says.

```sh
[tailwind/beginnings ]$ npm install tailwindcss autoprefixer
+ autoprefixer@10.1.0
+ tailwindcss@2.0.2
added 54 packages from 39 contributors and audited 572 packages in 4.604s

28 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

Set up Tailwinds and PostCSS config files.

```sh
[tailwind/beginnings *]$ npx tailwindcss init -p

   tailwindcss 2.0.2

   ✅ Created Tailwind config file: tailwind.config.js
   ✅ Created PostCSS config file: postcss.config.js
```


I think that's as far as beginnings.
Let's merge this with our `tailwind/main`

```sh
[tailwind/beginnings ]$ git co tailwind/main
Switched to branch 'tailwind/main'

philip@ehecatl: ~/projects/fresh
[tailwind/main ]$ git merge tailwind/beginnings --no-ff
Merge made by the 'recursive' strategy.
 TAILWIND.md        |  158 ++++++++-
 package-lock.json  | 1000 ++++++++++++++++++++++++++++++++++++++++++++++++++---
 package.json       |    8 +-
 postcss.config.js  |    6 +
 tailwind.config.js |   11 +
 5 files changed, 1137 insertions(+), 46 deletions(-)
 create mode 100644 postcss.config.js
 create mode 100644 tailwind.config.js
```


## tailwind/now-what

We've got Tailwind and PostCSS installed,
but it's not connected to our website.
There are two things we need to do:

- make PostCSS part of our build process
- remove our existing CSS
- add tailwind

I'm curious what this site looks like with
no styles whatsoever. So we'll start with that.

### The site laid bare

Easiest thing to do is to remove all the CSS files.

```sh
philip@ehecatl: ~/projects/fresh/src/assets/css
[tailwind/now-what ]$ ls
code.css       footnotes.css  lists.css      prism/         tables.css
colors.css     headings.css   local.css      root.css       toc.css
dark.txt       layout.css     logo.css       styles.css
figures.css    light.txt      nav.css        swatches.md

philip@ehecatl: ~/projects/fresh/src/assets/css
[tailwind/now-what ]$ rm styles.css

philip@ehecatl: ~/projects/fresh/src/assets/css
[tailwind/now-what ]$ rm -rf *
```

Well, it doesn't look terrible.


### Adding PostCSS to our build

I'm borrowing from the `package.json` of
[this starter project][alpine]

This is what my build process looks like now

```json
"scripts": {
  "build": "rm -rf ./dist; eleventy",
  "serve": "npm run build && eleventy --serve",
  "debug": "DEBUG=* npx eleventy",
  "pstart": "eleventy --serve && postcss src/assets/css/tailwind.css --o _tmp/style.css --watch",
  "pbuild": "eleventy && postcss src/assets/css/tailwind.css --o dist/assets/css/styles.css"
}
```


## tailwind/styling

Well, we're here.

Using the [typography](https://tailwindcss.com/docs/typography-plugin)
plugin, but it's not not quite what we want.
So we want to define styles for the
tags that markdown generates.

We'll do it this way: [Adding Base Styles](https://tailwindcss.com/docs/adding-base-styles)


## So, I've been thinking

I'm spending a lot of time redefining
the same styles.
I'm not sure what the advantage is
for this kind of website.
Then I read this article,
[Why Tailwind Isn't for Me](https://dev.to/jaredcwhite/why-tailwind-isn-t-for-me-5c90)
which captured some of what
I was finding.

So, I'm stopping the Tailwind experiment here.


---
[tailwind]:             https://tailwindcss.com/
[installation guide]:   https://tailwindcss.com/docs/installation
[install-postcss]:      https://tailwindcss.com/docs/installation#installing-tailwind-css-as-a-post-css-plugin
[using-postcss]:        https://tailwindcss.com/docs/using-with-preprocessors#using-post-css-as-your-preprocessor
[goodbye-squarespace]:  https://sahilparikh.dev/posts/2020/moving-squarespace-eleventy/
[alpine-starter]:       https://github.com/gregwolanski/eleventy-tailwindcss-alpinejs-starter/
