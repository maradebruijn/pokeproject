const data = [
    "HTML",
    "CSS",
    "XML",
    "JSON",
    "Javascript"
]

// const newdata=data.toString();

const newdata=[]

function convertToString(data) {
    // data.forEach(element => { newdata.push(data.join(element))
            
    // });

 return data.join(' ')
}


console.log(convertToString(data));