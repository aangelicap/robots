import {generateMars} from "../src/main/generateMars.js";

describe('generateMars', () => {

    it('create mars', () => {
        const mars = generateMars(0, 0)
        expect(mars[0][0]).toBe('')
    })
    it('create mars with maximum value exceded', () => {
        expect(() => generateMars(51, 51)).toThrow("The maximum value for any coordinate is 50")
    })

})
