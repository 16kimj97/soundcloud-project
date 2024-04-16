const LOAD_USER = 'user/loadUser';
const LOAD_USER_ERROR = 'user/loadUserError';

export const loadUser = user => ({
    type: LOAD_USER,
    payload: user
});

export const loadUserError = error => ({
    type: LOAD_USER_ERROR,
    payload: error
});

export const thunkFetchUser = (id) => async dispatch => {
    try {
        const response = await fetch(`/api/users/${id}`);
        if (response.ok) {
            const user = await response.json();
            dispatch(loadUser(user));
        } else {
            const errorData = await response.json();
            dispatch(loadUserError(errorData.error || 'Failed to load user'));
        }
    } catch (error) {
        console.error('Exception when fetching user:', error);
        dispatch(loadUserError('Network or other error occurred'));
    }
};

const userReducer = (state = { user: null, error: null }, action) => {
    switch (action.type) {
        case LOAD_USER:
            return {
                ...state,
                user: action.payload,
                error: null
            };
        case LOAD_USER_ERROR:
            return {
                ...state,
                user: null,
                error: action.payload
            };
        default:
            return state;
    }
};

export default userReducer;
