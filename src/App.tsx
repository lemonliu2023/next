import { Outlet, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    label: 'Threejs',
    key: 'Threejs',
    icon: <SettingOutlined />,
    children: [
      {
        type: 'group',
        label: 'mail',
        children: [
          { label: 'Option 1', key: 'threejs' },
          { label: 'Option 2', key: 'threejs' },
        ],
      },
      {
        type: 'group',
        label: 'Item 2',
        children: [
          { label: 'Option 3', key: 'setting:3' },
          { label: 'Option 4', key: 'setting:4' },
        ],
      },
    ],
  },
  {
    label: 'Markdown',
    key: 'Markdown',
    icon: <MailOutlined />,
  },
];

const App: React.FC = () => {
  const navigate = useNavigate()
  const [current, setCurrent] = useState('Threejs');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    navigate('/' + e.key)
    setCurrent(e.key);
  };

  return (
    <div className="app">
      <Menu
        style={{ width: 256, position: 'fixed', height: '100vh', top: 0, left: 0, zIndex: 99 }}
        onClick={onClick}
        selectedKeys={[current]}
        mode="vertical"
        items={items}
      />
      <Outlet />
    </div>
  );
};

export default App;
