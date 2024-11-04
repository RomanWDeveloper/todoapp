import { useState } from 'react';
import { EmailForm } from './EmailForm';
import { CodeForm } from './CodeForm';
import { Flex } from './style';
import { OTPProps } from 'antd/es/input/OTP';
import { Flex as AntFlex, Button, Modal, Typography } from 'antd';
import { PrivatePolicy } from '@/components/StaticBlocks/PrivatPolicy';

const { Title, Text } = Typography;
export const Login = () => {
    const [showCodeForm, setshowCodeForm] = useState(false);
    const [email, setEmail] = useState<string>('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const emailFormonFinish = (values: any) => {
      console.log(values);
      setEmail(values.email);
      setshowCodeForm(true);
    };

    const onChange: OTPProps['onChange'] = (text) => {
        console.log('onChange:', text);
      };
    
      const sharedProps: OTPProps = {
        onChange,
      };

    const handleGoBack = () => {
        setshowCodeForm(false);
    }

    return (
        <>
        <AntFlex vertical={true} style={{padding: 0, margin: 0, width: '100%'}}>
            <Title level={1}>TaskCircle</Title>
            <Flex >
                <Title level={3} style={{margin: '0 0 20px'}}>Войти или зарегистрироваться</Title>
                {showCodeForm ? (
                    <CodeForm sharedProps={sharedProps} onGoBack={handleGoBack} email={email}/>
                ) : (
                    <EmailForm onEmailFormFinish={emailFormonFinish} />
                )}
            </Flex>
            <Text style={{marginTop: 20, textAlign: 'center', fontSize: 12}} type="secondary">
                Продолжая вход или регистрацию, 
                вы соглашаетесь на обработку своих 
                персональных данных в соответствии с нашей
                <Text onClick={() => setIsModalOpen(true)} style={{fontSize: 12}}> политикой конфиденциальности. </Text>
            </Text>
        </AntFlex>
        <Modal 
            open={isModalOpen} 
            onCancel={() => setIsModalOpen(false)}
            footer = {[
                <Button key="submit" type="primary" onClick={() => setIsModalOpen(false)}>
                    Закрыть
              </Button>
            ]}
            >
            <PrivatePolicy />
        </Modal>
        </>
    )
};