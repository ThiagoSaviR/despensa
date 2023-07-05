import React from "react";
import {
    ModalContainer,
    ModalContent,
    TitleModal,
} from "./styles";

const Modal = (props) => {

    return (
        <>
            <ModalContainer onClick={props.closeModal}>
                <ModalContent>
                    <TitleModal>{props.title}</TitleModal>
                    {props.content}
                </ModalContent>
            </ModalContainer>
        </>
    )
}

export default Modal;