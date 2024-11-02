import { FC, useState } from 'react';
import { HomeOutlined, PlusOutlined, SettingOutlined, UnorderedListOutlined, UserAddOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { AddButton, AntMenu } from './style';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
    {
        key: 'home',
        icon: <HomeOutlined style={{ fontSize: 25 }}/>,
        label: 'Главная',
    },

    {
        key: 'tasks',
        icon: <UnorderedListOutlined style={{ fontSize: 25 }} />,
        label: 'Список задач',
    },

    {
        key: 'addTask',
        icon: <AddButton value="large"  type="primary" shape="circle"  icon={<PlusOutlined style={{ fontSize: 30, color: 'white' }}/>} />,
        label: 'Добавить задачу',
    },
    {
        key: 'users',
        icon: <UserAddOutlined style={{ fontSize: 25 }}/>,
        label: 'Друзья',
    },
    {
        key: 'settings',
        icon: <SettingOutlined style={{ fontSize: 25 }}/>,
        label: 'Настройки',
    },
];


export const Menu: FC = () => {
    const [current, setCurrent] = useState('');

    const onClick: MenuProps['onClick'] = (e) => {
        setCurrent(e.key);
    };
    return (
        <AntMenu 
        selectedKeys={[current]}

        onClick={onClick} 
        style={{ 
            width: "100%",
            maxWidth: "100%",
            position: 'fixed',
            bottom: 0,
            left: 0,
            justifyContent: 'center',
        }} 
        mode="horizontal" 
        items={items} 
        />
    )
};

