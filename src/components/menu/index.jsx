import { useEffect } from "react";
import { MenuContainer, Btn } from "./styles";
import { useNavigate } from "react-router-dom";


const Menu = () => {
    const navigate = useNavigate();

    return (
        <MenuContainer>
            <Btn onClick={() => navigate("/calendar")}>
                <span>Calendário</span>
            </Btn>
            <Btn onClick={() => navigate("/menu")}>
                <span>Cardápio</span>
            </Btn>
            <Btn onClick={() => navigate("/shoppinglist")}>
                <span>Lista de Compras</span>
            </Btn>
            <Btn onClick={() => navigate("/recipes")}>
                <span>Livro de Receitas</span>
            </Btn>
            <Btn onClick={() => navigate("/recipeRegister")}>
                <span>Cadastrar Receitas</span>
            </Btn>
        </MenuContainer>
    )
}

export default Menu;