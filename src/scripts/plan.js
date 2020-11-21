const types = ["Soybean", "Corn", "Asparagus", "Wheat", "Potato", "Sunflower"]

//we're defining and exporting createPlan fuction
export const createPlan = () => {
    //we're creating array and assigning it to varaiable called plan
    const plan = []

    //until index is less than 3, we're going to increment it
    for (let index = 0; index < 3; index++) {
        //we have an array assigned to row
        const row = []
        //until j is less than 6, we're going to increment it
        for (let j = 0; j < 6; j++) {
            //push each of index value to row and....
            row.push(crop.next().value)
        }

        //push row to plan array
        plan.push(row)
    }
    //return plan array
    return plan
}




/*
    This is a generator function used to randomly
    generate crop types to plants in each plot. It
    is not relevant for you implementing your code
    for this project.
*/
const crop = function* () {
    while (true) {
        const typeIdx = Math.floor(Math.random() * types.length)
        yield types[typeIdx]
    }
}()

