
import styled from "styled-components";

export const ModalContainer = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #ffffff28;
    z-index: 1000;
    backdrop-filter: blur(2px);
    overflow: auto;
`;

export const ModalContent = styled.div`
    background-color: #fff;
    width: 25rem;
    border-radius: 40px;
    border: 1rem solid #e7c7c7;
    padding: 1rem;
    overflow: auto;
`;

export const TitleModal = styled.h1`
    font-family: "great vibes";
    display: flex;
    justify-content: center;
    padding-top: 1rem;
    color: #d66d6d;
    font-size: 3rem;
`;
export const Text = styled.p`
    text-align: center;
    span {
        color: #ff0000;

    }
`;

export const WrapperContent = styled.div`
    display: flex;
    justify-content: center;
    padding: 1rem 2rem;
`;
export const WrapperText = styled(WrapperContent)`
    flex-direction: column;
`;