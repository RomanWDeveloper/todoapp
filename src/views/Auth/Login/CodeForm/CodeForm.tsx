import { Button,  Flex,  Input, Statistic } from "antd";
import Text from 'antd/es/typography/Text';
import { FC, useState } from "react";

const deadline = Date.now() + 1000 * 10;

const { Countdown } = Statistic;

interface CodeFormProps {
    sharedProps: any,
    onGoBack: () => void,
    email: string
}

export const CodeForm: FC<CodeFormProps> = ({sharedProps, onGoBack, email}) => {
    const [isTimerEnd, setIsTimerEnd] = useState(false);
   
    const onFinish = () => {
        setIsTimerEnd(true);
    }
    
    return (            
        <Flex vertical={true} > 
            <Text style={{marginBottom: 20}} type="secondary">
                Введите код, отправленный на&nbsp;<Text type="success">{email}</Text>
            </Text>

            <Input.OTP autoFocus={true} length={6} {...sharedProps} />


            <Flex>
                <Button 
                    type="link" 
                    disabled={!isTimerEnd} 
                    style={{color: isTimerEnd ? "#76767A" : "#76767A", marginBottom: 20, paddingLeft: 0}}>
                    Отправить код повторно

                    {!isTimerEnd &&
                        <Countdown format="mm:ss" value={deadline} onFinish={onFinish} />                      
                    }
                </Button>


            </Flex>

            <Button onClick={onGoBack} type="primary">Назад</Button>
        </Flex>
    );
}