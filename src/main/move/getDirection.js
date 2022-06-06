import {generatePositionRobots} from "../generatePositionRobots.js";

const getDirection = (x, y, direction) => {
    switch (direction) {
        case 'N':
            y = y + 1
            break
        case 'E':
            x = x + 1
            break
        case 'S':
            y = y - 1
            break
        case 'W':
            x = x - 1
            break
        default:
            throw Error('Invalid direction')
    }
    return generatePositionRobots(x, y, direction)
}

export {getDirection}
