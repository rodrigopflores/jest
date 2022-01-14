const { fetchStarWarsCharacter } = require('./async.js')

describe('teste assíncrono', () => {
    test('deve retornar um personagem', async () => {

        const result = await fetchStarWarsCharacter(1)

        console.log(result)
               
        expect(result.name).toBe('Luke Skywalker')
    })
})