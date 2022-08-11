import './style.css';

export function NavbarComponent() {
    return(
        // <div>Hello</div>        
        <nav class="navbar">            
            <div class="bottons">        
                <button class="btn" id="add" type="submit">Adicionar Restaurante</button>
                <button class="btn" id="add" type="submit">Adicionar Voto</button>
                <button class="btn" id="add" type="submit">Restaurante Vencedor</button>
                <button class="btn" id="add" type="submit">Adicionar Usuário</button>
            </div>                                  
        </nav>
    )
}