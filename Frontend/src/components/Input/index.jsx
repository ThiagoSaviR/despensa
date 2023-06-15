import { InputContainer, StyledInput } from "./styles"


const Input = (props) => {
    return (
        <>
            <InputContainer>
                <StyledInput
                    type={props.type}
                    placeholder={props.placeholder}
                    name={props.name}
                    value={props.value}
                    onChange={props.onChange} 
                />
            </InputContainer>
        </>
    )

}

export default Input;