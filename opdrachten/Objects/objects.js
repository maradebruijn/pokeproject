/*  This array of objects contains some weird data, and some useless points,
    You're tasked in transforming and normalizing this data to the second
    example */

    const data = [
        {
            name: "robert",
            age: "29",
            residence: "amsterdam",
            curriculum: ["Deloitte", "Hogeschool van Amsterdam", "DEPT"]
        },
        {
            name: "berend",
            age: "32",
            residence: "rotterdam",
            curriculum: ["DEPT", "GRRR"]
        },
        {
            name: "ubaida",
            age: "26",
            residence: "Amersfoort",
            curriculum: ["Clarify"]
        }
    ];
    
    
    
    /* Normalize capitals in names, convert ages to numbers, extract current employer from curriculum.
    
        const data = [
            {
                name: "Robert",
                age: 29,
                employer: "Deloitte"
            },
            {
                name: "Berend",
                age: 32,
                employer: "DEPT"
            }
            {
                name: "ubaida",
                age: "26",
                employer: "Clarify"
            }
        ];
    
    */
    
    function transformArrOfObj(myObj) {

        return myObj.map(person =>{

            const name = person.name.charAt(0).toUpperCase() + person.name.slice(1).toLowerCase()

            const age = Number(person.age)

            let employer
            if (person.curriculum.length > 1){

                employer = person.curriculum[1]

            } else if (person.curriculum.length === 1){

                employer = person.curriculum[0]

            }else {

                employer = "unknown"

            }

            return {name, age, employer}

        })



        // data.forEach(person => { 
        //     const transformPerson=(
        //        name: person.name.charAt(0.toUppercase[]) + person.name.slice(1).toLowerCase[],
        //     )
        // });

        // data.forEach(age => { newdata.push(Number(age))
            
        // });
    
    }
    
    const newdata = transformArrOfObj(data)

    

    console.log(newdata);