import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import './index.css';
import { MyProvider } from './Components/MyContext'

ReactDOM.render(
  <React.StrictMode>
    <MyProvider>
      <App />
    </MyProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


