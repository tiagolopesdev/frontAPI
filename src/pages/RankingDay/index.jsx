import '../../styles/styleGlobalCadastro.css';
import { NavbarComponent } from '../../components/Navbar/navbar';
import { useEffect, useState } from 'react';
import { getRestauranteVencedor } from '../../service/API';

export function GetRestauranteVencedor() {
    const [nomeRestauranteVencedor, setRestauranteVencedor] = useState([]);

    async function getAllRestaurantesIndex() {
        let nomeRestauranteVencedor = await getRestauranteVencedor();  
        console.log(nomeRestauranteVencedor)      
        let objectRestaurante = [nomeRestauranteVencedor.data];        
        setRestauranteVencedor(objectRestaurante);
    } 
    useEffect(() => {
        getAllRestaurantesIndex();
    }, []) 
    return(        
        <div>
            <NavbarComponent />
            <div className="login-page">
                <div className="form">
                    <form className="login-form">    
                        <h3>
                            {nomeRestauranteVencedor.map(vencedor => (
                                <><h3>{vencedor.nomeRestaurante}</h3></>
                                ))
                            }
                        </h3>                                                                   
                    </form>                    
                </div>
            </div>
        </div>
    )
}