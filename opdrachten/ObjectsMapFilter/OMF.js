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

let newdata;

/* Filter by age, normalize capitals in names, convert ages to numbers, remove work.
    const data = [
        {
            name: "Robert",
            age: 29,
            residence: "Amsterdam",
        },
        {
            name: "Berend",
            age: 32,
            residence: "Rotterdam",
        }
    ];
*/





// hulpfunctie die objecten uit array data transformeret naar het gewenste formaat
// en het object teruggeeft
function transformPerson(myPerson) {

    return myPerson.map(person =>{

        const name = person.name.charAt(0).toUpperCase() + person.name.slice(1).toLowerCase()

        const age = Number(person.age)

        const residence = person.residence.charAt(0).toUpperCase() + person.residence.slice(1).toLowerCase()

        return {name, age, residence}

    })

}


function checkAge(myPerson){

        return myPerson.age > 26;

}


newdata = transformPerson(data).filter(checkAge)

console.log(newdata);

// toon het object dat Berend representeert in de console


// transformeer het hele array met de map-functie, en toon het resultaat



// transformeer het hele array met de map-functie, en toon de objecten
// die personen representeren die ouder zijn dan 26