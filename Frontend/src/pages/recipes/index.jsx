import { RecipeContainer, Title, CardWrapper } from "./styles";

import { GetRecipe } from "../../api/recipes";

import Card from "../../components/card"

const Recipes = () => {
    const data = GetRecipe();

    return (
        <>
            <RecipeContainer>
                <Title>Livro de Receitas</Title>
                <CardWrapper>
                    <Card values={data} />
                </CardWrapper>
            </RecipeContainer>

        </>
    )
}

export default Recipes;