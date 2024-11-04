import { GoogleIconFilled, VkIconFilled } from "@/components/UI/CustomIcons/CustomIcons";
import { Button, Checkbox, Divider, Flex, Form,  Input } from "antd";
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
            style={{marginBottom: 25}}
            name="email"
            
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
                <Input placeholder="E-mail"/>
            </Form.Item>

            <Flex style={{ width: "100%" }} gap={10} vertical={true} justify="space-between">
                <Button type="primary" htmlType="submit" style={{width: '100%'}}>
                    Продолжить
                </Button>

                <Divider />
                
                <Button variant="outlined"icon={<VkIconFilled />}>
                    Войти с помощью VK
                </Button>
                {/* <Button variant="outlined"icon={<GoogleIconFilled />}>
                    Войти с помощью Google
                </Button> */}
            </Flex>
        </Form>
);
}