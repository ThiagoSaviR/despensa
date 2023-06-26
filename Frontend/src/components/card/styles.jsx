import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;

export const Card = styled.div`
background-color: #fff;
width: 20rem;
height: 10rem;
margin: 1rem;
border-radius: 15px;
transition: 0.6s;
filter: drop-shadow(-1px 1px 5px #00000061);
&:hover {
    transform: scale(1.1);
}
`;