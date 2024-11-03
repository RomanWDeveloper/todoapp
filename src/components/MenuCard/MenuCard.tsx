import  {FC, ReactNode} from 'react';
import { Card } from './style';

const { Meta } = Card;

interface MenuCardProps {
    title: string,
    description: string,
    avatar?: ReactNode,
    onClick?: () => void
    style?: object
}

export const MenuCard: FC<MenuCardProps> = ({ title, description, avatar, onClick, style }) => (
  <Card
    style={style}
    onClick={onClick}
  >
    <Meta
      avatar={avatar}
      title={title}
      description={description}
    />
  </Card>
);