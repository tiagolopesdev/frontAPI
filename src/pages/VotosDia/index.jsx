import '../../styles/styleGlobalCadastro.css';
import { NavbarComponent } from '../../components/Navbar/navbar';
import { useEffect, useState } from 'react';
import { getAllVotosDay } from '../../service/API';

export function VotosDia() {
    const [votos, setVotosRestaurante] = useState([]);

    useEffect(() => {
        getAllVotosFun();
    }, [])

    async function getAllVotosFun() {
        let allVotos = await getAllVotosDay();  
        console.log(allVotos)      
        let objectVotos = allVotos.data;        
        //console.log(objectVotos)      
        setVotosRestaurante(objectVotos);
    }  
    return(        
        <div>
            <NavbarComponent />
            <div className="login-page">
                <div className="form">
                    <table className='table'>
                        <thead>
                            <tr>
                                <th scope="col">Nome Restaurante</th>
                                <th scope="col">Hora e data</th>
                                <th scope="col">Nome Usuario</th>
                            </tr>
                        </thead>
                        <tbody>
                            {votos.map(voto => (
                                <tr>
                                    <><td key={voto.id}>{voto.restaurantes.nomeRestaurante}</td>
                                    <td>{voto.horaVoto}</td>
                                    <td>{voto.usuarios.nomeUsuario}</td></>                                                                                                    
                                </tr>                            
                            ))}
                        </tbody>
                    </table>                    
                </div>
            </div>
        </div>
    )
}