<script>

    import { onMount } from "svelte";
    
        let url;
        let poke2 = "simisear";
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
        // let searchInput = document.querySelector('#search');
        // let searchButton = document.querySelector('#submit');
        // let searchTerm = $state('');
    
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
              pokeStats = json.stats.map(entry => entry.base_stat);
    
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
	

        });

        
        // function selectPoke(){

        //     // poke1 = searchInput.value;
        //     // console.log(poke1)

            
        //     // do something with the search term (e.g. redirect to a search results page)
        //     console.log(`Searching for "${searchTerm}"...`);

        // }

        </script>

        <!-- <section class="searchBar">

            <input bind:value={poke1} id="search"
            placeholder="Search Pokémon...">
            <button id="submit" on:click={selectPoke}>Search</button>
          
          </section> -->
    
    <section class = "pokemon">

        <section class="firstHalf">
            <h2>{pokeName} </h2> 
    
            {#each pokeTypes as types, i (types)}
    
              <p class="types"> {types} </p>
    
            {/each}
    
            <br>

            <img src={pokeSprite} alt="{pokeName} sprite front facing">
    
        </section>

    <section class="secondHalf">
<h3> Moves </h3>

        {#each pokeRealMoves as dmoves, i (i)}
        <!-- https://stackoverflow.com/questions/78243392/svelte-how-to-have-duplicate-keys-in-a-keyed-each -->
            <ul>
            <li> {dmoves} </li>
            </ul>
        {/each}
    </section>
</section>