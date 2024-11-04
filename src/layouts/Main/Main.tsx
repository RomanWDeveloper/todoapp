import { Flex } from "antd"
import { Outlet } from "react-router-dom"
import { ContentWrapper } from "./style"
import { Menu } from "@/components/Menu"

export const Main = () => {
    return (
        <Flex>
            <ContentWrapper vertical={true}>
                <Outlet/>
            </ContentWrapper>
            
            <Menu/>
        </Flex>
    )
}