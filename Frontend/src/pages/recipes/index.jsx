import React, { useState } from "react";
import { RecipeContainer, Title, CardWrapper } from "./styles";
import { GetRecipe } from "../../api/recipes";
import Card from "../../components/card"
import Input from "../../components/Input"


const Recipes = () => {
    const data = GetRecipe({skip: 0, take: 3});
    const initialVAlues = {
        pesquisa: ""
    }
    const [values, setValues] = useState(initialVAlues);

    const handleChange = (event) => {
        const { name, value } = event.target;

        const search = {
            [name]: value
        }
        setValues(search)

    }

    return (
        <>
            <RecipeContainer>
                <Title>Livro de Receitas</Title>
                <CardWrapper>
                    <Input
                        type="text"
                        placeholder="Pesquisar receita"
                        name="pesquisa"
                        value={values.pesquisa}
                        onChange={handleChange}
                    />
                    <Card values={data} />
                </CardWrapper>
            </RecipeContainer>

        </>
    )
}

export default Recipes;