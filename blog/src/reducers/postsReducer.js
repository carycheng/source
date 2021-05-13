// Everytime an action is dispatched, the combineReducer takes the action and old state
// and loops through every reducer. It calls dispatch with the action on every reducer
// and returns a state. If at least one reducer matched the action and updated the state
// then the hasChanged flag is flipped which eventually kicks off a rerender of the page.
// to see this in action go to Lecture 267.
export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_POSTS':
            return action.payload;
        default:
            return state;
    }
};