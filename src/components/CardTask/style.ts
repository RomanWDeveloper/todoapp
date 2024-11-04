import {Collapse as AntCollapse, Card as AntCard, Checkbox as AntCheckbox, Progress as AntProgress} from 'antd';
import styled from 'styled-components';


export const Collapse = styled(AntCollapse)`
    .ant-collapse-header {
        padding: 12px 10px 0;
        border-top: 1px solid #f0f0f0;
        margin-top: 10px;

        font-size: 14px;
        align-items: center;
        color: #7e7e7e;
    }

    .ant-collapse-content-box {
        padding-left: 40px;
        padding-top: 20px;
    }
`;

export const Card = styled(AntCard)`
    overflow: hidden;
    
    .ant-card-body {
        padding: 20px 0px;
    }
`;


export const Checkbox = styled(AntCheckbox)`
    .ant-checkbox-inner {
        border-radius: 50%;
    }
`;

export const Progress = styled(AntProgress)`
    .ant-progress-bg {
        border-radius: 0px;
    }
    
    .ant-progress-inner {
        border-radius: 0px;
    }
`;