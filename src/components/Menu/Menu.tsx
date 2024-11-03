import { FC, useState } from 'react';
import { HomeOutlined, PlusOutlined, SettingOutlined, UnorderedListOutlined, UserAddOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { AddButton, AntMenu } from './style';
import { Link } from 'react-router-dom';
import { TASK } from '@/configs/links/task';
import { SETTINGS } from '@/configs/links/settings';
import { USERS } from '@/configs/links/users';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
    {
        key: 'home',
        icon:
            <Link to={'/'}> 
                <HomeOutlined style={{ fontSize: 25 }}/>
            </Link>,
        label: 'Главная',
    },

    {
        key: 'tasks',
        icon: <UnorderedListOutlined style={{ fontSize: 25 }} />,
        label: 'Список задач',
    },

    {
        key: 'addTask',
        icon: 
            <Link to={TASK.CREATE.fullPath}>
                <AddButton value="large"  type="primary" shape="circle"  icon={<PlusOutlined style={{ fontSize: 30, color: 'white' }}/>} />
            </Link>,
        label: 'Добавить задачу',
    },
    {
        key: 'users',
        icon: 
        <Link to={USERS.INVITES.fullPath}>
            <UserAddOutlined style={{ fontSize: 25 }}/>
        </Link>,
           
        label: 'Друзья',
    },
    {
        key: 'settings',
        icon: 
            <Link to={SETTINGS.path}>
            <SettingOutlined style={{ fontSize: 25 }}/>
            </Link>,
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
            borderRadius: '20px 20px 0px 0px ',
        }} 
        mode="horizontal" 
        items={items} 
        />
    )
};

