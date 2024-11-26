<script src="./chart.svelte">
import "./style.css";
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

    import PokeBox1 from "./pokebox1.svelte"
    import PokeBox2 from "./pokebox2.svelte"
    //import SearchBar from "./searchbar.svelte"
    //import { poke2Stats } as Stats2 from "./pokebox2.svelte"


    



      // setTimeout(json, 0)

      // function battling(){

        
      //   let sum = 0;

      //     for (let i = 0; i < poke2Stats.length; i++) {
      //       sum += poke2Stats[i];
      //      }

      //   console.log(poke2Stats);

      // }

      // //https://sentry.io/answers/how-to-find-the-sum-of-an-array-of-numbers/#:~:text=Using%20a%20for%20loop&text=const%20arr%20%3D%20%5B23%2C%2034,to%20a%20variable%20called%20sum%20.
      
      // battling()
    

</script>


<h1>Pokemon battle</h1>
<h2>Contestants</h2>

<section class ="battle">

  <PokeBox1 />
  <h3 class="vs">VS</h3>
  <PokeBox2 />

</section>


