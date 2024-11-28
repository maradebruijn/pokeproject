<script src="./chart.svelte">

//alles wat ik van andere bestanden pak
import "./style.css";
import * as d3 from 'd3';
import { onMount } from "svelte";
import PokeBox1 from "./pokebox1.svelte"
import PokeBox2 from "./pokebox2.svelte"
import Chart from "./chart.svelte"

//probeersels
          // for (let i = 1; i <19; i++){
          //   fetchData(i)
          // }

          // /* Algemeen object met alle pokemons */
          // let allPokemons = [];

          // /* Loopje om 18x die data te fetchen, pokemonlijst pushen in object */
          // async function fetchData(counter){

          //   const response = await fetch("https://pokeapi.co/api/v2/type/" + counter)
          //   const normal = await response.json();

          //   let pokemonList = normal.pokemon.map(entry => entry.pokemon.name);
        

          //   /* Push pokemonlist telkens in allPokemons */
          //   allPokemons.push(pokemonList)
          // //   allPokemons.forEach(pokemonList => console.log(name))

          // }

          // console.log(allPokemons)
        

      //     import Pokedex from 'pokedex-promise-v2';
      //     const P = new Pokedex();

      //     P.getPokemonByName(['eevee', 'ditto']) // with Promise
      //   .then((response) => {
      //     console.log(response);
      //   })
      //   .catch((error) => {
      //     console.log('There was an ERROR: ', error);
      //   });



    

</script>

<main>
<h1>Pokemon battle</h1>
<h2>Contestants</h2>

<section class ="battle">

  <PokeBox1 />
  <h3 class="vs">VS</h3>
  <PokeBox2 />

</section>
<Chart />
</main>

