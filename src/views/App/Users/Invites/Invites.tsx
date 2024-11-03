import  {FC, useState} from 'react';
import { Avatar, Flex, List, Typography } from 'antd';
import type { FormProps } from 'antd';
import { Button, Form, Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { UserListItem } from './style';

const { Title, Text } = Typography;

type FieldType = {
  email?: string;
};



const data = [
  {
    name: 'Игорь Петров',
    email: 'XtqFP@example.com',
  },
  {
    name: 'Анна Смирнова',
    email: 'anna.smirnova@example.com',
  },
  {
    name: 'sergey.ivanov@example.com',
    email: 'sergey.ivanov@example.com',
  },
  {
    name: 'Мария Кузнецова',
    email: 'maria.kuznetsova@example.com',
  },
];

export const Invites: FC = () => {
  const [showEmailInput, setShowEmailInput] = useState(false);

  const handleInviteClick = () => {
    setShowEmailInput(true);
  };

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);

    setShowEmailInput(false);
  };
  
  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Flex style={{width: '100%', gap: 16}} vertical={true}>
      <Title>Добавить в друрья</Title>
      {showEmailInput ? (
        <Form
          name="basic"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            name="email"
            rules={[{ required: true, message: 'Заполните поле почты' }]}
          >
            <Input autoFocus={true}/>
          </Form.Item>
        </Form>
      ) : (
        <Button type="primary" onClick={handleInviteClick}>
          <PlusOutlined/>  Пригласить
        </Button>
      )}

      <Flex vertical={true} style={{marginTop: 30}}>
        <Text type="secondary">Отправленные приглашения</Text>
        <List
            dataSource={data}
            renderItem={(item, index) => (
            <List.Item>
                <UserListItem
                avatar={<Avatar src={`https://api.dicebear.com/7.x/bottts-neutral/svg?seed=${index}`} />}
                title={<a href="https://ant.design">{item.name}</a>}
                description={item.name !== item.email ? item.email : undefined}
                />
            </List.Item>
            )}
        />
      </Flex>
    </Flex>
  );
};