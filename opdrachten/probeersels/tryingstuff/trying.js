// const Normal = 'https://pokeapi.co/api/v2/type/1'
// let normalPokes = Normal.length
// console.log(normalPokes)
//^^^^^^^^^^^^
//hier kijk ik of de functie die ik wil gebruiken werkt, en of 
//ik kan connecting met de data bas

//----------------------------------------------------
// async function fetchNormal() {
//     const Normal = 'https://pokeapi.co/api/v2/type/1';
//     try {
//       const response = await fetch(Normal);
//       if (!response.ok) {
//         throw new Error(`Response status: ${response.status}`);
//       }
  
//       const json = await response.json();
//       console.log(json);
//     } catch (error) {
//       console.error(error.message);
//     }
//   }
// function displayNormal() {
//     const Normal2 = fetchNormal()

    
//    console.log(Normal2)
//   }
   
//   displayNormal();

// ^^^^^^^^^^^^^^^^^^^^^
//connecting met de database via fetch

//------------------------------------------------------
// import { fetchNormal } from './database.js'

// async function displayNormal() {
//  const types = await fetchNormal()
//  return types
// }


// function workpls(total, amount){

//   return total + amount.types
// }
// let newdata = displayNormal().reduce(workpls);

// console.log(newdata);
// ^^^^^^^^^^^^^^^^^^^^
//poging 1 om de hoeveelheid pokemon in dit type te tellen


// import { fetchNormal } from './database.js'

// async function displayNormal() {
//  const types = await fetchNormal()
//  return types
// }


// function workpls(total, amount){

//   return total + amount.types
// }
// let newdata = displayNormal().reduce(workpls, 0);

// console.log(newdata);
//^^^^^^^^^^^^^^^^^^^^^^^^^^
//poging 2


import { fetchNormal } from './database.js'

async function displayNormal() {
 const types = await fetchNormal()
 return types
}


function workpls(){

  return pokemon.length
}


let newdata = displayNormal().reduce(workpls);

console.log(fetchNormal());