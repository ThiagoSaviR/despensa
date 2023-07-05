import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    FormContainer,
    Wrapper,
    WrapperInputSelect,
    Title,
    Form,
    WrapperContent,
    WrapperImage,
    Image,
    WrapperIngredients,
    TitleContent,
    WrapperText,
    Text
} from "./styles"
import Input from "../../components/Input";
import Select from "../../components/select";
import Textarea from "../../components/textarea";
import InputFile from "../../components/inputFile";
import Button from "../../components/button";
import Modal from "../../components/modal";

import { PostRecipe } from "../../api/recipes";

const RegisterRecipe = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [modalIsVisible, setModalIsVisible] = useState(false);
    const [ingredientNumber, setIngredientNumber] = useState(0);

    const navigate = useNavigate();

    const inputRef = useRef(null);

    const ingredient = { qtd: 0, type: "", ingredientName: "" };
    const initialValues = {
        name: "",
        ingredients: [
            ingredient,
        ],
        image: "",
        preparation: "",
    }

    const [values, setValues] = useState(initialValues);

    const handleChange = (event, i) => {
        const { name, value } = event.target;

        if (name === "qtd" || name === "type" || name === "ingredientName") {
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
        setIngredientNumber(ingredientNumber + 1);
        initialValues.ingredients.push(ingredient);
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
                                                options={[
                                                    "Selecione...",
                                                    "Colher de chá",
                                                    "Colher de sopa",
                                                    "Xicara de chá",
                                                    "Quilo",
                                                    "Grama",
                                                    "Unidade",
                                                    "Litro",
                                                    "ML"
                                                ]}
                                            />
                                        </WrapperInputSelect>
                                        <Input
                                            type="text"
                                            placeholder="ingrediente"
                                            name="ingredientName"
                                            value={values.ingredients[i]?.ingredientName || ""}
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
                            name="preparation"
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
                <Modal
                    title={values.name}
                    closeModal={() => {
                        setModalIsVisible(!modalIsVisible)
                    }}
                    content={
                        <>
                            <WrapperContent>
                                <WrapperImage>
                                    <Image src={values.image} alt="Imagem da receita" />
                                </WrapperImage>
                                <WrapperIngredients>
                                    <TitleContent>Ingredientes</TitleContent>
                                    {values.ingredients.map(ingredient => {
                                        if (ingredient.qtd === 0) {
                                            return (
                                                <p key={ingredient.ingredientName}>sem ingrediente aqui</p>
                                            )
                                        } else {
                                            return (
                                                <p key={ingredient.ingredientName}>{`${ingredient.qtd} (${ingredient.type}) ${ingredient.ingredientName}`}</p>
                                            )
                                        }
                                    })}
                                </WrapperIngredients>
                            </WrapperContent>
                            <WrapperText>
                                <TitleContent>Modo de Preparo</TitleContent>
                                <Text>{values.preparation}</Text>
                            </WrapperText>
                            <WrapperContent>
                                <Button text="Voltar" onClick={() => setModalIsVisible(!modalIsVisible)} />
                                <Button text="Confirmar" onClick={() => {
                                    PostRecipe(values);
                                    navigate("/recipes");
                                    window.scrollTo({
                                        top: 0,
                                        behavior: "smooth",
                                    });
                                }} />
                            </WrapperContent>
                        </>

                    }
                />
            ) :
                null
            }
        </>
    )
}

export default RegisterRecipe;