import { CardContainer, Card } from "./styles"


const StyledCard = (props) => {
    const data = props.values;

    return (
        <>
            <CardContainer>
                {data.recipes?.map(recipe => {
                    return (
                        recipe.name.toLowerCase().includes(props.search.toLowerCase()) ? (
                        <Card key={recipe.recipeId}>
                            <h1>{recipe.name}</h1>
                        </Card>
                        )
                        : null
                    )
                })}
            </CardContainer>
        </>
    )

}

export default StyledCard;