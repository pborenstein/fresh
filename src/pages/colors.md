## Experiments


<button class="btn-dark">Dark</button>
<button class="btn-light">Light</button>
<button class="btn-system">System</button>

<style>
.flex-container {
  padding: 0;
  margin: 0;
  list-style: none;
  border: none;
  display: flex;
  flex-wrap: nowrap;
}

.flex-item {
  padding: 2px;
  width: 200px;
  height: 20px;
  margin: .5em;

  line-height: auto;
  color: white;
  font-weight: 400;
  font-size: 9px;
  font-family: monospace;
  text-align: center;
  word-break:break-all
}

:root {
  --color-pippin:         hsl(  0,  87%, 94%)     /* #fde2e2 */ ;
  --color-we-peep:        hsl(344,  52%, 92%)     /* #f5e0e6 */;
  --color-tapestry:       hsl(340,  37%, 59%)     /* #be718b */;
  --color-vin-rouge:      hsl(336,  48%, 42%)     /* #9e3861 */;
  --color-siren:          hsl(334, 100%, 25%)     /* #7f0036 */;
}
</style>

<ul class="flex-container">
  <li class="flex-item" style="background: var(--color-foreground)    ">color-foreground    </li>
  <li class="flex-item" style="background: var(--color-midforeground) ">color-midforeground </li>
  <li class="flex-item" style="background: var(--color-midground)     ">color-midground     </li>
  <li class="flex-item" style="background: var(--color-midbackground) ">color-midbackground </li>
  <li class="flex-item" style="background: var(--color-background)    ">color-background    </li>
</ul>

<ul class="flex-container">
  <li class="flex-item" style="background:var( --color-accent-1)">color-accent-1</li>
  <li class="flex-item" style="background:var( --color-accent-2)">color-accent-2</li>
  <li class="flex-item" style="background:var( --color-accent-3)">color-accent-3</li>
  <li class="flex-item" style="background:var( --color-accent-4)">color-accent-4</li>
  <li class="flex-item" style="background:var( --color-accent-5)">color-accent-5</li>
</ul>

## Bands

<ul class="flex-container">
  <li class="flex-item" style="background: var(--color-foreground)    "> </li>
  <li class="flex-item" style="background: var(--color-midforeground) "> </li>
  <li class="flex-item" style="background: var(--color-midground)     "> </li>
  <li class="flex-item" style="background: var(--color-midbackground) "> </li>
  <li class="flex-item" style="background: var(--color-background)    "> </li>
</ul>

<ul class="flex-container">
  <li class="flex-item" style="background:var( --color-accent-1)"> </li>
  <li class="flex-item" style="background:var( --color-accent-2)"> </li>
  <li class="flex-item" style="background:var( --color-accent-3)"> </li>
  <li class="flex-item" style="background:var( --color-accent-4)"> </li>
  <li class="flex-item" style="background:var( --color-accent-5)"> </li>
</ul>


## Table

| -\-font-table-heading<br>-\-font-heading<br>-\-font-sans-serif | -\-color-table-heading<br>-\-color-heading<br>-\-color-foreground                           |
| :------------------------------------------------------------- | :------------------------------------------------------------------------------------------ |
| `inputPath`                                                    | -\-color-table-odd<br>-\-color-midbackground<hr>-\-color-hr<br>-\-color-accent-3</code> |
| `outputPath`                                                   | -\-color-table-even<br>-\-color-background                                                  |
| `fileSlug`                                                     | -\-color-table-sep<br>-\-color-midground                                           |
[-\-font-table-caption<br>-\-font-heading<br>-\-color-table-caption<br>-\-color-accent-4][slug]

## Folds

accent
<ul class="flex-container">
  <li class="flex-item" style="background:var( --color-accent-1)">color-accent-1</li>
  <li class="flex-item" style="background:var( --color-accent-2)">color-accent-2</li>
  <li class="flex-item" style="background:var( --color-accent-3)">color-accent-3</li>
  <li class="flex-item" style="background:var( --color-accent-4)">color-accent-4</li>
  <li class="flex-item" style="background:var( --color-accent-5)">color-accent-5</li>
</ul>

A line of text

!!! Folds -\-color-fold-head -\-color-accent-4 (dk) -\-color-accent-2 (lt)

-\-color-fold-marker -\-color-accent-2 (dk) -\-color-accent-5(lt)

-\-color-fold-frame -\-color-accent-3 (dk) -\-color-accent-2(lt)

    !!! Expanding text
    Expanding text looks like this
    !!!
!!!

Some fake text so we don't butt into the footer.


<ul class="flex-container">
  <li class="flex-item" style="background: var(--color-foreground)    "> </li>
  <li class="flex-item" style="background: var(--color-midforeground) "> </li>
  <li class="flex-item" style="background: var(--color-midground)     "> </li>
  <li class="flex-item" style="background: var(--color-midbackground) "> </li>
  <li class="flex-item" style="background: var(--color-background)    "> </li>
</ul>

<ul class="flex-container">
  <li class="flex-item" style="background:var( --color-accent-1)"> </li>
  <li class="flex-item" style="background:var( --color-accent-2)"> </li>
  <li class="flex-item" style="background:var( --color-accent-3)"> </li>
  <li class="flex-item" style="background:var( --color-accent-4)"> </li>
  <li class="flex-item" style="background:var( --color-accent-5)"> </li>
</ul>

