import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

import StatsList from './components/statList'

//  ReactDOM.render(Usercard, document.querySelector('#root'))

ReactDOM.render(
   <React.StrictMode>
    <App />
   </React.StrictMode>,
  
  document.getElementById('root')
);

