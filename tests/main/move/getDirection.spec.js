import {getDirection} from "../../../src/main/move/getDirection.js";

describe('getDirection', () => {

    it('should go to south', () => {
        expect(getDirection(0, 0, 'S')).toEqual({
            x: 0,
            y: -1,
            direction: 'S'
        })
    })
    it('should go to north', () => {
        expect(getDirection(0, 0, 'N')).toEqual({
            x: 0,
            y: 1,
            direction: 'N'
        })
    })
    it('should go to west', () => {
        expect(getDirection(0, 0, 'W')).toEqual({
            x: -1,
            y: 0,
            direction: 'W'
        })
    })
    it('should go to east', () => {
        expect(getDirection(0, 0, 'E')).toEqual({
            x: 1,
            y: 0,
            direction: 'E'
        })
    })
})
