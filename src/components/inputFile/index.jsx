import React from "react";
import { InputContainer, StyledInput, Text } from "./styles"
import Button from "../button";


const Input = React.forwardRef((props, ref) => {
    return (
        <>
            <InputContainer>
                <Text>
                    {props.values.image ? "Imagem carregada" : "Nenhum arquivo carregado"}
                </Text>
                <StyledInput
                    type={props.type}
                    placeholder={props.placeholder}
                    name={props.name}
                    ref={ref}
                    value={props.value}
                    onChange={props.onChange}
                />
                <Button
                    onClick={props.onClick}
                    text="Imagem da sua Receita"
                />
            </InputContainer>
        </>
    )

});

export default Input;