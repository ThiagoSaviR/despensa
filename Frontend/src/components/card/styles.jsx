import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 1rem 0;
    `;

export const Title = styled.h1`
    width: 100%;
    display: flex;
    position: absolute;
    top: 2rem;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #d66d6d;
    font-family: 'great vibes';
    font-size: 3rem;
    font-weight: 100;
`;

export const Background = styled.img`
    position: relative;
    width: 100%;
    opacity: 0.3;
`;

export const Card = styled.div`
    background-color: #fff;
    width: 15rem;
    height: 15rem;
    margin: 1rem;
    border: 1px solid #d66d6d;
    border-radius: 15px;
    transition: 0.6s;
    overflow-y: hidden;
    filter: drop-shadow(-1px 1px 5px #00000061);
    cursor: pointer;
    &:hover {
        transform: scale(1.1);
        border: none;
        ${Background} {
            opacity: 10;
            transition: 0.6s;
        }
        ${Title} {
            font-size: 0px;
        }
    }
    &:not(:hover) {
        transition: 0.6s;
        border: 1px solid #d66d6d;
    }
    ${Background} {
        opacity: 0.3;
        transition: 0.6s;
    }
    ${Title} {
        font-size: 3rem;
        transition: 0.6s;
    }
`;


