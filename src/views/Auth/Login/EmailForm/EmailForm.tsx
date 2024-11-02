import { Button, Checkbox, Form,  Input } from "antd";
import { FC } from "react";


interface EmailFormProps {
    onEmailFormFinish: (values: any) => void
}

export const EmailForm: FC<EmailFormProps> = ({onEmailFormFinish}) => {
    const [emailForm] = Form.useForm();
    return (            
        <Form
            form={emailForm}
            name="login"
            onFinish={onEmailFormFinish}
            style={{ maxWidth: 600 }}
            scrollToFirstError
        >
            <Form.Item
            
            name="email"
            label="E-mail"
            rules={[
                {
                type: 'email',
                message: 'Некорректная почта E-mail!',
                },
                {
                required: true,
                message: 'Пожалуйста, введите E-mail!',
                },
            ]}
            >
            <Input style={{  borderColor: 'var(--color-secondary)' }}/>
            </Form.Item>
    
            <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
                {
                validator: (_, value) =>
                    value ? Promise.resolve() : Promise.reject(new Error('Не хороший')),
                },
            ]}
    
            >
            <Checkbox>
                Я ознакомлен с <a href=""> соглашением</a>
            </Checkbox>
            </Form.Item>
            <Form.Item>
            <Button type="primary" htmlType="submit">
                Далее
            </Button>
            </Form.Item>
        </Form>
);
}