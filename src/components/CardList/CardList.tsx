import { FC, useState } from "react";
import { Flex } from "antd";
import { Task } from "@/types/types";
import { CardTask } from "../CardTask";

interface CardListProps {
    cardsData: Task[],
    style?: object
}

const CardList: FC<CardListProps> = ({ cardsData, style }) => {

    // удаление задачи
    const handleDeleteTask = (id: number) => {
        
    }

    // выполнение задачи
    const handleCompletedTask = (id: number) => {

      }

    return (
        <Flex style={{...style, width: "100%"}} vertical={true} gap={16} className="card-list">
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