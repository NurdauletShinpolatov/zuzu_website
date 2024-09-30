import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { combineReducers, createStore } from 'redux';
import { productReducer } from './redux/productReducer';
import { userReducer } from './redux/userReducer';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const allReducers = combineReducers( { product: productReducer, user: userReducer } )

const store = createStore(allReducers)

root.render(
  
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

