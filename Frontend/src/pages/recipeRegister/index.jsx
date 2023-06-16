import { useEffect, useRef, useState } from "react";
import { FormContainer, Wrapper, WrapperInputSelect, Title, Form } from "./styles"
import Input from "../../components/Input";
import Select from "../../components/select";
import Textarea from "../../components/textarea";
import InputFile from "../../components/inputFile";
import Button from "../../components/button";
import Modal from "./modal";

const RegisterRecipe = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [modalIsVisible, setModalIsVisible] = useState(false);
    const [ingredientNumber, setIngredientNumber] = useState(0);

    const inputRef = useRef(null);

    const initialValues = {
        name: "",
        ingredients: [
            { qtd: "", type: "", ingredient: "" },
            { qtd: "", type: "", ingredient: "" },
            { qtd: "", type: "", ingredient: "" },
            { qtd: "", type: "", ingredient: "" },
            { qtd: "", type: "", ingredient: "" },
            { qtd: "", type: "", ingredient: "" },
            { qtd: "", type: "", ingredient: "" },
            { qtd: "", type: "", ingredient: "" },
            { qtd: "", type: "", ingredient: "" },
            { qtd: "", type: "", ingredient: "" }
        ],
        image: "",
        preparation: "",
    }

    const [values, setValues] = useState(initialValues);

    const handleChange = (event, i) => {
        const { name, value } = event.target;

        if (name === "qtd" || name === "type" || name === "ingredient") {
            setValues((prevValues) => {
                const updatedIngredients = [...prevValues.ingredients];
                const updateIngredient = {
                    ...updatedIngredients[i],
                    [name]: value,
                };
                updatedIngredients[i] = updateIngredient;

                return {
                    ...prevValues,
                    ingredients: updatedIngredients,
                };
            });
        } else {
            setValues((prevValues) => ({
                ...prevValues,
                [name]: value,
            }));
        }
    };

    const handleButtonClick = () => {
        inputRef.current.click()
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setValues((prevValues) => ({
                ...prevValues,
                image: reader.result,
            }));
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const onSubmit = (event) => {
        event.preventDefault();
    }

    const moreIngredients = () => {
        if (ingredientNumber < 10) {
            setIngredientNumber(ingredientNumber + 1);
        }
        if (ingredientNumber === 10) {
            window.confirm("Você chegou ao máximo de ingredientes")
        }
    }

    return (
        <>
            <FormContainer>
                <Title>Cadastrar receitas</Title>
                <Form onSubmit={onSubmit}>
                    <Wrapper>
                        <Input
                            type="text"
                            placeholder="Nome da receita"
                            name="name"
                            value={values.name}
                            onChange={handleChange}
                        />
                    </Wrapper>
                    {
                        (() => {
                            const renderedFields = [];
                            for (let i = 0; i <= ingredientNumber; i++) {
                                renderedFields.push(
                                    <Wrapper key={i}>
                                        <WrapperInputSelect>
                                            <Input
                                                type="number"
                                                placeholder="Qtd"
                                                name="qtd"
                                                value={values.ingredients[i]?.qtd || ""}
                                                onChange={(e) => handleChange(e, i)}
                                            />
                                            <Select
                                                type="text"
                                                name="type"
                                                value={values.ingredients[i]?.type || ""}
                                                onChange={(e) => handleChange(e, i)}
                                            />
                                        </WrapperInputSelect>
                                        <Input
                                            type="text"
                                            placeholder="ingrediente"
                                            name="ingredient"
                                            value={values.ingredients[i]?.ingredient || ""}
                                            onChange={(e) => handleChange(e, i)}
                                        />
                                    </Wrapper>
                                );
                            }

                            return renderedFields;
                        })()
                    }
                    <Wrapper>
                        <Button onClick={() => {
                            setIsVisible(!isVisible)
                            moreIngredients()
                        }}
                            text="Adicionar mais Ingredientes"
                        />
                    </Wrapper>
                    <Wrapper>
                        <Textarea
                            type="text"
                            placeholder="Modo de preparo"
                            name="modoPreparo"
                            value={values.preparation}
                            onChange={handleChange}
                        />
                    </Wrapper>
                    <Wrapper>
                        <InputFile
                            values={values}
                            type="file"
                            ref={inputRef}
                            accept="image/*"
                            onChange={handleImageChange}
                            onClick={handleButtonClick}
                        />
                    </Wrapper>
                    <Wrapper>
                        <Button
                            text="Salvar"
                            onClick={() => setModalIsVisible(!modalIsVisible)}
                        />
                    </Wrapper>
                </Form>
            </FormContainer>
            {modalIsVisible ? (
                <Modal values={values} closeModal={() => {
                    setModalIsVisible(!modalIsVisible)
                }} />
            ) :
                null
            }
        </>
    )
}

export default RegisterRecipe;