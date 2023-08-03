import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './componets/App/App';
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/test-pokemon-cards">
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

