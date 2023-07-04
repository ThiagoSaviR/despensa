import styled from "styled-components";

export const RecipeContainer = styled.div`
     display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 3rem;
    `;

export const CardWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    border: 2px solid #d66d6d37;
    background-color: #d66d6d2f;
    border-radius: 25px;
    padding: 2rem;
`;
export const ContentWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
`;

export const InputWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: #fff;
`;


export const SelectWrapper = styled.div`
display: flex;
width: 14.5rem;
justify-content: center;
align-items: center;
min-width: 14.5rem;

`;
export const Text = styled.p`
    margin: 1rem;
`;

export const Title = styled.h1`
    font-family: "great vibes";
    font-weight: 100;
    font-size: 3rem;
    color: #d66d6d;
    filter: drop-shadow(-2px 2px 3px #00000057);
`;

export const PageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;