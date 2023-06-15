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

const Modal = (props) => {
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
                                if (ingredient.qtd === "") {
                                    return
                                } else {
                                    return (
                                        <p>{`${ingredient.qtd} (${ingredient.type}) ${ingredient.ingredient}`}</p>
                                    )
                                }
                            })}
                        </WrapperIngredients>
                    </WrapperContent>
                    <WrapperText>
                        <TitleContent>Modo de Preparo</TitleContent>
                        <Text>{props.values.modoPreparo}</Text>
                    </WrapperText>
                <WrapperContent>
                    <Button text="Voltar" onClick={props.closeModal}/>
                    <Button text="Confirmar"onClick={() => {
                        window.confirm("enviado")
                    }}/>
                </WrapperContent>
                </ModalContent>
            </ModalContainer>
        </>
    )
}

export default Modal;