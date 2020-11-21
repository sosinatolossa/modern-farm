import {plantSeeds} from "./tractor.js"

export const harvestPlants = (thePlantsArray) => {
    for (let index = 0; index < 3; index++) {
        for (let j = 0; j < 6; j++) {
            if (thePlantsArray[index] === "output") {
                thePlantsArray[index] * thePlantsArray[index].value
                console.log("checking number",number)
            }
        }
    }
}