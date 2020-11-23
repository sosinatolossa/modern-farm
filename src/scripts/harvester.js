import {plantSeeds} from "./tractor.js"

const cropsHarvested = []

export const harvestPlants = (thePlantsArray) => {
    for (let index = 0; index < thePlantsArray.length; index++) {
        if (thePlantsArray.type === "Corn") {
            for (let j = 0; j < thePlantsArray.output; j++) {
                cropsHarvested.push(thePlantsArray)

                console.log("cropsHarvested", cropsHarvested)
            }
        }
       
    }
}

