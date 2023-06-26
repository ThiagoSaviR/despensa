import React from "react";
import {
    WrapperContent,
    WrapperText,
    ModalContainer,
    ModalContent,
    TitleModal,
    TitleContent,
    Image,
    Text,
    WrapperImage,
    WrapperIngredients
} from "./styles";
import Button from "../../../components/button";
import { PostRecipe } from "../../../api/recipes";

import { useNavigate } from "react-router-dom";


const Modal = (props) => {
    const navigate = useNavigate();
    const ingredients = props.values.ingredients;

    return (
        <>
            <ModalContainer onClick={props.closeModal}>
                <ModalContent>
                    <TitleModal>{props.values.name}</TitleModal>
                    <WrapperContent>
                        <WrapperImage>
                            <Image src={props.values.image} alt={`image${props.title}`} />
                        </WrapperImage>
                        <WrapperIngredients>
                            <TitleContent>Ingredientes</TitleContent>
                            {ingredients.map(ingredient => {
                                if (ingredient.qtd === 0) {
                                    return (
                                        <p key={ingredient.ingredientName}>sem ingrediente aqui</p>
                                    )
                                } else {
                                    return (
                                        <p key={ingredient.ingredientName}>{`${ingredient.qtd} (${ingredient.type}) ${ingredient.ingredientName}`}</p>
                                    )
                                }
                            })}
                        </WrapperIngredients>
                    </WrapperContent>
                    <WrapperText>
                        <TitleContent>Modo de Preparo</TitleContent>
                        <Text>{props.values.preparation}</Text>
                    </WrapperText>
                    <WrapperContent>
                        <Button text="Voltar" onClick={props.closeModal} />
                        <Button text="Confirmar" onClick={() => {
                            PostRecipe(props.values);
                            navigate("/recipes");
                            window.scrollTo({
                                top: 0,
                                behavior: "smooth",
                              });
                        }} />
                    </WrapperContent>
                </ModalContent>
            </ModalContainer>
        </>
    )
}

export default Modal;