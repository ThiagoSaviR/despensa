import { CardContainer, Card } from "./styles"


const StyledCard = (props) => {
    const data = props.values;

    return (
        <>
            <CardContainer>
                {data.recipes?.map(recipe => {
                    return (
                        <Card key={recipe.recipeId}>
                            <h1>{recipe.name}</h1>
                        </Card>
                    )
                })}
            </CardContainer>
        </>
    )

}

export default StyledCard;