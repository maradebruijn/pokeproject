const data = [
    {
        name: "robert",
        age: "29",
        residence: "amsterdam",
        siblings: 1,
        work: {
            title: "Lecturer",
            employer: "Hogeschool van Amsterdam"
        }
    },
    {
        name: "berend",
        age: "32",
        residence: "rotterdam",
        siblings: 0,
        work: {
            title: "Front-end Developer",
            employer: "DEPT"
        }
    },
    {
        name: "ubaida",
        age: "26",
        residence: "Amersfoort",
        siblings: 4,
        work: {
            title: "Project Manager",
            employer: "Clarify"
        }
    }
];



/* Filter by age, normalize capitals in names, convert ages to numbers, remove work.
    const data = [
        {
            name: "Robert",
            age: 29,
            siblings: 1,
            residence: "Amsterdam",
        },
        {
            name: "Berend",
            age: 32,
            siblings: 0,
            residence: "Rotterdam",
        }
    ];
*/

let newdata;



// hulpfunctie die objecten uit array data transformeret naar het gewenste formaat
// en het object teruggeeft
function transformPerson(myPerson) {

    return myPerson.map(person =>{

        const name = person.name.charAt(0).toUpperCase() + person.name.slice(1).toLowerCase()

        const age = Number(person.age)

        const residence = person.residence.charAt(0).toUpperCase() + person.residence.slice(1).toLowerCase()

        const siblings = person.siblings

        return {name, age, residence, siblings}

    })

}


function checkAge(myPerson){

        return myPerson.age > 26;
}

function count(total, amount) {


        return total+amount.siblings

}

newdata = transformPerson(data).filter(checkAge).reduce(count, 0)


console.log(newdata);

// transformeer array data met behulp van de map-functie en sla het resultaat op 
// in varabele transformedData

// toon in de console een array met alle de personen, ouder dan 26

// laat de som zien van van de broertjes/zusjes van personen, ouder dan 26
// console.log(filteredData.reduce((acc, item) => acc + item.siblings, 0));


// In één statement