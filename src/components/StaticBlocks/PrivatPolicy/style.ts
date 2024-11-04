import {Flex as AntFlex} from 'antd';
import styled from 'styled-components';

export const Flex = styled(AntFlex)`
    h1 {
        font-size: 22px;
        line-height: 1.2;
        font-weight: 700;
        margin-bottom: 10px;
    }

    h2 {
        font-size: 18px;
        line-height: 1.2;
        font-weight: 700;
        margin-bottom: 10px;
    }

    p {
        font-size: 14px;
        line-height: 1.2;
        margin-bottom: 5px;
        margin-top: 5px;
    }

    ul {
        margin-bottom: 20px;

        li {
            font-size: 14px;
            line-height: 24px;
        }
    }

    h5 {
        font-size: 16px;
        line-height: 24px;
    }
`