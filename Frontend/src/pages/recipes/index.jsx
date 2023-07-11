import React, { useEffect, useState } from "react";
import {
    RecipeContainer,
    Title,
    CardWrapper,
    ContentWrapper,
    SelectWrapper,
    Text,
    PageWrapper,
    CardContainer
} from "./styles";

import Card from "../../components/card";
import SearchInput from "../../components/searchInput"
import Select from "../../components/select";
import Pagination from "../../components/pagination";
import Modal from "../../components/modals/recipeModal";

import { useRecipe } from "../../contexts/recipeContext";

const Recipes = () => {
    const { data, generateRecipeData } = useRecipe()

    const initialVAlues = {
        recipeQtd: 8,
        currentPage: 1
    }

    const [values, setValues] = useState(initialVAlues);
    const [totalRecipes, setTotalRecipes] = useState(0);
    const [search, setSearch] = useState("");
    const [modalIsVisible, setModalIsVisible] = useState(false);
    const [modalRecipe, setModalRecipe] = useState();
    const [recipe, setRecipe] = useState([]);



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
        generateRecipeData(changeParams())
        setTotalRecipes(data.total);
        setRecipe(data.recipes);

    }, [data.recipes])

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
                        <CardContainer>
                            {recipe ? (
                                recipe?.map(recipe => {
                                    return (
                                        recipe.name.toLowerCase().includes(search.toLowerCase()) ? (
                                            <Card
                                                key={recipe.recipeId}
                                                values={recipe}
                                                onClick={() => {
                                                    setModalIsVisible(!modalIsVisible);
                                                    setModalRecipe(recipe)
                                                }
                                                }
                                            />
                                        ) : null
                                    )
                                })

                            ) : (
                                <Text>Nenhuma receita encontrada</Text>
                            )}
                        </CardContainer>
                        <Pagination
                            onChange={handlePageChange}
                            current={values.currentPage}
                            pageSize={values.recipeQtd}
                            total={totalRecipes}
                        />
                    </PageWrapper>
                </CardWrapper>
            </RecipeContainer>

            {modalIsVisible ? (
                <Modal
                    modalType="Edit/del"
                    data={modalRecipe}
                    setModalIsVisible={setModalIsVisible}
                    modalIsVisible={modalIsVisible}
                    params={changeParams()}
                />
            ) : null}
        </>
    )
}

export default Recipes;