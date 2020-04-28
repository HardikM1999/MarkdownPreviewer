export default (state,action) => {
    switch(action.type) {
        case "change":
            return {
                data: action.data
            };
        default:
            return state;
    }
}