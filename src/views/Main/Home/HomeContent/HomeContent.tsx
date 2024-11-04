import { CardList } from "@/components/CardList"
import { MenuCard } from "@/components/MenuCard"
import { CheckCircleOutlined, FormOutlined, TeamOutlined } from "@ant-design/icons"
import { Flex } from "antd"
import { Typography } from 'antd';

const { Title } = Typography;

const taskData = [
    { id: 1, title: "Купить продукты", completed: false },
    { id: 2, title: "Сходить в магазин", completed: true },
    { id: 3, title: "Закончить работу над проектом", completed: false, subtasks: [
        { id: 1, title: "Сделать интерфейс", completed: true },
        { id: 2, title: "Добавить функциональность", completed: true },
        { id: 3, title: "Тестировать", completed: false },
    ]},
    { id: 4, title: "Залить на гитхаб", completed: false },
]

export const HomeContent = () => {
    return (
        <Flex gap={16} wrap={true}>
            <MenuCard
                title="Мои задачи"
                description="25"
                onClick={() => console.log('click')}
                style={{ width: "100%"}}
                avatar={
                    <FormOutlined style={{ fontSize: 25, color: "rgb(201 201 201)" }}/>
                }
            />


            <MenuCard
                title="Общие"
                description="4"
                onClick={() => console.log('click')}
                style={{ width: "calc(50% - 8px)"}}
                avatar={
                    <TeamOutlined style={{ fontSize: 25, color: "rgb(147 206 255)" }}/>
                }
            />

            <MenuCard
                title="Завершенные"
                description="12"
                onClick={() => console.log('click')}
                style={{ width: "calc(50% - 8px)"}}
                avatar={
                    <CheckCircleOutlined style={{ fontSize: 25, color: "#ade294" }}/>
                }
            />

            <Title type="secondary" level={4} style={{marginBottom: 0}}>Актуальное</Title>
            <CardList cardsData={taskData} />
        </Flex>
    )
}