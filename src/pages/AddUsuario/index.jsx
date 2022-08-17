import '../../styles/styleGlobalCadastro.css';
import { NavbarComponent } from '../../components/Navbar/navbar';
import { useState } from 'react';
import { postAddUsuario } from '../../service/API';

export function AddUsuario() {
    const [nomeUsuario, setNomeUsuario] = useState();

    async function handleSubmit(event) {        
        event.preventDefault();
        console.log(nomeUsuario);
        
        let usuarioObject = 
        {  
            "nomeUsuario": nomeUsuario
        }                
        await postAddUsuario(usuarioObject);       
    }
    return(        
        <div>
            <NavbarComponent />
            <div className="login-page">
                <div className="form">
                    <form className="login-form" onSubmit={handleSubmit}>
                        <h4>Cadastrar Usuário</h4>
                        <input name="username" onChange={(user) => setNomeUsuario(user.target.value)} placeholder="Digite seu nome" />
                        <button className="bottonAddRestaurante" type="submit">adicionar</button>                        
                    </form>
                </div>
            </div>
        </div>
    )
}