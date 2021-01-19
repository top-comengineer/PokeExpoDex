import {create} from 'apisauce'

const apiClient = create({
    baseURL: "https://pokeapi.co/api/v2/pokemon/",
})

export default apiClient

//https://pokeapi.co/api/v2/pokemon/