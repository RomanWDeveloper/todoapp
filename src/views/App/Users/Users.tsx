import { Flex } from "antd";
import { FC } from "react";
import { Outlet } from "react-router-dom";

export const Users: FC = () => {
    return (
        <Flex>
            
            <Outlet/>
        </Flex>
    )
}