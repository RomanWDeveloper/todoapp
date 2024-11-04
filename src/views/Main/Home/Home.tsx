import { CardList } from "@/components/CardList";
import { Flex, Typography } from "antd"
import { HomeContent } from "./HomeContent";
const { Title, Text } = Typography;

export const Home = () => {
    const currentDate = new Date();
    const monthNames: Record<number, string> = {
        1: 'января',
        2: 'февраля',
        3: 'марта',
        4: 'апреля',
        5: 'мая',
        6: 'июня',
        7: 'июля',
        8: 'августа',
        9: 'сентября',
        10: 'октября',
        11: 'ноября',
        12: 'декабря',
      };
      
    const date: {
        day: number,
        month: number,
        dayOfWeek: string,
    } = {
        day: currentDate.getDate(),
        month: currentDate.getMonth() + 1,
        dayOfWeek: currentDate.toLocaleString('ru-RU', { weekday: 'long' }),
    }

    return (
        <Flex vertical={true}>
            <Title 
                level={2} style={{ margin: 0, fontSize: 32, textTransform: 'capitalize'  }}>
                    {date.day} {monthNames[date.month]} 
            </Title>
            <Text type="secondary" style={{ marginBottom: 20 }}>{date.dayOfWeek}</Text>

            <HomeContent />
            
        </Flex>
    )
}