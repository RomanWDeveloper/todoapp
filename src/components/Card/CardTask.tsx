// components/CardTask/CardTask.tsx
import {FC} from 'react';
import { Button, Card, Checkbox, Flex, Space } from 'antd';
import { DeleteOutlined, CheckOutlined } from '@ant-design/icons';
import CheckableTag from 'antd/es/tag/CheckableTag';

export type Task = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
};

interface CardTaskProps {
  task: Task;
  onDelete: () => void;
  onCompleted: () => void;
}

const CardTask: FC<CardTaskProps> = ({ task, onDelete, onCompleted }) => {
  const { id, title, description, completed } = task;

  return (
    <Space direction="vertical" size={16}>
        <Card 
            size="small" title={title}  
            extra={
              <Flex gap={8}>
                <Button type='primary' onClick={onCompleted} icon={<CheckOutlined />} style={{ backgroundColor: '#8BC34A' }}/>
                <Button type='primary' onClick={onDelete} danger icon={<DeleteOutlined />}/>
              </Flex>
            } 
            style={{ width: 600 }}>
            <p>{description}</p>
        </Card>
  </Space>
  );
};

export default CardTask;