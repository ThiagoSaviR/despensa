import { CardContainer, Card, Background, Title } from "./styles"


const StyledCard = (props) => {
    const data = props.values;

    return (
        <>
            <CardContainer>
                {data.recipes?.map(recipe => {
                    return (
                        recipe.name.toLowerCase().includes(props.search.toLowerCase()) ? (
                        <Card key={recipe.recipeId}>
                            <Background src={recipe.image} alt="Background"/>
                            <Title>{recipe.name}</Title>
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