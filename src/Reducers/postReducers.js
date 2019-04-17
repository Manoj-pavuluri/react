
const initialSate = {
    posts: [],
    manoj: []
}
const PostReducers = (state = initialSate, action) => {
    switch (action.type) {
        case "GET_POSTS":
            return {
                ...state,
                manoj: action.payload
            };
        case "GET_SUBJECTS":
            return {
                ...state,
                posts: action.payload
            };
        default:
            return state
    }

}

export default PostReducers;