const axios = require('axios')

async function fetchStarWarsCharacter(id) {
    const response = await axios.get(`https://swapi.dev/api/people/${id}/`)
    return response.data
}

module.exports = { fetchStarWarsCharacter }