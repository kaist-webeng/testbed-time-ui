import React from 'react';

type UserIdPopupProps = {
    userId: number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

function UserIdPopup({ userId, onChange, onClick }: UserIdPopupProps) {
    return (
        <div>
            아직 USER-ID가 설정되어 있지 않아요.
            <input 
                name="userId"
                type="number"
                onChange={onChange}
                value={userId}
            />
            <button onClick={onClick}>설정하기</button>
        </div>
    )
}

export default UserIdPopup;