import { FC } from "react";
import CardTask from "../Card/CardTask";
import { Flex } from "antd";

const cardsData = [
    { id: 1, title: 'Купить молока', description: 'Надо купить молока для пирога', completed: false },
    { id: 2, title: 'Сходить в зал', description: 'Не забыть кросовки', completed: true },
    { id: 3, title: 'Сходить в магазин', description: 'Не забыть пакет с пакетами', completed: false },
]


const CardList: FC = () => {
    return (
        <Flex vertical={true} gap={16} className="card-list">
            {cardsData.map(card => <CardTask key={card.id} task={card} />)}
        </Flex>
    );
};

export default CardList;