import { StyledTextarea, TextareaConteiner } from "./styles"

const Textarea = (props) => {
    return (
        <>
            <TextareaConteiner>
                <StyledTextarea
                    type={props.type}
                    placeholder={props.placeholder}
                    name={props.name}
                    value={props.value}
                    onChange={props.onChange}
                />
            </TextareaConteiner>
        </>
    )

}

export default Textarea;
