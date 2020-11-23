//this is emty array
const emptyField = []

//defining and exporting addPlant function here
//it takes seed object as an input
//then it adds the seed to emptyField 
export const addPlant = (seedObject) => {
    if (Array.isArray(seedObject)) {
        for (let i of seedObject) {
            emptyField.push(i)
        }
    }
    else {
        emptyField.push(seedObject) 
    }
    return emptyField
}


//defininig a function and exporting it.
//this function returns a copy array of emptyField
export const usePlants = () => {
    return emptyField.slice()
}