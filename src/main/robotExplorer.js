import {move} from "./move/direction.js";

const robotExplorer = (map, initialPosition, coordinates) => {
    let [currentXString, currentYString, currentDirection] = initialPosition
    let currentX = parseInt(currentXString)
    let currentY = parseInt(currentYString)
    try {
        coordinates.forEach(coordinate => {
            const {x, y, direction} = move(map, currentX, currentY, currentDirection, coordinate)
            currentX = x
            currentY = y
            currentDirection = direction
        })
        console.log(`${currentX} ${currentY} ${currentDirection}`)
    } catch (e) {
        console.log(`${currentX} ${currentY} ${currentDirection} LOST`)
    }
}

export {robotExplorer}
