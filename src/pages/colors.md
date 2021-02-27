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
  height: 100px;
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

foreground
<ul class="flex-container">
  <li class="flex-item" style="background: var(--color-foreground)          ">color-foreground</li>
  <li class="flex-item" style="background: var(--color-foreground-lighter)  ">color-foreground-lighter</li>
  <li class="flex-item" style="background: var(--color-foreground-lightest) ">color-foreground-lightest</li>
</ul>

background
<ul class="flex-container">
  <li class="flex-item" style="background: var(--color-background-darkest)"><p>color-background-darkest</p></li>
  <li class="flex-item" style="background: var(--color-background-darker) ">color-background-darker</li>
  <li class="flex-item" style="background: var(--color-background)        ">color-background</li>
</ul>

accent
<ul class="flex-container">
  <li class="flex-item" style="background:var( --color-accent-lightest )">color-accent-lightest</li>
  <li class="flex-item" style="background:var( --color-accent-lighter  )">color-accent-lighter </li>
  <li class="flex-item" style="background:var( --color-accent          )">color-accent         </li>
  <li class="flex-item" style="background:var( --color-accent-darker   )">color-accent-darker  </li>
  <li class="flex-item" style="background:var( --color-accent-darkest  )">color-accent-darkest </li>
</ul>

pborenstein.com
<ul class="flex-container">
  <li class="flex-item" style="background:var(--color-pippin        )">--color-pippin        </li>
  <li class="flex-item" style="background:var(--color-we-peep       )">--color-we-peep       </li>
  <li class="flex-item" style="background:var(--color-tapestry      )">--color-tapestry      </li>
  <li class="flex-item" style="background:var(--color-vin-rouge     )">--color-vin-rouge     </li>
  <li class="flex-item" style="background:var(--color-siren         )">--color-siren         </li>
</ul>

