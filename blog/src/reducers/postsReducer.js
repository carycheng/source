// Everytime an action is dispatched, the combineReducer takes the action and old state
// and loops through every reducer. It calls dispatch with the action on every reducer
// and returns a state. If at least one reducer matched the action and updated the state
// then the hasChanged flag is flipped which eventually kicks off a rerender of the page.
export default () => {
    return 123;
};