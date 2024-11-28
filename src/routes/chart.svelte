<script>
    //in dit bestand heb ik een poging gedaan om een chart te creëren,
    //wat helaas niet gelukt is
    //het grootste gedeelte van deze code komt van:
    //https://d3-graph-gallery.com/graph/circular_barplot_basic.html

import "./style.css";
import { onMount } from "svelte";
import * as d3 from 'd3';


let stats = [];



    //     let json;
        let pokemons= ["eevee", "sylveon", "bulbasaur", "ogerpon", "arceus"]; //random array die doorlinkt naar de API van de gekozen Pokémon
        let poke1;
    //     let pokeStats = [];
    //     let statsName = [];
    //     let statSum;

    function selectPoke(){

        poke1 = pokemons[Math.floor(Math.random() * pokemons.length)]
        console.log(poke1)

        }

selectPoke()

    onMount( async() => {

        const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + poke1);
    const data = await response.json();
    stats = data.stats.map(stat => ({
      name: stat.stat.name,
      value: stat.base_stat,
    }));

      drawChart();
      });



    //       async function getStats() {
    //        let url = "https://pokeapi.co/api/v2/pokemon/"+ poke1;
    //         try {
    //           const response = await fetch(url);
    //           if (!response.ok) {
    //             throw new Error(`Response status: ${response.status}`);
    //           }
       
    //           json = await response.json();
    
    //           pokeStats = json.stats.map(entry => entry.base_stat);
    //           statsName = json.stats.map(entry => entry.stat.name);
    
              
    //             statSum = 0;
    //             for (let i = 0; i < pokeStats.length; i++) {
    //                 statSum += pokeStats[i];
    //             }
                

    //             console.log(statsName);
            
    
    //         } catch (error) {
    //           console.error(error.message);
    //         }
    //       }
    //       getStats()





    function drawChart() {
    const margin = { top: 0, right: 0, bottom: 0, left: 0 },
      width = 460 - margin.left - margin.right,
      height = 460 - margin.top - margin.bottom,
      innerRadius = 80,
      outerRadius = Math.min(width, height) / 2;

    const svg = d3.select("#chart")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${width / 2},${height / 2})`);

    const x = d3.scaleBand()
      .range([0, 2 * Math.PI])
      .domain(stats.map(d => d.name));

    const y = d3.scaleRadial()
      .range([innerRadius, outerRadius])
      .domain([0, d3.max(stats, d => d.value)]);

    svg.append("g")
      .selectAll("path")
      .data(stats)
      .join("path")
      .attr("fill", "#69b3a2")
      .attr("d", d3.arc()
        .innerRadius(innerRadius)
        .outerRadius(d => y(d.value))
        .startAngle(d => x(d.name))
        .endAngle(d => x(d.name) + x.bandwidth())
        .padAngle(0.01)
        .padRadius(innerRadius));
    };

    console.log(poke1)
    
    </script>

<div id="chart"></div>