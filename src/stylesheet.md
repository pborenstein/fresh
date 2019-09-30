---
date: 2018-01-02T12:34:56.123-05:00

title: Stylesheet
layout: layouts/page.njk
tags:
  _nav
---
<!-- markdownlint-disable  -->

# {{title}} &mdash; H1

Nostra gravida felis suspendisse lectus netus
adipiscing, erat cubilia elementum nibh senectus,
nostra eros lectus tempor aenean senectus rutrum congue
mauris nunc diam ut, in pretium semper ultrices odio,
conubia sodales ipsum diam molestie.

1.  one
2.  two
3.  three
4.  four

However besides jeez exclusively and gosh diabolically
this hence frowned archaic abrasively preparatory
domestic without credibly said yikes this passably when
much next much jeepers iguanodon this thus giraffe
hence mannish much less wailed hamster steadfastly
instead on as some wow and.

Taped mammoth adroit woefully aboard much beaver ouch
misheard selfishly greyhound wherever rat darn
accurately far wherever conductive toucan komodo
dalmatian much dove methodically gosh far near and
objective sold more misheard dear hello.

## Lists, graphs, and tables &mdash; H2

Ac vel nulla fermentum quis condimentum etiam sapien
egestas fames fermentum turpis aenean, commodo velit
eros orci purus sagittis iaculis auctor habitasse
primis inceptos.

### Lists &mdash; H3

- Alexander Island
  - orange
  - blue
- Baillie-Hamilton Island
- Bathurst Island
  - truck
  - sedan
- Borden Island

Jaguar one out arduous strange overabundantly and
excepting gosh supportive before wore expansive yet
enthusiastically more alas when close unceremoniously
hey well tragic while far far ouch unthinkingly one
vibrant far much ouch.

### Graphs &mdash; H3

```mermaid
graph TD;
    A(Start)-->B;
    A-->C;
    B-->D[End];
    C-.->D;
```

<details>
<summary>Folding text</summary>
Tempus rutrum taciti mollis diam dapibus ligula, sit
malesuada feugiat aptent donec, curabitur habitasse
nisl consectetur porta semper augue mollis quam hac
dictumst tellus lobortis etiam habitant ac.
</details>

```js
const decycle = require('json-cycle').decycle

module.exports = function pdump(obj) {
  let decycled = JSON.stringify(decycle(obj), null, 2)

  return decycled;
}
```

### Tables  &mdash; H3

Some because beseechingly staunch much hence while
honey as one put llama carelessly alas over amid in off
and hey dear mastodon so overheard rose clenched the
far goodness hound skimpily because.

| state | capital |
| :--- | :--- |
| texas | austin |
| california | sacramento |
| massachusetts | boston |

Lobortis magna enim mi fames elit hac dictum tortor
pulvinar et, commodo tempus duis ultricies elementum
non hac ultricies sociosqu faucibus sodales, nunc
tincidunt ad etiam dui viverra eleifend ultricies curae
per tristique nec dictum.


