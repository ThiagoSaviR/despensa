import { StyledButton } from "./styles";


const Button = (props) => {
    return (
        <>
            <StyledButton
                onClick={props.onClick}
                type={props.type}
            >
                {props.text}
            </StyledButton>
        </>
    )
}

export default Button;