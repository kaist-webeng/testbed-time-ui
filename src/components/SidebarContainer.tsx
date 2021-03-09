import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Sidebar from './Sidebar';
import { RootState } from '../modules';
import { clearUserId } from '../modules/userId';

function SidebarContainer() {
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
        <>
            <Sidebar 
                collapsed={collapsed}
                userId={userId}
                onCollapse={onCollapse}
                onChangeUserId={onChangeUserId}
            />
        </>
    )
}

export default SidebarContainer;