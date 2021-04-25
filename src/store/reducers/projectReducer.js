const initState = {
    projects: [
        { id: '1', title: 'bexoos', content: 'are vee ludak' },
        { id: '2', title: 'elon', content: 'are vee ludak' },
        { id: '3', title: 'neil', content: 'are vee ludak' },
    ]
};

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err);
            return state;
        default:
            return state;
    }
}
export default projectReducer;