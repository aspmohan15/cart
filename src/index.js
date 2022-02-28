import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ContextProvider } from './context/Context';
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* wrap the app component under Context to
     acces the data on over all components */}
      <ContextProvider>
        <App />
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


