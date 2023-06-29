import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 1rem 0;
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