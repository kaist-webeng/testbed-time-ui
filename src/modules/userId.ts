// action type
const SET_USER_ID = 'userId/SET_USER_ID' as const;

// action generator
export const setUserId = (userId: number) => ({
    type: SET_USER_ID,
    payload: userId
});

type UserIdAction = ReturnType<typeof setUserId>;
type UserIdState = {
    isFirst: boolean,
    userId: number
};

const initialState: UserIdState = {
    isFirst: true,
    userId: 0
};

function userId(
    state: UserIdState = initialState,
    action: UserIdAction
): UserIdState {
    switch (action.type) {
        case SET_USER_ID:
            return {
                ...state,
                isFirst: false,
                userId: action.payload
            };
        default:
            return state;
    }
}

export default userId;