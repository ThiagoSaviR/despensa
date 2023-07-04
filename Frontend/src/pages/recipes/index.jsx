import React, { useEffect, useState } from "react";
import {
    RecipeContainer,
    Title,
    CardWrapper,
    ContentWrapper,
    SelectWrapper,
    Text
} from "./styles";
import { GetRecipe } from "../../api/recipes";
import Card from "../../components/card"
import SearchInput from "../../components/searchInput"
import Select from "../../components/select";
import Pagination from "../../components/pagination";

const Recipes = () => {
    const initialVAlues = {
        pesquisa: "",
        recipeQtd: 6,
        currentPage: 1
    }
    const [values, setValues] = useState(initialVAlues);
    const [data, setData] = useState([]);
    const [totalRecipes, setTotalRecipes] = useState(0);


    const handleChange = (event) => {
        const { name, value } = event.target;

        setValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }))

    }
    const handlePageChange = (page) => {
        setValues((prevValues) => ({
            ...prevValues,
            currentPage: page
        }));
    };

    useEffect(() => {
        GetRecipe({
            skip: (values.currentPage - 1) * values.recipeQtd,
            take: values.recipeQtd
        })
            .then((data) => {
                setData(data);
                setTotalRecipes(data.total);
            })
            .catch((error) => {
                console.error(error);
                setData([]);
            });
    }, [values.currentPage, values.recipeQtd]);



    return (
        <>
            <RecipeContainer>
                <Title>Livro de Receitas</Title>
                <CardWrapper>
                    <ContentWrapper>
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
                        <SearchInput
                            type="text"
                            placeholder="Pesquisar receita"
                            name="pesquisa"
                            value={values.pesquisa}
                            onChange={handleChange}
                        />
                    </ContentWrapper>
                    <Card values={data} />
                    <Pagination
                        onChange={handlePageChange}
                        current={values.currentPage}
                        pageSize={values.recipeQtd}
                        total={totalRecipes}
                    />
                </CardWrapper>
            </RecipeContainer>

        </>
    )
}

export default Recipes;