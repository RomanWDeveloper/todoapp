import { FC, useState } from "react";
import CardTask, { Task } from "../Card/CardTask";
import { Flex } from "antd";

interface CardListProps {
    cardsData: Task[],
    style: object
}

const CardList: FC<CardListProps> = ({ cardsData, style }) => {

    // удаление задачи
    const handleDeleteTask = (id: number) => {
        
    }

    // выполнение задачи
    const handleCompletedTask = (id: number) => {

      }

    return (
        <Flex style={style} vertical={true} gap={16} className="card-list">
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