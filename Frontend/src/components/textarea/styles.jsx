import styled from "styled-components";

export const StyledTextarea = styled.textarea`
    width: 100%;
    height: 19rem;
    border: none;
    border-radius: 1.5rem;
    padding: 1rem;
    resize: none;
    color: #d66d6d;
    font-size: 1rem;
    filter: drop-shadow(-1px 1px 5px #00000061);

    &::placeholder{
        color: #d66d6d;
    }

`;

export const TextareaConteiner = styled.div`
    width: 100%;
    padding: 0 .5rem;
`;