import { Button, Form, FormProps, Input } from "antd";
import { FC, useState } from "react";

type FieldType = {
    title?: string;
    description?: string;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
};



const TodoPanel : FC = () => {
    // const [todo, setTodo] = useState({});

    return (
        <Form
        name="basic"
        layout="vertical"
        style={{ maxWidth: 600, width : '100%' }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item<FieldType>
          label="Название"
          name="title"
          id="title"
          rules={[{ required: true, message: 'Заполните название' }]}
        >
          <Input />
        </Form.Item>
    
        <Form.Item<FieldType>
          label="Описание"
          name="description"
          id="description"
          rules={[{ required: false}]}
          
        >
          <Input.TextArea 
            style={{ minHeight: 100 }}
          />
        </Form.Item>


        <Form.Item style={{textAlign: 'right' }}>
          <Button type="primary" htmlType="submit">
            Сохранить
          </Button>
        </Form.Item>
      </Form>
    )
}

export default TodoPanel

