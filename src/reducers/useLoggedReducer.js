export const userLoggedInitial ={
    isAuthenticated: false,
    user: null
}

const userLoggedReducer = (state = userLoggedInitial, action) => {
    switch (action.type) {
        case 'LOGIN':
            console.log(action);
            return action.payload;
        case 'LOGOUT':
            return userLoggedInitial;
        default:
            return state;
    }
}

export default userLoggedReducer;