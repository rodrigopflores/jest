function lancaExcecao() {
    throw new Error('Ola mundo')
}

describe('exemplos de matchers', () => {

    
    // test('números', () => {
    //     const result = 5

    //     expect(result).toBe(5)
    //     expect(result).toEqual(5)

    //     expect(result).toBeGreaterThan(4)
    //     expect(result).toBeGreaterThanOrEqual(5)
    //     expect(result).toBeLessThan(6)
    //     expect(result).toBeLessThanOrEqual(5)

    //     expect(result).not.toBe(7)

    // })
    

    // test('números com ponto flutuante', () => {
    //     const result = 0.1 + 0.2

    //     expect(result).toBeCloseTo(0.3)
    // })

    
    // test('verdadeiro/falso', () => {
    //     const result = 0
    //     expect(result).toBeNull()

    //     // Falsy:
    //     // false
    //     // null
    //     // undefined
    //     // NaN
    //     // 0
    //     // ""

    //     // Truthy:
    //     // true
    //     // 231
    //     // "string"
        

    // })


    // test('strings', () => {
    //     const result = "May the force be with you"

    //     expect(result).toMatch("force")
    //     expect(result).toMatch(/force/)
    // })


    // test('arrays', () => {
    //     const result = ['luke', 'leia', 'anakin']

    //     expect(result).toContain('luke')
    //     expect(result).toContain('darth vader')
    // })


    // test('exceptions', () => {
    //     const result = () => { lancaExcecao() }

    //     expect(result).toThrow()
    // })
})