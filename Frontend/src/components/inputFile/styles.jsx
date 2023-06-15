import styled from "styled-components";

export const InputContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const StyledInput = styled.input`
    display: none;
    z-index: -10;
    width: 100%;
    height: 100%;
    font-size: 1rem;
    caret-color: #d66d6d6a;
    color: #d66d6d;
    margin: 0 .5rem;
`;

export const Text = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #d66d6d;
    width: 100%
`;