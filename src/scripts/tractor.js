import {createPlan} from "./plan.js"

import {createAsparagus} from "./seeds/asparagus.js"
import {createPotato} from "./seeds/potato.js"
import {createSoybean} from "./seeds/soybean.js"
import {createSunflower} from "./seeds/sunflower.js"
import {createWheat} from "./seeds/wheat.js"
import {createCorn} from "./seeds/corn.js"


const theAsparagusPlan = createAsparagus()
const thePotatoPlan = createPotato()
const theSoybeanPlan = createSoybean()
const theSunflowerPlan = createSunflower()
const theWheatPlan = createWheat()
const theCornPlan = createCorn()

//defining and exporting plantSeeds funtion
export const plantSeeds = (plantingPlan) => {
    for (let index = 0; index < 3; index++) {
        for (let j = 0; j < 6; j++) {
            if (plantingPlan[index][j] === "Asparagus") {
                console.log("this is asparagus",j)
            }
            else if (plantingPlan[index][j] === "Potato") {
                console.log("this is potato",j)
            }
            else if (plantingPlan[index][j] === "Soybean") {
                console.log("this is yoybean",j)
            }
            else if (plantingPlan[index][j] === "Sunflower") {
                console.log("this is sunflower",j)
            }
            else if (plantingPlan[index][j] === "Wheat") {
                console.log("this is wheat",j)
            }
            else if (plantingPlan[index][j] === "Corn") {
                console.log("this is corn",j)
            }
        }   
    }
}
