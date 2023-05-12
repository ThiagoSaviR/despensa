import { MenuContainer, Btn } from "./styles";


const Menu = () => {
    return (
        <MenuContainer>
            <Btn>
                <span>Calendário</span>
            </Btn>
            <Btn>
                <span>Cardápio</span>
            </Btn>
            <Btn>
                <span>Lista de Compras</span>
            </Btn>
            <Btn>
                <span>Receitas</span>
            </Btn>
            <Btn>
                <span>Cadastrar Receitas</span>
            </Btn>
        </MenuContainer>
    )
}

export default Menu;