import React, { useEffect, useState } from "react";
import {
    RecipeContainer,
    Title,
    CardWrapper,
    ContentWrapper,
    SelectWrapper,
    Text,
    PageWrapper
} from "./styles";
import { GetRecipe } from "../../api/recipes";
import Card from "../../components/card"
import SearchInput from "../../components/searchInput"
import Select from "../../components/select";
import Pagination from "../../components/pagination";

const Recipes = () => {
    const initialVAlues = {
        recipeQtd: 8,
        currentPage: 1
    }

    const [values, setValues] = useState(initialVAlues);
    const [data, setData] = useState([]);
    const [totalRecipes, setTotalRecipes] = useState(0);
    const [search, setSearch] = useState("");


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

    const changeParams = () => {
        if (search === "") {
            return {
                skip: (values.currentPage - 1) * values.recipeQtd,
                take: values.recipeQtd
            }
        } else {
            return {
                skip: 0,
                take: totalRecipes
            }
        }
    }

    useEffect(() => {
        GetRecipe(changeParams())
            .then((data) => {
                setData(data);
                setTotalRecipes(data.total);
            })
            .catch((error) => {
                console.error(error);
                setData([]);
            });
    }, [values.currentPage, values.recipeQtd, search]);

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
                                options={[4, 8, 12, 16, 20]}
                            />
                            <Text>receitas</Text>
                        </SelectWrapper>
                        <SearchInput
                            type="text"
                            placeholder="Pesquisar receita"
                            name="search"
                            value={search}
                            onChange={(event) => setSearch(event.target.value)}
                        />
                    </ContentWrapper>
                    <PageWrapper>
                        <Card values={data} search={search} />
                        <Pagination
                            onChange={handlePageChange}
                            current={values.currentPage}
                            pageSize={values.recipeQtd}
                            total={totalRecipes}
                        />
                    </PageWrapper>
                </CardWrapper>
            </RecipeContainer>
        </>
    )
}

export default Recipes;