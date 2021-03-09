// action type
const SET_USER_ID = 'userId/SET_USER_ID' as const;
const CLEAR_USER_ID = 'userId/CLEAR_USER_ID' as const;

// action generator
export const setUserId = (userId: number) => ({
  type: SET_USER_ID,
  payload: userId,
});

export const clearUserId = () => ({
  type: CLEAR_USER_ID,
});

type UserIdAction =
  | ReturnType<typeof setUserId>
  | ReturnType<typeof clearUserId>;

type UserIdState = {
  isFirst: boolean;
  userId: number;
};

const initialState: UserIdState = {
  isFirst: true,
  userId: 0,
};

function userId(
  state: UserIdState = initialState,
  action: UserIdAction,
): UserIdState {
  switch (action.type) {
    case SET_USER_ID:
      return {
        ...state,
        isFirst: false,
        userId: action.payload,
      };
    case CLEAR_USER_ID:
      return {
        ...state,
        isFirst: true,
      };
    default:
      return state;
  }
}

export default userId;
