// import { Flex } from "antd";
import { Outlet } from "react-router-dom";
import { AppWrapper } from "./style";
import { ConfigProvider } from "antd";
import { Theme } from "@/configs/theme";
import { ThemeType } from "@/types/types";
import { createContext, useState } from 'react';

interface AppContextType {
    theme: ThemeType;
    setTheme: (theme: ThemeType) => void;
}
export const AppContext = createContext({} as AppContextType);

export const App = () => {

    const [theme, setTheme] = useState<ThemeType>('dark');

    const initContext = {
        theme, setTheme
    }

    return (
        <AppContext.Provider value={initContext}>
            <ConfigProvider theme={Theme[theme]}>
                <AppWrapper >
                    <Outlet/>
                </AppWrapper>
            </ConfigProvider>
        </AppContext.Provider>
    )
}