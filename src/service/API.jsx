import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:5166'
})

export const getAllUsersFilters = async () => {
    return api.get('/api/Usuario/getFilterUsuario');
}

export const getAllUsers = async () => {
    return api.get('/api/Usuario/getUsuario');
}

export const getAllVotosDay = async () => {
    return api.get('api/Voto/getVotosDay')
}

export const getAllRestaurantes = async () => {    
    return api.get('/api/Restaurante/getRestaurante')
}

export const getRestauranteVencedor = async () => {    
    return api.get('/api/Voto/getFirstElement')
}

export const postAddVoto = async (addVoto) => {    
    return api.post('/api/Voto/cadastrarVotos', addVoto)
}

export const postAddUsuario = async (nomeUsuario) => {    
    return api.post('/api/Usuario/cadastrarUsuario', nomeUsuario)
}

export const postAddRestaurante = async (nomeRestaurante) => {    
    return api.post('/api/Restaurante/cadastrarRestaurante', nomeRestaurante)
}

