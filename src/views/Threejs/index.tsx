import routerConfig from '@/router';
import { Menu, MenuProps } from 'antd';
import { useEffect, useMemo, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

const Threejs = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const menuItems = useMemo<MenuItem[]>(() => {
    const threejsRouterConfig =
      routerConfig
        .find((item) => item.path === '/')
        ?.children?.find((item) => item.path === '/threejs')?.children || [];
    const menuItems: MenuItem[] = [];
    threejsRouterConfig.forEach((item) => {
      menuItems.push({
        key: item.path!,
        label: item.path,
        children: item.children?.map((subItem) => {
          return {
            key: subItem.path!,
            label: subItem.path,
          };
        }),
      });
    });
    return menuItems;
  }, []);
  const [selectedKeys, setSelectKeys] = useState<string[]>([]);
  console.log(selectedKeys, 'sss')
  useEffect(() => {
    const keyPathList = location.pathname.split('/').filter(item => Boolean(item))
    if(keyPathList.pop() === 'threejs') {
      navigate('/threejs/examples/wall')
      return;
    }
    setSelectKeys(location.pathname.split('/'))
  }, [navigate, location.pathname])
  return (
    <div style={{ height: '100%', display: 'flex' }}>
      <Menu
        style={{ width: 256, height: '100%' }}
        onClick={(e) => {
          const keyPathList = e.keyPath.reverse();
          navigate(keyPathList.join('/'));
        }}
        selectedKeys={selectedKeys}
        openKeys={selectedKeys}
        mode="inline"
        items={menuItems}
      />
      <Outlet />
    </div>
  );
};

export default Threejs;
