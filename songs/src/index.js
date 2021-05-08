import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App';
import reducers from './reducers';

// Connector component communicates with the provider from all the other providers.
// At the top level it's a Provider component is above the App component. It makes
// the Redux store available to any nested components that need to access the Redux store.
// The redux store contains the reducers as well as the state. The Connector component
// allows the nested component to communicate with the top level Provider component by passing
// actions. React then accesses reducers and updates the state. 
ReactDOM.render(
    <Provider store={createStore(reducers)}>
    <App />
    </Provider>, 
    document.querySelector('#root'));