<script>
    //de code in dit bestand is bijna identiek aan die in pokebox1, waarbij het enige verschil de array "pokemons" is
    //ik kon helaas niet uitvogelen hoe ik dit zou kunnen "mergen" naar 1 bestand

    import { onMount } from "svelte";
    import * as d3 from 'd3';

    
        let url;
        let pokemons= ["simisear", "pikachu", "palkia", "litten", "charizard"];
        let poke2;
        let pokeName;
        let pokeTypes= [];
        let pokeSprite;
        let pokeMoves = [];
        let pokeHeight;
        let pokeWeight;

        let movesLength;
        let pokeMove;
        let pokeMove2;
        let pokeMove3;
        let pokeMove4;
        let pokeRealMoves = [];

        let pokeStats = [];
        let statsName = [];
        let statSum;
        let stats = [];


        function selectPoke(){

          poke2 = pokemons[Math.floor(Math.random() * pokemons.length)]
          console.log(poke2)

          }

          selectPoke()
    
        onMount(() => {

          async function getPoke() {
            url = "https://pokeapi.co/api/v2/pokemon/"+ poke2;
            try {
              const response = await fetch(url);

              if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
              }
       
              const json = await response.json();
    
              pokeName = json.name.charAt(0).toUpperCase() + json.name.slice(1).toLowerCase()
              pokeTypes = json.types.map(entry => entry.type.name);
              pokeSprite = json.sprites.front_default
              pokeHeight = json.height
              pokeWeight = json.weight
              
            } catch (error) {
              console.error(error.message);
            }
          }
          getPoke();
    
          async function getMoves() {
    
            try {
              const response = await fetch(url);
              if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
              }
       
              const json = await response.json();
    
    
              pokeMoves = json.moves.map(entry => entry.move.name);
              movesLength = pokeMoves.length;
              pokeMove = pokeMoves[Math.floor(Math.random() * movesLength)]
              pokeMove2 = pokeMoves[Math.floor(Math.random() * movesLength)]
              pokeMove3 = pokeMoves[Math.floor(Math.random() * movesLength)]
              pokeMove4 = pokeMoves[Math.floor(Math.random() * movesLength)]
              pokeRealMoves = [pokeMove, pokeMove2, pokeMove3, pokeMove4]
    
    
            } catch (error) {
              console.error(error.message);
            }
          }
          getMoves();


          async function statCount() {
    
            try {
              const response = await fetch(url);
              if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
              }
       
              const json = await response.json();
    
              pokeStats = json.stats.map(entry => entry.base_stat);
              statsName = json.stats.map(entry => entry.stat.name);
              stats = json.stats.map(stat => ({
                name: stat.stat.name,
                value: stat.base_stat, }));
    
    
              
                statSum = 0;
                for (let i = 0; i < pokeStats.length; i++) {
                    statSum += pokeStats[i];
                }
                

                console.log(statSum);
            
    
            } catch (error) {
              console.error(error.message);
            }
          }

          statCount();
	
          async function drawChart() { //** nieuw ** Grafiek van de statistics
    
            try {
              const response = await fetch(url);
              if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
              }

              const json = await response.json();

            const margin = { top: 0, right: 0, bottom: 0, left: 0 },
              width = 500 - margin.left - margin.right,
              height = 500 - margin.top - margin.bottom,
              innerRadius = 40,
              outerRadius = Math.min(width, height) / 3;


  //             var svg = d3.select( '#D3line svg' );
  //  if ( !svg ) {

  //     svg = d3.select("#D3line").append("svg")
  //                                     .attr("width", w)
  //                                     .attr("height", h);
  //  } 
  // deze code komt van https://stackoverflow.com/questions/13544618/d3js-code-when-called-twice-duplicates-the-graph-instead-of-refreshing/13544662#13544662
  // en is hieronder toegepast

  const svg = d3.select("#chart2")
              .append("svg")
              .attr("width", width + margin.left + margin.right)
              .attr("height", height + margin.top + margin.bottom)
              .append("g")
              .attr("transform", `translate(${width / 2+margin.left},${height / 2+margin.top})`);

            const x = d3.scaleBand()
              .range([0, 2 * Math.PI])
              .domain(stats.map(d => d.name));

            const y = d3.scaleRadial()
              .range([innerRadius, outerRadius])
              .domain([0, 120]);

            svg.append("g")
              .selectAll("path")
              .data(stats)
              .join("path")
              .attr("fill", "#c3c3ff")
              .attr("d", d3.arc()
                .innerRadius(innerRadius)
                .outerRadius(d => y(d.value))
                .startAngle(d => x(d.name))
                .endAngle(d => x(d.name) + x.bandwidth())
                .padAngle(0.01)
                .padRadius(innerRadius));

              svg.append("g")
                .selectAll("g")
                .data(stats)
                .join("g")
                  .attr("text-anchor", function(d) { return (x(d.name) + x.bandwidth() / 2 + Math.PI) % (2 * Math.PI) < Math.PI ? "end" : "start"; })
                  .attr("transform", function(d) { return "rotate(" + ((x(d.name) + x.bandwidth() / 2) * 180 / Math.PI - 90) + ")"+"translate(" + (y(innerRadius) - 30) + ",0)"; })
                .append("text")
                  .text(function(d){return(d.name)})
                  .attr("transform", function(d) { return (x(d.name) + x.bandwidth() / 2 + Math.PI) % (2 * Math.PI) < Math.PI ? "rotate(180)" : "rotate(0)"; })
                  .style("font-size", "11px")
                  .attr("alignment-baseline", "middle")

            

            } catch (error) {
              console.error(error.message);
            }
          }

 //https://d3-graph-gallery.com/graph/circular_barplot_basic.html



  drawChart();

        });


        </script>

    
    <section class = "pokemon">

        <section class="firstHalf">
            <h2>{pokeName} </h2> 
    
            {#each pokeTypes as types, i (types)}
            <!-- https://joshtronic.com/2022/02/20/how-to-display-a-javascript-array-in-html/ -->

              <p class="types"> {types} </p>
    
            {/each}
    
            <br>

            <img src={pokeSprite} alt="{pokeName} sprite front facing">
            <p>Power: {statSum} </p>
    
        </section>

        <section class="secondHalf">
                
            <h3> Moves </h3>

            {#each pokeRealMoves as dmoves, i (i)}
            <!-- https://stackoverflow.com/questions/78243392/svelte-how-to-have-duplicate-keys-in-a-keyed-each -->
                <ul>
                <li> {dmoves} </li>
                </ul>
            {/each}

            <h3>Statistics</h3>

                <section class = "stats">
                    
                    <section>
                        {#each statsName as statName, i (statName)}

                            <p class="statName"> {statName}: </p>

                        {/each}
                    </section>
                    <section>
                        {#each pokeStats as stats, i (i)}
                
                            <p class="amount"> {stats} </p>
                
                        {/each}
                    </section>
            
                </section>

                <div id="chart2"></div>

        </section>

    </section>