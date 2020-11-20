//this is emty array
const emptyField = []

//defining and exporting addPlant function here
//it takes seed object as an input
//then it adds the seed to emptyField 
export const addPlant = (seedObject) => {
    emptyField.push(seedObject)
}



export const usePlants = () => {
    return emptyField.slice()
}