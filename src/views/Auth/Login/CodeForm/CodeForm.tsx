import { Button,  Flex,  Form,  Input } from "antd";
import Title from 'antd/es/typography/Title';
import Text from 'antd/es/typography/Text';
import { FC } from "react";


interface CodeFormProps {
    sharedProps: any,
    onGoBack: () => void,
    email: string
}

export const CodeForm: FC<CodeFormProps> = ({sharedProps, onGoBack, email}) => {
    return (            
        <Flex vertical={true} > 
            <Text style={{marginBottom: 20}} type="secondary">
                Введите код, отправленный на&nbsp;<Text type="success">{email}</Text>
            </Text>

            <Input.OTP autoFocus={true} length={6} {...sharedProps} />

            <Button type="link" style={{color: 'var(--color-secondary)', marginBottom: 20}}>Отправить код повторно</Button>
            <Button onClick={onGoBack} type="primary">Назад</Button>
        </Flex>
    );
}