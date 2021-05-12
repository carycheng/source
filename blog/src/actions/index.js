import jsonPlaceholder from '../apis/jsonPlaceholder';

//Redux-thunk is a middleware that only does one thing:
//An action creator gets automatically dispatched via react-redux. Redux-thunk is the middleware that
//receives the action and checks whether it is:
//1. An object, do nothing and pass it on to reducers
//2. A function, call the function with dispatch and getState objects.
// Dispatch object is unlimited power to initiate changes on the redux side - Change anything you want in redux
// GetState returns the state of the store - Get all state in redux

//1. Function is invoked with dispatch.
//2. We wait for request to finish.
//3. Action is then dispatches manually after we receive a response.
//4. This action is dispatched and it flows through the middleware again but this time we have an object and this
// gets forwarded to reducers.

//Overall - Redux-thunk allows us to dispatch an action at a later time, in this case when a request comes back with a response.

//We can also return functions with Redux Thunk because it will eventually wait for a response and attach the response to the object.
//Without Redux Thunk we will end up with a function in the object with no way of unwrapping the function or converting the function into an object.
export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({type: 'FETCH_POSTS', payload: response})
};