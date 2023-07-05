import styled from "styled-components";

export const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 3rem;

`;

export const Wrapper = styled.div`
    display: flex;
    margin: 1rem;
`;
export const WrapperInputSelect = styled.div`
    display: flex;
    margin-right: 1rem;
`;

export const Form = styled.form`
    border: 2px solid #d66d6d37;
    border-radius: 20px;
    width: 600px;
    background-color: #d66d6d2f;
`;

export const Title = styled.h1`
    font-family: "great vibes";
    font-weight: 100;
    font-size: 3rem;
    color: #d66d6d;
    filter: drop-shadow(-2px 2px 3px #00000057);
`;

// Modal

export const WrapperContent = styled.div`
    display: flex;
    justify-content: center;
    padding: 1rem 2rem;
`;

export const WrapperImage = styled.div`
width: 100%;
`;

export const Image = styled.img`
    width: 15rem;
    border-radius: 10px;
`;

export const WrapperIngredients = styled.div`
    width: 100%;
`;

export const TitleContent = styled.h1`
    font-family: "great vibes";
    display: flex;
    justify-content: center;
    padding-top: 1rem;
    color: #d66d6d;
    font-size: 2rem;
`;

export const WrapperText = styled(WrapperContent)`
    flex-direction: column;
`;

export const Text = styled.p`
    text-align: justify;
`;

export const TitleModal = styled.h1`
    font-family: "great vibes";
    display: flex;
    justify-content: center;
    padding-top: 1rem;
    color: #d66d6d;
    font-size: 4rem;
`;
