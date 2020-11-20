console.log("Welcome to the main module")

import {createPlan} from "./plan.js"
const yearlyPlan = createPlan()

console.log(yearlyPlan)
















//this is a temporary code

import {addPlant} from "./field.js"
import {usePlants} from "./field.js"

const seed = [
    {
        seed1: "flax seeds",
        seeds2: "chai seeds",
        seed3: "tatata"
    }
]

addPlant(seed)
const theUsedPlants = usePlants()
console.log("checkinggggggg",theUsedPlants)





/*
//this is temporary code
import { createCorn } from "./seeds/corn.js"

const cornSeed = createCorn()
console.log(cornSeed)

*/
