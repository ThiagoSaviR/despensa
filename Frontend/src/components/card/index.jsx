import React from "react";
import { Card, Background, Title } from "./styles"


const StyledCard = (props) => {
    const data = props.values;

    return (
        <>
            <Card key={data.recipeId} onClick={props.onClick}>
                <Background src={data.image} alt="Background" />
                <Title>{data.name}</Title>
            </Card>
        </>
    )
}

export default StyledCard;
                    