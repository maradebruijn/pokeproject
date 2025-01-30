<script>

    import { onMount } from "svelte";
    import * as d3 from 'd3';
    

    //hier maak ik de variabelen aan die ik later met behulp van een functie vul
    //ik maak ze hier alvast aan, zodat ik ze later buiten de functie eventueel zou kunnen gebruiken
    
        let url;
        let pokemons= ["eevee", "sylveon", "bulbasaur", "ogerpon", "arceus"]; //random array die doorlinkt naar de API van de gekozen Pokémon
        
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

        //dit zijn de variabelen waarmee ik mijn searchbar wilde maken
        //helaas is mij dit uitiendelijk niet gelukt

            // let searchInput = document.querySelector('#search');
            // let searchButton = document.querySelector('#submit');
            // let searchTerm = $state('');
    
            //  function selectPoke(){ //deze functie zorgt ervoor dat er een random Pokémon uit mijn array geselecteerd wordt

            //     poke1 = pokemons[Math.floor(Math.random() * pokemons.length)]
            //     console.log(poke1)

            // }

            // selectPoke();



        onMount(() => {

          let button = document.getElementById("pokeButton");
          let poke1 = "pikachu";

          button.addEventListener ("click", function returnText(){
            poke1 = document.getElementById("userInput").value;
            getPoke();
            getMoves();
            statCount();
            drawChart();
          })

          async function getPoke() { //met deze functie haal ik de api op, en voeg ik een eerste batch met variabelen toe
            url = "https://pokeapi.co/api/v2/pokemon/"+ poke1;
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
    
          async function getMoves() { //deze functie zorgt ervoor dat er 4 random 'moves' (aanvallen) uitgekozen worden
    
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
	
          async function statCount() { //hier worden er de statestieken van een Pokémon opgehaald, en wordt er een "Power" berekend (statSum)
    
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

          //https://www.explainthis.io/en/swe/find-average-in-an-array

           async function drawChart() { //** nieuw ** Grafiek van de statistics
    
            try {
              const response = await fetch(url);
              if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
              }
       
              const json = await response.json();

            d3.select("#chart").selectAll('svg').remove();
            //https://stackoverflow.com/questions/67107991/how-to-remove-old-data-rect-from-d3-chart
    
            const margin = { top: 0, right: 0, bottom: 0, left: 0 },
              width = 500 - margin.left - margin.right,
              height = 500 - margin.top - margin.bottom,
              innerRadius = 40,
              outerRadius = Math.min(width, height) / 3;

            const svg = d3.select("#chart")
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

        

        // dit is een functie waarmee ik de searchbar zou willen laten werken
                    // function selectPoke(){

                    //     // poke1 = searchInput.value;
                    //     // console.log(poke1)

                    // }


   


        </script>



    <section class = "pokemon">

      <input id="userInput" type="text" placeholder="Choose your Pokémon">
      <button id="pokeButton">Submit</button>

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

                <div id="chart"></div>

        </section>
      
    </section>

    