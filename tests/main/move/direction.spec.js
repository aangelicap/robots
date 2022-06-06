import {move} from "../../../src/main/move/direction.js";
import {generatePositionRobots} from "../../../src/main/generatePositionRobots.js";

describe('move', () => {
    const map = generatePositionRobots(0, 0)

    it('should be move', () => {
        expect(move(map, 0, 0, 'N','R')).toEqual({
            x: 0,
            y: 0,
            direction: 'E'
        })
    })
})
