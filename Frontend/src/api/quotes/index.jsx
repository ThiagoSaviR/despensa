import axios from "axios";
import { useEffect, useState } from "react";

const Quotes = () => {
    const baseUrl = "https://type.fit/api/quotes";
    const [quotes, setQuotes] = useState([]);

    const getQuotes = async () => {
        try {
            const response = await axios.get(baseUrl);
            const randomIndex = Math.floor(Math.random() * response.data.length)
            setQuotes(response.data[randomIndex]);
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getQuotes();
    }, []);

    return quotes;
}
export default Quotes;
