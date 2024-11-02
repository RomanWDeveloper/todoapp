import Title from 'antd/es/typography/Title';
import { useState } from 'react';
import { EmailForm } from './EmailForm';
import { CodeForm } from './CodeForm';
import { Flex } from './style';
import { OTPProps } from 'antd/es/input/OTP';

export const Login = () => {
    const [showCodeForm, setshowCodeForm] = useState(false);
    const [email, setEmail] = useState<string>('');

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
        <Flex vertical={true}>
            <Title>Авторизация</Title>
            {showCodeForm ? (
                 <CodeForm sharedProps={sharedProps} onGoBack={handleGoBack} email={email}/>
            ) : (
                <EmailForm onEmailFormFinish={emailFormonFinish} />
            )}
        </Flex>
    )
};