import { FC } from "react";
import CardTask from "../Card/CardTask";
import { Flex } from "antd";

const cardsData = [
    { id: 1, title: 'Павел похвален', description: 'Надо его похвалить за то что он что то сделал', completed: false },
    { id: 2, title: 'Павел унижен', description: 'А потому что просто так', completed: true },
    { id: 3, title: 'Павел натурал', description: 'нет, определенно нет', completed: false },
]


const CardList: FC = () => {
    return (
        <Flex vertical={true} gap={16} className="card-list">
            {cardsData.map(card => <CardTask key={card.id} task={card} />)}
        </Flex>
    );
};

export default CardList;