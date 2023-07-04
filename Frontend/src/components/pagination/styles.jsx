import styled from "styled-components";

import { Pagination } from 'antd';

export const StyledPagination = styled(Pagination)`
    &:where(.css-dev-only-do-not-override-14wwjjs).ant-pagination .ant-pagination-item-active {
        border-color: #d66d6d !important;
    }
    &:where(.css-dev-only-do-not-override-14wwjjs).ant-pagination .ant-pagination-item-active a {
        color: #d66d6d !important;
    }
`;