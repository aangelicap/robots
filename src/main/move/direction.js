import {rotate} from "./rotate.js";
import {getDirection} from "./getDirection.js";
import {generatePositionRobots} from "../generatePositionRobots.js";


const leaveSmell = (map, x, y, direction) => {
    map[x][y] = direction
}

const hasSmell = (map, x, y, direction) => {
    return map?.[x]?.[y] === direction
}
const isLost = (map, x, y) => {
    return map?.[x]?.[y] === undefined
}

const move = (map, currentX, currentY, currentDirection, coordinate) => {
    if (['L', 'R'].indexOf(coordinate) >= 0) return generatePositionRobots(currentX, currentY, rotate(currentDirection, coordinate))
    
    const {x, y} = getDirection(currentX, currentY, currentDirection)

    if (isLost(map, x, y)) {
        if (hasSmell(map, currentX, currentY, currentDirection)) {
            return generatePositionRobots(currentX, currentY, currentDirection)
        } else {
            leaveSmell(map, currentX, currentY, currentDirection)
            throw new Error('Out of mars')
        }

    } else {
        if (hasSmell(map, x, y, currentDirection)) return generatePositionRobots(currentX, currentY, currentDirection)
        return generatePositionRobots(x, y, currentDirection)
    }
}

export { move }
