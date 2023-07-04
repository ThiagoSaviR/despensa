import styled from "styled-components";

export const InputContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border-radius: 1.75rem;
    filter: drop-shadow(-1px 1px 5px #00000061);
    padding: 1rem;
    margin: 0.5rem;
    height: 2.5rem;
`;

export const StyledInput = styled.input`
    width: 100%;
    border-radius: 1.75rem;
    outline: none;
    border: none;
    font-size: 1rem;
    text-align: center;
    caret-color: #d66d6d6a;
    color: #d66d6d;
    &::-webkit-input-placeholder {
        color: #d66d6d;
        text-align: center;
    }
`;

export const Wrapper = styled.div`
`;

export const SearchImg = styled.i`
    width: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center; 
    color: #d66d6d;
`;