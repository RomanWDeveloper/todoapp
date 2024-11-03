import {Card as AntCard} from 'antd';
import styled from 'styled-components';

export const Card = styled(AntCard)`
    cursor: pointer;
    min-height: 100px;
    

    .ant-card-meta-title {
        font-size: 16px;
        line-height: 24px;
    }

    .ant-card-body {
        padding: 25px 12px;
    }
`;