import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import heroes from './heroes.json';
import App from './app';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App heroes={heroes}/>, document.getElementById('root'));
registerServiceWorker();
