// fetch('https://pokeapi.co/api/v2/type/1')
// .then((response) => response.json())
// .then((data))


// console.log(data)

const totalPokemon = 2

fetch(`https://pokeapi.co/api/v2/type?limit${totalPokemon}`)
.then((response) => response.json())
.then((data) => {
    allPokemons = data.results;
    console.log(data)
})

