import axios from "axios";
import { useEffect, useState } from "react";

export const PostRecipe = async (values) => {

    const baseUrl = "https://localhost:7009/api/recipes"

    try {
        const response = await axios.post(baseUrl, values, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log(response.data);
        console.log("Enviado");
    } catch (error) {
        console.error(error.response.data);
    }
};

export const GetRecipe = ({ skip, take }) => {
    const baseUrl = `https://localhost:7009/api/recipes/skip${skip}/take${take}`

    return axios.get(baseUrl)
    .then(response => response.data)
    .catch(error => {
      console.error(error.response.data);
      return [];
    });

}
