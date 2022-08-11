import './styleBotton.css';
import '../../styles/styleGlobalCadastro.css';
import { NavbarComponent } from '../../components/Navbar/navbar';
import { useState } from 'react';
import { postAddVoto, getAllRestaurantes } from '../../service/API';

export function AddVotos() {
    const [nomeUsuario, setNomeUsuario] = useState();
    const [restaurantes, setRestaurantes] = useState([]);

    async function getAllRestaurantesIndex() {
        let restaurantes = await getAllRestaurantes();
        console.log(restaurantes.data);
        let objectRestaurante = [restaurantes.data]
        setRestaurantes(objectRestaurante)
    }
    async function handleSubmit(event) {        
        event.preventDefault();                
        let usuarioObject = 
        {  
            "idUsuario": 0,          
            "codigoUsuario": 6725,
            "nomeUsuario": nomeUsuario
        }                
        await postAddVoto(usuarioObject);       
    }
    return(        
        <div>
            <NavbarComponent />
            <div class="login-page">
                <div class="form">
                    <form class="login-form" onSubmit={handleSubmit}>
                        <h4>Cadastrar Usuário</h4>                        
                        <input name="username" onChange={(user) => setNomeUsuario(user.target.value)} placeholder="Digite seu nome" />                                                       
                        <table>
                            <thead>
                                <tr>
                                    <th scope="col">Restaurante</th>
                                    <th scope="col">Votar</th>
                                </tr>
                            </thead>
                            <tbody>
                                { restaurantes.map(res =>                                     
                                    <tr key={res.idRestaurante}>
                                    <th scope="row">{res.nomeRestaurante}</th> 
                                    <td>
                                        <button type="button" className="bttonAddVoto">Primary</button>
                                    </td>                                    
                                    </tr> 
                                )}                                                               
                            </tbody>
                        </table>
                        <button className="bottonAddRestaurante" onClick={getAllRestaurantesIndex} type="submit">adicionar</button>                 
                    </form>
                </div>
            </div>
        </div>
    )
}