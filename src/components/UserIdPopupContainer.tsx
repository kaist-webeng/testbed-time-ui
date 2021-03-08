import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUserId } from '../modules/userId';
import { RootState } from '../modules';
import UserIdPopup from './UserIdPopup';

function UserIdPopupContainer() {
    const [uid, setUid] = useState(0);
    const isFirst = useSelector((state: RootState) => state.userId.isFirst);
    const dispatch = useDispatch();

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUid(parseInt(e.target.value));
    }

    const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        dispatch(setUserId(uid));
    }

    return (
        <>
            {isFirst && 
                <UserIdPopup 
                    userId={uid} 
                    onChange={onChange} 
                    onClick={onClick}
                />
            }
        </>
    )
}

export default UserIdPopupContainer;