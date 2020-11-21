import {createPlan} from "./plan.js"

//defining and exporting plantSeeds funtion
export const plantSeeds = (plantingPlan) => {
    plantingPlan = [] //assigning empty array to plantingPlan
    for (let index= 0; index < 6; index++) { //as long as index is less than 6, increment by 1
        const row = []
        for (let i = 0; i < 4; i++) { //as long as i is less than 4
            row.push(i.type) //push i type property into row array
        }
        plantingPlan.push(row) //push row into planting plan array
    }
    return plantingPlan //return planting plan
}







import {createAsparagus} from "./seeds/asparagus.js"
const theAsparagusPlan = createAsparagus(plantSeeds)


