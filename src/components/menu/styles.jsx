import styled from "styled-components";

export const MenuContainer = styled.div`
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
    margin: 2rem;    

`;

export const Btn = styled.div`
    line-height: 50px;
    height: 50px;
    text-align: center;
    width: 15rem;
    cursor: pointer;

    color: #d66d6d;
    transition: all 0.3s;
    position: relative;

    span {
        display: flex;
        justify-content: center;
        width: 100%;
        transition: all 0.3s;
        font-family: 'great vibes';
        font-size: 2rem;
    }

    &:before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        opacity: 0;
        transition: all 0.3s;
        border-top-width: 1px;
        border-bottom-width: 1px;
        border-top-style: solid;
        border-bottom-style: solid;
        border-top-color:  #d66d6d;;
        border-bottom-color:  #d66d6d;;
        transform: scale(0.1, 1);
    }
    &:hover span {
        letter-spacing: 1px;
    }
    &:hover::before {
        opacity: 1; 
        transform: scale(1, 1);
    }
    &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        transition: all 0.3s;
        background-color: rgba(255,255,255,0.1);
    }
    &:hover::after {
        opacity: 0; 
        transform: scale(0.1, 1);
    }
`;