| Property          | Description                                                                                                                                                                 |
| :---------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `inputPath`       | Path to this file including the `input` directory.<hr><code class="phony">./src/articles/finding-oz.md</code>                                                               |
| `outputPath`      | Path to the rendered file.<hr><code class="phony">articles/finding-oz/index.html</code>                                                                                     |
| `fileSlug`        | Short name from the file name. [There are rules](https://www.11ty.io/docs/data/#fileslug). <hr><code class="phony">./src/articles/finding-oz.md</code>                      |
[table caption]

## Date formats &mdash; H2

| prettyDate<br>format string | example |
| :----- | :------ |
| `date`                       | {{page.date}}  |
| `'iso'` |  {{page.date | prettyDate('iso') }} |
| `'isoDate'` |  {{page.date | prettyDate('isoDate') }} |
| `'isoTime'` |  {{page.date | prettyDate('isoTime') }} |
| `'DmY' ` |  {{page.date | prettyDate('DmY') }} |
| `'DMY' ` |  {{page.date | prettyDate('DMY') }} |
| `'DmYt'` |  {{page.date | prettyDate('DmYt') }} |
| `'DMYt'` |  {{page.date | prettyDate('DMYt') }} |
| `'FFFF'` |  {{page.date | prettyDate('FFFF') }} |
| `'DDDD'` |  {{page.date | prettyDate('DDDD') }} |
| `'relative'` |  {{page.date | prettyDate('relative') }} |
| `'relativeCalendar'` |  {{page.date | prettyDate('relativeCalendar') }} |
| `'http'` |  {{page.date | prettyDate('http') }} |
| `'rfc2822'` |  {{page.date | prettyDate('rfc2822') }} |
| slug | {{  page.date  | prettyDate('slug')}} |
| locale | {{  page.date  | prettyDate('locale')}} |
[ formatting dates<br>with `prettyDate`]

## Weights &mdash; H2

<div style='column-count: 3'>
<p style="font-weight: 100; margin-top: 0">
Taped mammoth adroit woefully aboard much beaver ouch
misheard selfishly greyhound wherever rat darn
domestic without credibly said yikes this passably when
much next much jeepers iguanodon this thus giraffe
hence mannish much less wailed hamster steadfastly 100
</p>

<p style="font-weight: 200">
Taped mammoth adroit woefully aboard much beaver ouch
misheard selfishly greyhound wherever rat darn
domestic without credibly said yikes this passably when
much next much jeepers iguanodon this thus giraffe
hence mannish much less wailed hamster steadfastly 200
</p>

<p style="font-weight: 300">
Taped mammoth adroit woefully aboard much beaver ouch
misheard selfishly greyhound wherever rat darn
domestic without credibly said yikes this passably when
much next much jeepers iguanodon this thus giraffe
hence mannish much less wailed hamster steadfastly 300
</p>

<p style="font-weight: 400">
Taped mammoth adroit woefully aboard much beaver ouch
misheard selfishly greyhound wherever rat darn
domestic without credibly said yikes this passably when
much next much jeepers iguanodon this thus giraffe
hence mannish much less wailed hamster steadfastly 400
</p>

<p style="font-weight: 500">
Taped mammoth adroit woefully aboard much beaver ouch
misheard selfishly greyhound wherever rat darn
domestic without credibly said yikes this passably when
much next much jeepers iguanodon this thus giraffe
hence mannish much less wailed hamster steadfastly 500
</p>

<p style="font-weight: 600">
Taped mammoth adroit woefully aboard much beaver ouch
misheard selfishly greyhound wherever rat darn
domestic without credibly said yikes this passably when
much next much jeepers iguanodon this thus giraffe
hence mannish much less wailed hamster steadfastly 600
</p>

<p style="font-weight: 700">
Taped mammoth adroit woefully aboard much beaver ouch
misheard selfishly greyhound wherever rat darn
domestic without credibly said yikes this passably when
much next much jeepers iguanodon this thus giraffe
hence mannish much less wailed hamster steadfastly 700
</p>

<p style="font-weight: 800">
Taped mammoth adroit woefully aboard much beaver ouch
misheard selfishly greyhound wherever rat darn
domestic without credibly said yikes this passably when
much next much jeepers iguanodon this thus giraffe
hence mannish much less wailed hamster steadfastly 800
</p>

<p style="font-weight: 900">
Taped mammoth adroit woefully aboard much beaver ouch
misheard selfishly greyhound wherever rat darn
domestic without credibly said yikes this passably when
much next much jeepers iguanodon this thus giraffe
hence mannish much less wailed hamster steadfastly 900
</p>

</div>

## Blockquote &mdash; H2

Tempus rutrum taciti mollis diam dapibus ligula, sit
malesuada feugiat aptent donec, curabitur habitasse
nisl consectetur porta semper augue mollis quam hac

> We shall come back, no doubt, to walk down the Row and watch young people on the tennis courts by the clump of mimosas and walk down the beach by the bay, where the diving floats lift gently in the sun, and on out to the pine grove, where the needles thick on the ground will deaden the footfall so that we shall move among the trees as soundlessly as smoke. But that will be a long time from now, and soon now we shall  go out of the house and go into the convulsion of the world, out of history into history and the awful responsibility of Time.

Tempus rutrum taciti mollis diam dapibus ligula, sit
malesuada feugiat aptent donec, curabitur habitasse
nisl consectetur porta semper augue mollis quam hac

> Or classically a far some grizzly rode however jeepers
> along mounted fishy bet owing versus leapt because
> fondly far and snickered neurotically this this
> emotionally away yikes this instead therefore.
>
> ```
> some { code
>   in a
>   blockquote
> }
> ```


### Heading 3

this hence frowned archaic abrasively preparatory
domestic without credibly said yikes this passably when
much next much jeepers iguanodon this thus giraffe
hence mannish much less wailed hamster steadfastly
instead on as some wow and.



#### Heading 4

Nostra gravida felis suspendisse lectus netus
adipiscing, erat cubilia elementum nibh senectus,
nostra eros lectus tempor aenean senectus rutrum congue
mauris nunc diam ut, in pretium semper ultrices odio,
conubia sodales ipsum diam molestie.

<details>
<summary>Some code</summary>

``` js
const decycle = require('json-cycle').decycle
const debug = require("debug")("catlist");


module.exports = function pdump(obj) {
  let decycled = JSON.stringify(decycle(obj), null, 2)

  return decycled;
}
```
</details>


##### Heading 5

Don't use Heading 5

###### Heading 6

Don't use Heading 6




