import { MoonOutlined, SunOutlined } from "@ant-design/icons"
import { Flex } from "antd"
import { Switch } from "./style"
import { useContext } from "react";
import { AppContext } from "@/layouts/App";

export const Settings = () => {
    const { setTheme } = useContext(AppContext);

    const toggleTheme = (checked: boolean) => {
        setTheme(checked ? 'dark' : 'light');
    }

    return (
        <Flex>
            <Switch onChange={toggleTheme} checkedChildren={<MoonOutlined />} unCheckedChildren={<SunOutlined />} defaultChecked />
        </Flex>
    )
}