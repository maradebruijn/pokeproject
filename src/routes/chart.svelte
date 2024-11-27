<script>
    //in dit bestand heb ik een poging gedaan om een chart te creëren,
    //wat helaas niet gelukt is
    //het grootste gedeelte van deze code komt van:
    //https://d3-graph-gallery.com/graph/circular_barplot_basic.html


import { onMount } from "svelte";
import * as d3 from 'd3';



        let json;
        let pokemons= ["eevee", "sylveon", "bulbasaur", "ogerpon", "arceus"]; //random array die doorlinkt naar de API van de gekozen Pokémon
        let poke1;
        let pokeStats = [];
        let statsName = [];
        let statSum;


    onMount(() => {

            function selectPoke(){

            poke1 = pokemons[Math.floor(Math.random() * pokemons.length)]
            console.log(poke1)

            }

            selectPoke()



          async function getStats() {
           let url = "https://pokeapi.co/api/v2/pokemon/"+ poke1;
            try {
              const response = await fetch(url);
              if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
              }
       
              json = await response.json();
    
              pokeStats = json.stats.map(entry => entry.base_stat);
              statsName = json.stats.map(entry => entry.stat.name);
    
              
                statSum = 0;
                for (let i = 0; i < pokeStats.length; i++) {
                    statSum += pokeStats[i];
                }
                

                console.log(statsName);
            
    
            } catch (error) {
              console.error(error.message);
            }
          }
          getStats()

                
                const margin = {top: 10, right: 10, bottom: 10, left: 10},
                    width = 460 - margin.left - margin.right,
                    height = 460 - margin.top - margin.bottom,
                    innerRadius = 80,
                    outerRadius = Math.min(width, height) / 2;   
                
                const svg = d3.select("#my_dataviz")
                .append("svg")
                    .attr("width", width + margin.left + margin.right)
                    .attr("height", height + margin.top + margin.bottom)
                .append("g")
                    .attr("transform", `translate(${width/2},${height/2+100})`); 
                
    
    
    
     async function drawChart() {
           let url = "https://pokeapi.co/api/v2/pokemon/"+ poke1;
            try {
              const response = await fetch(url);
              if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
              }
       
              json = await response.json();
    
      // X scale
      const x = d3.scaleBand()
          .range([0, 2 * Math.PI])    
          .align(0)                 
          .domain(json.stats.map(entry => entry.base_stat)); 
    
      // Y scale
      const y = d3.scaleRadial()
          .range([innerRadius, outerRadius])   
          .domain([0, 10000]); 
    
      // Add bars
      svg.append("g")
        .selectAll("path")
        .data(json)
        .join("path")
          .attr("fill", "#69b3a2")
          .attr("entry", d3.arc()     
              .innerRadius(innerRadius)
              .outerRadius(entry => y(entry.base_stat))
              .startAngle(entry => x(entry.base_stat))
              .endAngle(entry => x(entry.base_stat) + x.bandwidth())
              .padAngle(0.01)
              .padRadius(innerRadius))

              console.log(json)
    
            } catch (error) {
              console.error(error.message);
            }
          }
          drawChart()
});
    
    </script>

<div id="my_dataviz"></div>