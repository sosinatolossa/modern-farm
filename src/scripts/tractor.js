import {createPlan} from "./plan.js"

import {createAsparagus} from "./seeds/asparagus.js"
import {createPotato} from "./seeds/potato.js"
import {createSoybean} from "./seeds/soybean.js"
import {createSunflower} from "./seeds/sunflower.js"
import {createWheat} from "./seeds/wheat.js"
import {createCorn} from "./seeds/corn.js"
import { addPlant } from "./field.js"







//defining and exporting plantSeeds funtion
export const plantSeeds = (plan) => {
    const thePlantingPlan = plan.flat()
    console.log("the plannnnnn", thePlantingPlan)
    for (const seed of thePlantingPlan) {
        // for (let index = 0; index < plantingPlan.length; index++) {
        
        //     for (let j = 0; j < plantingPlan[index].length; j++) {
        if (seed === "Asparagus") {
            const theAsparagusPlan = createAsparagus()
            addPlant(theAsparagusPlan)
        }
        else if (seed === "Potato") {
            const thePotatoPlan = createPotato()
            addPlant(thePotatoPlan)
        }
        else if (seed === "Soybean") {
            const theSoybeanPlan = createSoybean()
            addPlant(theSoybeanPlan)
        }
        else if (seed === "Sunflower") {
            const theSunflowerPlan = createSunflower()
            addPlant(theSunflowerPlan)
        }
        else if (seed === "Wheat") {
            const theWheatPlan = createWheat()
            addPlant(theWheatPlan)
        }
        else if (seed === "Corn") {
            const theCornPlan = createCorn()
            addPlant(theCornPlan)
        }
           
    }
}
