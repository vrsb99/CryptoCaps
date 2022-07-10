import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import App from './App';
import 'antd/dist/antd.min.css';

ReactDOM.render(
    <Router>
        <App />
    </Router>
, document.getElementById('root'));