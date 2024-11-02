import { Flex } from "antd";
import { FC } from "react";

interface HeaderProps {
    todosCount: number
}

const Header: FC<HeaderProps> = ({todosCount}) => {
    return (
        <Flex>
            <Flex>
                Количество задач: {todosCount}
            </Flex>
        </Flex>
    )
}

export default Header;