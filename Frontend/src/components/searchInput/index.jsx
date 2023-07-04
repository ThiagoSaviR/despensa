import { InputContainer, StyledInput, SearchImg } from "./styles"

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
                <SearchImg className="fa-solid fa-magnifying-glass"></ SearchImg>
            </InputContainer>
        </>
    )

}

export default Input;