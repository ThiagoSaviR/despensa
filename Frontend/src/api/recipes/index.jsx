import axios from "axios";

export const PostRecipe = async (values) => {

    const baseUrl = "https://localhost:7009/api/recipes";

    try {
        const response = await axios.post(baseUrl, values, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log("Enviado");
        return response.data;
    } catch (error) {
        console.error(error.response.data);
        return [];
    }
};

export const GetRecipe = async ({ skip, take }) => {
    const baseUrl = `https://localhost:7009/api/recipes/skip${skip}/take${take}`;

    return await axios.get(baseUrl)
        .then(response => response.data)
        .catch(error => {
            console.error(error.response.data);
            return [];
        });

}

export const DeleteRecipe = async (id) => {
    const baseUrl = `https://localhost:7009/api/recipes/${id}`;
    
    try {
        const response = await axios.delete(baseUrl);
        console.log("Delete")
        return response.data;
    } catch (error) {
        console.log(error.response.data);
        return [];
    }
};

