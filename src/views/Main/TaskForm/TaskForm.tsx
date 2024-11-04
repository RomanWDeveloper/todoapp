import { FC, useState } from 'react';
import { CloseOutlined,  PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, Typography } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { FormItem } from './style';

const { Title } = Typography;

export const TaskForm: FC = () => {
  const [showDescription, setShowDescription] = useState(false);

  const onFinish = (values: any) => {
    console.log('Received values of form:', values);
  };

  const handleAddDescription = () => {
    setShowDescription(true);
  };

  return (
    <Form
      name="task_form"
      onFinish={onFinish}
      style={{ minHeight: "80dvh", display: "flex", flexDirection: "column", gap: "20px" }}
    >
      <Title>Новая задача</Title>
      <FormItem >
        <Input autoFocus={true} placeholder="Название" />
      </FormItem>
      {showDescription && (
        <FormItem>
          <TextArea autoFocus={true} placeholder="Описание (не обязательно)" rows={4} />
        </FormItem>
      )}
        {!showDescription && (
          <Button type="default" onClick={handleAddDescription} icon={<PlusOutlined />}>
             описание
          </Button>
        )}
      <Form.List name="names">
        {(fields, { add, remove }, { errors }) => (
          <>
            {fields.map((field, index) => (
              <FormItem required={false} key={field.key}>
                <FormItem
                  {...field}
                  validateTrigger={['onChange', 'onBlur']}
                  rules={[
                    {
                      required: true,
                      whitespace: true,
                      message: 'Введите название для подзадачи',
                    },
                  ]}
                  noStyle
                >
                  <Input
                    placeholder={'Подзадача ' + (index + 1)}
                    style={{ width: '90%', marginRight: 8 }}
                  />
                </FormItem>

                <CloseOutlined
                  className="dynamic-delete-button"
                  onClick={() => remove(field.name)}
                />
              </FormItem>
            ))}
            <FormItem>
              <Button
                type="dashed"
                onClick={() => add()}
                style={{ width: '100%' }}
                icon={<PlusOutlined />}
              >
                подзадача
              </Button>
              <Form.ErrorList errors={errors} />
            </FormItem>
          </>
        )}
      </Form.List>
      <FormItem>
        <Button type="primary" htmlType="submit" style={{ width: '100%',  display: 'block' }}>
          Сохранить
        </Button>
      </FormItem>
    </Form>
  );
};