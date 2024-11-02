import { AuthWrapper } from "./style"
import { Outlet } from "react-router-dom"

export const Auth = () => {
    return (
        <AuthWrapper vertical={true}>
            <Outlet/>
        </AuthWrapper>
    )
}