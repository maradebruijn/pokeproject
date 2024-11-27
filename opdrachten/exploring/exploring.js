/*  The following array contains multiple data types.
    Normalize them by converting them all to numbers using a function
    and log the result in the console */
    
    const data = [
        1,
        2,
        "3",
        "4",
        5
    ]

   const newdata = []

    
    function convertArrayStringsToNumbers() {
        
        data.forEach(element => { newdata.push(Number(element))
            
        });

    };

    convertArrayStringsToNumbers();

    console.log(newdata);

   