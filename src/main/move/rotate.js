import Explorer from "../structures/Explorer.js";

const rotate = (currentDirection, coordinate) => {
    const directions = ['N', 'E', 'S', 'W']
    let currentDirectionPosition = directions.indexOf(currentDirection)
    const explorerDirections = new Explorer(directions, currentDirectionPosition)
    if (coordinate === 'L') {
        return explorerDirections.prev()
    }

    return explorerDirections.next()
};

export {rotate}
