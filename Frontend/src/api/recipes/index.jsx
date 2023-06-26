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

export const GetRecipe = () => {
    const baseUrl = "https://localhost:7009/api/recipes"
    const [data, setData] = useState([]);

    const get = async () => {
        try {
            const response = await axios.get(baseUrl);
            setData(response.data);
        } catch (error) {
            console.error(error.response.data);
        }
    }

    useEffect(() => {
        get();
    });

    return data;

}
