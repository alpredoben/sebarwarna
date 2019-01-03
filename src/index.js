import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <App width="5" height="5" />, 
    document.getElementById('root')
);
serviceWorker.unregister();
