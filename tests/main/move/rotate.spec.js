import {rotate} from "../../../src/main/move/rotate.js";

describe('rotate', () => {
    it('should to be right', () => {
        expect(rotate('N', 'R')).toEqual("E")
    })    
    it('should to be left', () => {
        expect(rotate('N', 'L')).toEqual("W")
    })
    it('should to be forward ', () => {
        expect(rotate('N', 'F')).toEqual("E")
    })
})
