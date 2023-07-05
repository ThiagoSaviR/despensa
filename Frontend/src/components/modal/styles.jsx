
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
    border: 1px solid;
    overflow: auto;
`;

export const ModalContent = styled.div`
    background-color: #fff;
    width: 40rem;
    border-radius: 40px;
    border: 1rem solid #e7c7c7;
    padding: 1rem;
    margin-top: 30rem;
    margin-bottom: 10rem;
    overflow: auto;
`;

export const TitleModal = styled.h1`
    font-family: "great vibes";
    display: flex;
    justify-content: center;
    padding-top: 1rem;
    color: #d66d6d;
    font-size: 4rem;
`;
export const TitleContent = styled(TitleModal)`
    font-size: 2rem;
`;

export const WrapperContent = styled.div`
    display: flex;
    justify-content: center;
    padding: 1rem 2rem;
`;
export const WrapperText = styled(WrapperContent)`
    flex-direction: column;
`;

export const WrapperImage = styled.div`
width: 100%;
`;
export const WrapperIngredients = styled.div`
    width: 100%;
`;

export const Image = styled.img`
    width: 15rem;
    border-radius: 10px;
`;

export const Text = styled.p`
    text-align: justify;
`;