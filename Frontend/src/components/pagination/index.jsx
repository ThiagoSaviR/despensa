import { StyledPagination } from "./styles"

const Pagination = (props) => {
    return (
        <StyledPagination
            onChange={props.onChange}
            current={props.current}
            pageSize={props.pageSize}
            total={props.total}
        />
    )

}

export default Pagination;