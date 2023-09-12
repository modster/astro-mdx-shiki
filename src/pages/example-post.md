---
import header from "$lib/header.js"


---
<layout>
<header />

 



<main> // fills default <slot /> in layout
## Title 




<Chart
  :chart-data="chartData"
  :options="chartOptions"
  :height="300"
  :width="600"
  :plugins="chartPlugins"
  :legend="chartLegend"
  :type="chartType">
    [there should be a chart here](link.to/chart) //fallback
</Chart>
<slot name="citations"></slot>


<main>

###### posted to: github, reddit, twitter, newsletter, bolg.

</layout>