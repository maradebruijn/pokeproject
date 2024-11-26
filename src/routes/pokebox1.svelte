<script>

    import { onMount } from "svelte";

    //hier maak ik de variabelen aan die ik later met behulp van een functie vul
    //ik maak ze hier alvast aan, zodat ik ze later buiten de functie eventueel zou kunnen hergebruiken
    
        let url;
        let pokemons= ["eevee", "sylveon", "bulbasaur", "ogerpon", "arceus"]; //random array die doorlinkt naar de API van de gekozen Pokémon
        let poke1;
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

        //dit zijn de variabelen waarmee ik mijn searchbar wilde maken
        //helaas is mij dit uitiendelijk niet gelukt

        // let searchInput = document.querySelector('#search');
        // let searchButton = document.querySelector('#submit');
        // let searchTerm = $state('');
    
        onMount(() => {

            function selectPoke(){

            poke1 = pokemons[Math.floor(Math.random() * pokemons.length)]
            console.log(poke1)

            }

            selectPoke()



          async function getPoke() {
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
        });

        // dit is de functie waarmee ik de searchbar zou willen laten werken
            // function selectPoke(){

            //     // poke1 = searchInput.value;
            //     // console.log(poke1)

            // }

        </script>

        <!-- 
        Dit is de html van mijn poging om een searchbar te maken

            <section class="searchBar">

                <input bind:value={poke1} id="search"
                placeholder="Search Pokémon...">
                <button id="submit" on:click={selectPoke}>Search</button>
            
            </section> 
        -->
    
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
        </section>

    </section>