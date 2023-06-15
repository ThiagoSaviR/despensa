import { StyledSelect, Option } from "./styles";


const Select = (props) => {
    return (
        <StyledSelect
            type={props.type}
            name={props.name}
            value={props.value}
            onChange={props.onChange}
        >
            <Option>Selecione...</Option>
            <Option>Colher de chá</Option>
            <Option>Colher de sopa</Option>
            <Option>Xicara de chá</Option>
            <Option>Quilo</Option>
            <Option>Grama</Option>
            <Option>Unidade</Option>
            <Option>Litro</Option>
            <Option>ML</Option>
        </StyledSelect>
    )

}

export default Select;
