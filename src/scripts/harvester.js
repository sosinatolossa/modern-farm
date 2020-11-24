
export const harvestPlants = (thePlantsArray) => {
    const cropsHarvested = []
    for (let index = 0; index < thePlantsArray.length; index++) {
        if (thePlantsArray[index].type === "Corn") {
            for (let j = 0; j < thePlantsArray[index].output / 2; j++) {
                cropsHarvested.push(thePlantsArray[index])
            }
        }

        else {
            for (let j = 0; j < thePlantsArray[index].output; j++) {
                cropsHarvested.push(thePlantsArray[index])
            }
        }
    }
    return cropsHarvested
}

