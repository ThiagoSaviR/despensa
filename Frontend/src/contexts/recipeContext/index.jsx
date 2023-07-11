import React, { createContext, useContext, useState } from "react";

import { GetRecipe } from "../../api/recipes";

export const RecipesApiContext = createContext({})

export const RecipeApiProvider = ({ children } ) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const generateRecipeData = async (params) => {
        setLoading(true);

        await GetRecipe(params)
        .then((response) => {
            setData(response);
            setLoading(false);
        })
        .catch(() => {
            setLoading(false);
            setError("Erro ao carregar...");
        });
} 

        
    return (
        <RecipesApiContext.Provider
        value={{
            data,
            setData,
            loading,
            setLoading,
            generateRecipeData,
            error,
        }}
        >
            {children}
        </RecipesApiContext.Provider>
    );
};

export const useRecipe = () => useContext(RecipesApiContext);