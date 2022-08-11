import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:5166'
})

export const getAllRestaurantes = async () => {    
    return api.get('/api/Restaurante/getRestaurante')
}

export const postAddVoto = async (addVoto) => {    
    return api.post('/api/Usuario/cadastrarUsuario', addVoto)
}

export const postAddUsuario = async (nomeUsuario) => {    
    return api.post('/api/Usuario/cadastrarUsuario', nomeUsuario)
}

export const postAddRestaurante = async (nomeRestaurante) => {    
    return api.post('/api/Restaurante/cadastrarRestaurante', nomeRestaurante)
}

