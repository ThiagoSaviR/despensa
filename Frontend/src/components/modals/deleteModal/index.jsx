import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    ModalContainer,
    ModalContent,
    TitleModal,
    Text,
    WrapperContent,
    WrapperText,
} from "./styles";

import Button from "../../button";
import { DeleteRecipe } from "../../../api/recipes";

const DeleteModal = (props) => {
    const id = props.id;

    const handleClick = (event) => {
        if (event.target === event.currentTarget) {
            props.setDeleteModalIsVisible(!props.deleteModalIsVisible);
        }
    }

    return (
        <>
            <ModalContainer onClick={handleClick}>
                <ModalContent>
                    <TitleModal>Apagar Receita</TitleModal>
                    <WrapperText>
                        <Text>Você realmente gostaria de <span>APAGAR</span> a receita?</Text>
                        <WrapperContent>
                            <Button text="Voltar" onClick={() => props.setDeleteModalIsVisible(!props.deleteModalIsVisible)} />
                            <Button text="Apagar" onClick={() => {
                                DeleteRecipe(id);
                                props.setDeleteModalIsVisible(!props.deleteModalIsVisible)
                                props.setModalIsVisible(!props.modalIsVisible)
                            }} />
                        </WrapperContent>
                    </WrapperText>
                </ModalContent>
            </ModalContainer>
        </>
    )
}

export default DeleteModal;