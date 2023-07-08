import React, { useState } from "react";
import {
    ModalContainer,
    ModalContent,
    TitleModal,
    WrapperContent,
    WrapperImage,
    Image,
    WrapperIngredients,
    TitleContent,
    WrapperText,
    Text
} from "./styles";

import Button from "../../button";
import DeleteModal from "../deleteModal"
import { PostRecipe } from "../../../api/recipes";
import { useNavigate } from "react-router-dom";

const RecipeModal = (props) => {
    const navigate = useNavigate();
    const data = props.data;

    const [deleteModalIsVisible, setDeleteModalIsVisible] = useState(false);

    const handleClick = (event) => {
        if (event.target === event.currentTarget) {
            props.setModalIsVisible(!props.modalIsVisible);
        }
    }

    return (
        <>
            <ModalContainer onClick={handleClick}>
                <ModalContent>
                    <TitleModal>{data.name}</TitleModal>
                    <WrapperContent>
                        <WrapperImage>
                            <Image src={data.image} alt="Imagem da receita" />
                        </WrapperImage>
                        <WrapperIngredients>
                            <TitleContent>Ingredientes</TitleContent>
                            {data.ingredients.map(ingredient => {
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
                        <Text>{data.preparation}</Text>
                    </WrapperText>
                    <WrapperContent>
                        {props.modalType === "Confirm" ? (
                            <>
                                <Button text="Voltar" onClick={() => props.setModalIsVisible(!props.modalIsVisible)} />
                                <Button text="Confirmar" onClick={() => {
                                    PostRecipe(data);
                                    navigate("/recipes");
                                    window.scrollTo({
                                        top: 0,
                                        behavior: "smooth",
                                    });
                                }} />
                            </>
                        ) : null}
                        {props.modalType === "Edit/del" ? (
                            <>
                                <Button text="Editar receita" onClick={() => {
                                    navigate("/recipeRegister");
                                    window.scrollTo({
                                        top: 0,
                                        behavior: "smooth",
                                    });
                                }} />
                                <Button text="Apagar receita"
                                    onClick={() => {
                                        setDeleteModalIsVisible(!deleteModalIsVisible);
                                    }} />
                            </>
                        ) : null}
                    </WrapperContent>
                </ModalContent>
            </ModalContainer>

            {deleteModalIsVisible ? (
                <DeleteModal
                    setDeleteModalIsVisible={setDeleteModalIsVisible}
                    deleteModalIsVisible={deleteModalIsVisible}
                    setModalIsVisible={props.setModalIsVisible}
                    modalIsVisible={props.modalIsVisible}
                    id={data.recipeId}
                />
            ) : null}


        </>
    )
}

export default RecipeModal;