import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { 
    FunctionOutlined, 
    UserOutlined, 
    UnorderedListOutlined 
} from '@ant-design/icons';
import 'antd/dist/antd.css';
import './PageHeader.css';
import { RootState } from '../modules';
import { clearUserId } from '../modules/userId';

function PageHeader() {
    const { Sider } = Layout;
    const { SubMenu } = Menu;
    const [collapsed, setCollapsed] = useState(false);
    const userId = useSelector((state: RootState) => state.userId.userId);
    const dispatch = useDispatch();

    const onCollapse = (c: boolean) => {
        setCollapsed(c);
    }

    const onChangeUserId = () => {
        dispatch(clearUserId());
    }

    return (
        <Sider collapsible={true} collapsed={collapsed} onCollapse={onCollapse}>
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

export default withRouter(PageHeader);