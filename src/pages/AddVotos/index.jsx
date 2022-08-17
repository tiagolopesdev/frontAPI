import './styleBotton.css';
import '../../styles/styleGlobalCadastro.css';
import { NavbarComponent } from '../../components/Navbar/navbar';
import { useEffect, useState } from 'react';
import { postAddVoto, getAllUsersFilters, getAllUsers, getAllRestaurantes } from '../../service/API';

export function AddVotos() {    
    const [restaurantes, setRestaurantes] = useState([]);
    const [usuarios, setUsuarios] = useState([]);
    const [codigoUsuario, setCodigoUsuario] = useState();
    const [codigoRestaurante, setCodigoRestaurante] = useState();

    useEffect(() => {
        getAllRestaurantesFun();
        getAllUsuariosFun();
    }, []) 
    async function getAllUsuariosFun() {
        let usuarios = await getAllUsersFilters();  
        let usuariosTwo = await getAllUsers();
        console.log(usuariosTwo);
        console.log(usuarios);      
        let objectUser = usuarios.data;
        setUsuarios(objectUser);
    }
    async function getAllRestaurantesFun() {
        let restaurantes = await getAllRestaurantes();        
        let objectRestaurante = restaurantes.data;
        setRestaurantes(objectRestaurante);
    }    
    async function handleSubmit(event) {        
        event.preventDefault(); 
        console.log("user: "+codigoUsuario)               
        console.log("res: "+codigoRestaurante)               
        let votoObject = 
        {
            "idVoto": 0,
            "idUsuario": codigoUsuario,
            "idRestaurante": codigoRestaurante,
            "horaVoto": "string",
            "restaurantes": {
                "idRestaurante": 0,
                "codigoRestaurante": 0,
                "nomeRestaurante": "string"
            },               
            "usuarios": {
                "idUsuario": 0,
                "codigoUsuario": 0,
                "nomeUsuario": "string"
            }
        }               
        await postAddVoto(votoObject);               
    }
    return(        
        <div>
            <NavbarComponent />
            <div className="login-page">
                <div className="form">
                    <form className="login-form" onSubmit={handleSubmit}>
                        <h4>Cadastrar Voto</h4> 
                        <div className='form-row'>
                            <p id='textInfo'>Escolha o restaurantes</p>
                            <select className="form-select" onChange={(res) => setCodigoRestaurante(res.target.value)}>
                                {restaurantes.map(res => (
                                    <><option value={res.codigoRestaurante}>{res.nomeRestaurante}</option></>
                                ))}                                                                
                            </select>
                            <p id='textInfo'>Escolha o usuário</p>
                            <select className="form-select" onChange={(user) => setCodigoUsuario(user.target.value)}>
                                {usuarios.map(user => (
                                    <><option value={user.codigoUsuario}>{user.nomeUsuario} - {user.codigoUsuario}</option></>
                                ))}
                            </select>
                        </div>                                                                      
                        <button className="bttonAddVoto" type="submit">adicionar</button>                 
                    </form>
                </div>
            </div>
        </div>
    )
}