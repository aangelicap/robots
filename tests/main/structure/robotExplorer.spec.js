import Explorer from "../../../src/main/structures/Explorer";

describe('Explorer', () => {
    it('should validate prev() and next()', () => {
        const explorer = new Explorer([1, 0, 0])
        expect(explorer.prev()).toBe(0)
        expect(explorer.next()).toBe(1)
    })
})
