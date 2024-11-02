import { FC } from 'react';
import { AppstoreOutlined, MailOutlined, ProfileOutlined, SettingOutlined, UserAddOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu as AntMenu } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    key: 'tasks',
    icon: <MailOutlined style={{ fontSize: '30px', color: '#08c' }}/>,
  },
  {
    key: 'home',
    icon: <AppstoreOutlined />,
  },
  {
    key: 'settings',
    icon: <SettingOutlined />,
  },
  {
    key: 'profile',
    icon: <UserAddOutlined />,
  },
];

const onClick: MenuProps['onClick'] = (e) => {
  console.log('click', e);
};

export const Menu: FC = () => (
  <AntMenu 
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
);

