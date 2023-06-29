import styled from "styled-components";

export const InputContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;


`;

export const StyledInput = styled.input`
    width: 100%;
    height: 2.5rem;
    outline: none;
    border: none;
    border-radius: 1.75rem;
    filter: drop-shadow(-1px 1px 5px #00000061);
    padding: 1rem;
    font-size: 1rem;
    text-align: center;
    caret-color: #d66d6d6a;
    color: #d66d6d;
    margin: 0 .5rem;
    &::-webkit-input-placeholder {
        color: #d66d6d;
        text-align: center;
    }
`;