import { Menu } from "@/components/Menu";
// import { Flex } from "antd";
import { Outlet } from "react-router-dom";
import { AppWrapper, ContentWrapper } from "./style";

export const App = () => {
    return (
        <AppWrapper vertical={true}>
            <ContentWrapper vertical={true}>
                <Outlet/>
            </ContentWrapper>
            <Menu/>
        </AppWrapper>
    )
}
