import { Button, Menu } from "antd";
import { styled } from 'styled-components';

export const AddButton = styled(Button)`
   padding: 10px;
   width: 60px;
   height: 60px;
   margin-top: -50px;
   display: block;
`;

export const AntMenu = styled(Menu)`
    padding: 5px 0px 5px;
    box-shadow: 0px -4px 20px 0px rgba(0, 0, 0, 0.08);
    height: 60px;
    
    .ant-menu-item {
        display: flex;
        align-items: center;
    }

    .ant-menu-item-icon {
        display: block;
    }

`;
