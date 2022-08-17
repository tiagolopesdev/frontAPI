import { Link } from 'react-router-dom';
import './style.css';

export function NavbarComponent() {
    return(              
        <nav className="navbar">            
            <div className="bottons">  
                <Link to="/">
                <button className="btn" id="add">Adicionar Restaurante</button>                
                </Link> 
                <Link to="/addvotos">
                    <button className="btn" id="add">Adicionar Voto</button>
                </Link>                                 
                <Link to="/getRestauranteVencedor">
                    <button className="btn" id="add">Restaurante Vencedor</button>                        
                </Link> 
                <Link to="/votosDia">
                    <button className="btn" id="add">Votos do dia</button>                        
                </Link>                                
                <Link to="/addUsuario">
                    <button className="btn" id="add">Adicionar Usuário</button>    
                </Link>                    
            </div>                                  
        </nav>
    )
}