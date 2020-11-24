
import {addPlant, usePlants} from "./field.js"
import {plantSeeds} from "./tractor.js"
import {harvestPlants} from "./harvester.js"

//outputs a message
console.log("Welcome to the main module")

//we're importing createPlan function from plan.js
//then we assign the createPlan returned value to yearlyPlan varaible
import {createPlan} from "./plan.js"
const yearlyPlan = createPlan()



//we're console logging yearlyPlan
// console.log("this is the yearly plan", yearlyPlan)














const thePlantSeeds = plantSeeds(yearlyPlan)
// console.log("helloooooo", thePlantSeeds)


const theUsedPlants = usePlants()
// console.log("this are the harvested plants", theUsedPlants)

const theHarvestedPlant = harvestPlants(theUsedPlants)
console.log("the harvested plant", theHarvestedPlant)




// //this is a temporary code
// //checking if plantSeeds is working from tractor.js module
// import {plantSeeds} from "./tractor.js"
// const thePlantSeeds = plantSeeds(yearlyPlan)

// console.log("checkinggg",thePlantSeeds)


// //this is a temporary code
// import {addPlant} from "./field.js"
// import {usePlants} from "./field.js"

// const seed = [
//     {
//         seed1: "flax seeds",
//         seeds2: "chai seeds",
//         seed3: "tatata"
//     }
// ]

// addPlant(seed)
// const theUsedPlants = usePlants()
// console.log("checkinggggggg",theUsedPlants)


/*
//this is temporary code
import { createCorn } from "./seeds/corn.js"

const cornSeed = createCorn()
console.log(cornSeed)

*/
