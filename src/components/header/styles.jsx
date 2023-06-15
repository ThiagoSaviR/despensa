import styled from "styled-components";

export const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    top: 0;
    left: 0;
    overflow-y: hidden;

    &:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 15%;
        background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgb(255, 255, 255) 100%);
        z-index: 2;
}

    
`;
export const Background = styled.img`
    position: absolute;
    width: 100%;
    z-index: -1;
    opacity: 0.4;  
`;


export const Title = styled.h1`
    width: 100%;
    display: flex;
    position: relative;
    justify-content: center;
    margin-top: 2rem;
    color: #d66d6d;
    font-family: 'great vibes';
    font-size: 6rem;
    font-weight: 100;
    cursor: pointer;
`;
