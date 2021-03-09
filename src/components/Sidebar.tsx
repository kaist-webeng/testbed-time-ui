import React from 'react';
import { NavLink } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { 
    FunctionOutlined, 
    UserOutlined, 
    UnorderedListOutlined 
} from '@ant-design/icons';
import 'antd/dist/antd.css';

type SidebarProps = {
    children?: React.ReactNode;
    collapsed: boolean;
    userId: number;
    onCollapse: (c: boolean) => void;
    onChangeUserId: () => void;
}

function Sidebar({collapsed, userId, onCollapse, onChangeUserId }: SidebarProps) {
    const { Sider } = Layout;
    const { SubMenu } = Menu;

    return (
        <Sider
            collapsible={true} 
            collapsed={collapsed}
            collapsedWidth="0"
            onCollapse={onCollapse}
            breakpoint="md"
        >
            <Menu theme="dark" mode="inline">
                <SubMenu key="userIdSubMenu" icon={<UserOutlined />} title={userId}>
                    <Menu.Item 
                        key="modifyUserId"
                        onClick={onChangeUserId}
                    >
                        Change ID
                    </Menu.Item>
                </SubMenu>
                <Menu.Item key="/" icon={<FunctionOutlined />}>
                    <NavLink to="/">Functions</NavLink>
                </Menu.Item>
                <Menu.Item key="/list" icon={<UnorderedListOutlined />}>
                    <NavLink to="/list">Current Triggers</NavLink>
                </Menu.Item>
            </Menu>
        </Sider>
    )
}

export default Sidebar;