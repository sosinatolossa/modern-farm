
import {harvestPlants} from "./harvester.js"
import {usePlants} from "./field.js"



export const cropsSold = () => {
    const theUsedPlants = usePlants()
    const theHarvestedPlant = harvestPlants(theUsedPlants)
    const cropsToSell = []
    for (let index = 0; index < theHarvestedPlant.length; index++) {
        cropsToSell.push(theHarvestedPlant[index].type)
    }
    return cropsToSell
}


export const theListOfCropSold = () => {
    const theCropsSold = cropsSold()
    let contentElement = document.querySelector(".container")

    for (let index = 0; index < theCropsSold.length; index++) {
        const cropHTML = `<section class="plant">${theCropsSold[index]}</section>`
        contentElement.innerHTML += cropHTML
    }
}



