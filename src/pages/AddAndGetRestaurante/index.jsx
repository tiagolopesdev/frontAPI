import '../../styles/styleGlobalCadastro.css';
import { NavbarComponent } from '../../components/Navbar/navbar';
import { useState } from 'react';
import { postAddRestaurante } from '../../service/API';

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
            <div class="login-page">
                <div class="form">
                    <form class="login-form" onSubmit={handleSubmit}>
                        <h4>Cadastrar Restaurante</h4>
                        <input name="username" onChange={(user) => setNomeRestaurante(user.target.value)} placeholder="Digite o nome do restaurante" />
                        <button className="bottonAddRestaurante" type="submit">adicionar</button>                        
                    </form>
                </div>
            </div>
        </div>
    )
}