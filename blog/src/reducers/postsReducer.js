// Everytime an action is dispatched, the combineReducer takes the action and old state
// and loops through every reducer. It calls dispatch with the action on every reducer
// and returns a state. If at least one reducer matched the action and updated the state
// then the hasChanged flag is flipped which eventually kicks off a rerender of the page.
// to see this in action go to Lecture 267.

//Reducers receive old state and an action. It then takes the action goes through all the switch
//statements to find a match. CombineReducers does this process for each reducer whenever a new
//action is dispatched. When an action is matched, we make a new copy of the state and update that
//and return the new state where now the hasChanged flag is changed to true if there is a new state.
//See above, but this eventually triggers a rerender of the componenents where the updated info
//is displayed.
export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_POSTS':
            return action.payload
        default:
            return state;
    }
};