
let lista = ['luke', 'leia', 'anakin']



beforeAll()

afterEach()

afterAll()


describe('configuração e desmontagem', () => {

    beforeEach(() => {
        lista = ['luke', 'leia', 'anakin']
    })
    
    test('teste da função push', () => {

        lista.push('obi wan')

        expect(lista.length).toBe(4)

    })

    test('teste da função pop', () => {

        lista.pop()
        
        expect(lista.length).toBe(2)

    })
})

