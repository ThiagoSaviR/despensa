import axios from "axios";

export const PostRecipe = async (values) => {

    const baseUrl = "https://localhost:7009/api/recipes"

    try {
        const response = await axios.post(baseUrl, values, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log(response.data);
    } catch (error) {
        console.error(error.response.data);
    }
};
