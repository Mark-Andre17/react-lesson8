import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';

const reducer = (state = 0, action) => {
    
    switch (action.type) {
         case 'plus':
            return state + 1;
        case'minus':
            if(state > 0) return state - 1;
        case'reset':
            return state = 0;
        default:
            return state;
    }
    // if(action.type === 'plus') {
    //     return state + 1;
    // }
    // if(action.type ==='minus' && state > 0) {
    //     return state - 1;
    // }
    // if(action.type === 'reset'){
    //     return state = 0;
    // }
    // return state;
}
const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);

