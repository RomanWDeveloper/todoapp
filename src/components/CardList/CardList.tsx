import { FC } from "react";
import CardTask, { Task } from "../Card/CardTask";
import { Flex } from "antd";

interface CardListProps {
    cardsData: Task[]
}

// удаление задачи
const handleDeleteTask = (id: number) => {
    
}

// выполнение задачи
const handleCompletedTask = (id: number) => {
    
}

const CardList: FC<CardListProps> = ({ cardsData }) => {
    return (
        <Flex vertical={true} gap={16} className="card-list">
            {cardsData.map(card => 
                <CardTask 
                    key={card.id} 
                    task={card} 
                    onCompleted={() => handleCompletedTask(card.id)} 
                    onDelete={() => handleDeleteTask(card.id)} />
            )}
        </Flex>
    );
};

export default CardList;