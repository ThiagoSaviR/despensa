import { useEffect, useState } from "react";

const Quotes = () => {
    const url = "https://type.fit/api/quotes";
    const [quotes, setQuotes] = useState({});

    async function getQuotes() {
        try {
            const res = await fetch(url);
            const data = await res.json();
            const num = () => {
                return Math.floor(Math.random() * data.length) + 1;
            }
            setQuotes(data[num()]);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getQuotes();
    }, []);

    return quotes;
}
export default Quotes;
