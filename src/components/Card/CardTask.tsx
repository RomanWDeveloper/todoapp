// components/CardTask/CardTask.tsx
import {FC} from 'react';
import { Button, Flex } from 'antd';

import Title from 'antd/es/skeleton/Title';
import { Card, Checkbox, Collapse } from './style';

export type Task = {
  id: number;
  title: string;
  description?: string;
  completed: boolean;
  subtasks?: Task[]
};

interface CardTaskProps {
  task: Task;
  onDelete: () => void;
  onCompleted: () => void;
}

const CardTask: FC<CardTaskProps> = ({ task, onDelete, onCompleted }) => {
  const { id, title, description, completed, subtasks } = task;

  return (
        <Card
            bordered={false}
            size="default" 
            style={{ width: "100%", padding: 0 }}>

            <Flex vertical={true}>
                  <Checkbox  style={{padding: "0 15px"}} key="setting" checked={completed} onChange={onCompleted} >
                    <h4 style={{margin: 0}}>{title}</h4>
                  </Checkbox>
                  
                  {subtasks && subtasks.length > 0 && (
                        <Collapse
                          size="small"
                          ghost={true}
                          items={[{ key: '1', 
                            label: 'Подзадачи', 
                            children: (
                              <Flex vertical={true} gap={30}>
                                {subtasks.map(subtask => 
                                  <Checkbox key={subtask.id} checked={subtask.completed} onChange={onCompleted}>
                                    <h5 style={{margin: 0}}>{subtask.title}</h5>
                                  </Checkbox>
                                )}
                              </Flex>
                            )
                          }]}
                      />
                  )}

            </Flex>

        </Card>
  );
};

export default CardTask;