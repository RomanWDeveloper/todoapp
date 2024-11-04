import {FC} from 'react';
import { Flex } from 'antd';
import { Card, Checkbox, Collapse, Progress } from './style';
import { Task } from '@/types/types';

interface CardTaskProps {
  task: Task;
  onDelete: () => void;
  onCompleted: () => void;
}

export const CardTask: FC<CardTaskProps> = ({ task, onDelete, onCompleted }) => {
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

              {subtasks && subtasks.length > 0 && (
                <Progress 
                  percent={subtasks?.filter(subtask => subtask.completed).length / subtasks?.length * 100} 
                  showInfo={false} 
                  style={{width: "100%", position: "absolute", bottom: 0, display: 'flex', borderRadius: 0}}
                  />
              )}

            </Flex>

        </Card>
  );
};