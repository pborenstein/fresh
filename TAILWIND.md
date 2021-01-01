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

[tailwind]:             https://tailwindcss.com/
[installation guide]:   https://tailwindcss.com/docs/installation
[install-postcss]:      https://tailwindcss.com/docs/installation#installing-tailwind-css-as-a-post-css-plugin
[using-postcss]:        https://tailwindcss.com/docs/using-with-preprocessors#using-post-css-as-your-preprocessor
[goodbye-squarespace]:  https://sahilparikh.dev/posts/2020/moving-squarespace-eleventy/
