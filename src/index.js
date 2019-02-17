import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Application from './components/Application';
import * as serviceWorker from './serviceWorker';



ReactDOM.render(<Application /> , document.getElementById('root'));
serviceWorker.unregister();
 