import { StyledSelect, Option } from "./styles";


const Select = (props) => {
    return (
        <StyledSelect
            type={props.type}
            name={props.name}
            value={props.value}
            onChange={props.onChange}
        >
            {props.options.map(option => (
                <Option key={option}>{option}</Option>
            ))}
        </StyledSelect>
    )

}

export default Select;
