import React, { useEffect, useState } from "react";
import { RecipeContainer, Title, CardWrapper, InputWrapper, SelectWrapper, Text } from "./styles";
import { GetRecipe } from "../../api/recipes";
import Card from "../../components/card"
import Input from "../../components/Input"
import Select from "../../components/select";


const Recipes = () => {
    const initialVAlues = {
        pesquisa: "",
        recipeQtd: 6
    }
    const [values, setValues] = useState(initialVAlues);
    const [data, setData] = useState([]);


    const handleChange = (event) => {
        const { name, value } = event.target;

        setValues((prevValues) => ({
            ...prevValues,
            [name]: value
        }))

    }

    useEffect(() => {
        GetRecipe({ skip: 0, take: values.recipeQtd })
            .then((data) => setData(data))
            .catch((error) => {
                console.error(error);
                setData([]);
            });
    }, [values.recipeQtd]);

    return (
        <>
            <RecipeContainer>
                <Title>Livro de Receitas</Title>
                <CardWrapper>
                    <InputWrapper>
                        <SelectWrapper>
                            <Text>Exibindo</Text>
                            <Select
                                type="number"
                                name="recipeQtd"
                                value={values.recipeQtd || ""}
                                onChange={handleChange}
                                options={[3, 6, 9, 12, 15]}
                            />
                            <Text>receitas</Text>
                        </SelectWrapper>
                        <Input
                            type="text"
                            placeholder="Pesquisar receita"
                            name="pesquisa"
                            value={values.pesquisa}
                            onChange={handleChange}
                        />
                    </InputWrapper>
                    <Card values={data} />
                </CardWrapper>
            </RecipeContainer>

        </>
    )
}

export default Recipes;