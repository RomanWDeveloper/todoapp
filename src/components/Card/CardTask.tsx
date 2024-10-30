// components/CardTask/CardTask.tsx
import {FC} from 'react';
import styles from './CardTask.module.scss';
import { Card, Checkbox, Space } from 'antd';

interface CardTaskProps {
  task: {
    id: number;
    title: string;
    description: string;
    completed: boolean;

    onCheckboxClick: () => void;
  };

}

const CardTask: FC<CardTaskProps> = ({ task }) => {
  const { id, title, description, completed } = task;

  return (
    <Space direction="vertical" size={16}>
        <Card 
            size="small" title={title}  
            extra={
                <Checkbox onChange={task.onCheckboxClick} /> 
            } 
            style={{ width: 600 }}>
            <p>{description}</p>
        </Card>
  </Space>
  );
};

export default CardTask;