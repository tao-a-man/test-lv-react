const initState = {
    users: [
        { id: 1, name: 'Duc Thinh' },
        { id: 2, name: 'Van Ngan' },
    ],
    language: 'vi',
};

const rootReducer = (state = initState, action) => {
    return state;
};

export default rootReducer;
