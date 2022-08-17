import '../../styles/styleGlobalCadastro.css';
import { NavbarComponent } from '../../components/Navbar/navbar';
import { useEffect, useState } from 'react';
import { postAddRestaurante, getAllRestaurantes } from '../../service/API';

export function AddRestaurante() {

    const [nomeRestaurante, setNomeRestaurante] = useState();
    async function handleSubmit(event) {        
        event.preventDefault();                
        let restauranteObject = 
        {
            "idRestaurante": 0,
            "codigoRestaurante": 0,
            "nomeRestaurante": nomeRestaurante
        }        
        await postAddRestaurante(restauranteObject);       
    }
    return(        
        <div>
            <NavbarComponent />
            <div className="login-page">
                <div className="form">
                    <form className="login-form" onSubmit={handleSubmit}>
                        <h4>Cadastrar Restaurante</h4>
                        <input name="username" onChange={(user) => setNomeRestaurante(user.target.value)} placeholder="Digite o nome do restaurante" />
                        <button className="bottonAddRestaurante" type="submit">adicionar</button>                        
                    </form>                                                                                                     
                </div>
            </div>
        </div>
    )
}