import { useEffect, useState } from "react";

const Quotes = () => {

    const url = "https://type.fit/api/quotes";
        let data;
        const numAleatorio = () => Math.floor(Math.random() * data.length) + 1;
    
        const [citacoes, setCitacoes] = useState({});
    
        useEffect(() => {
            getCitacoes();
        }, []);
    
        async function getCitacoes() {
            try {
                const res = await fetch(url);
                data = await res.json();
                setCitacoes(data[numAleatorio()]);
            } catch (err) {
                console.log(err);
            }
        }

        return citacoes;
}
 export default Quotes;
