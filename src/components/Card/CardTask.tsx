// components/CardTask/CardTask.tsx
import {FC} from 'react';
import { Button, Card, Checkbox, Flex, Space } from 'antd';

import Meta from 'antd/es/card/Meta';
import { CloseOutlined } from '@ant-design/icons';

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

            actions={[
              <Flex  gap={20} style={{ width: "100%", padding: "0 10px", justifyContent: "flex-end" }}>
                  <Checkbox style={{ borderRadius: "50%" }} key="setting" checked={completed} onChange={onCompleted} />
                  <CloseOutlined onClick={onDelete} style={{ color: "red" }} />
              </Flex>
            ]}

            bordered={false}
            size="small" 
            style={{ width: "100%" }}>

            <Meta
              title={title}
              description={description}
            />
        </Card>
  </Space>
  );
};

export default CardTask;