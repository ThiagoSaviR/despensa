import styled from "styled-components";

export const FooterContainer = styled.div`
    width: 100%;
    height: 10rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    bottom: 0;
    left: 0;
    overflow-y: hidden;

    &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 15%;
        background-image: linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgb(255, 255, 255) 100%);
        z-index: 2;
    }
`;

export const Blackground = styled.img`
    position: absolute;
    width: 100%;
    z-index: -1;
    opacity: 0.4; 
`;

export const TextWrapper = styled.div`
`;
export const Text = styled.h1`
    width: 100%;
    display: flex;
    justify-content: center;
    color: #d66d6d;
    font-weight: 100;
    margin-top: 2rem;
    font-family: "great vibes";
    transition: 0.5s;
`;

export const Author = styled(Text)`
    font-size: 1.5rem;
    justify-content: end;
    margin: 0;
`;