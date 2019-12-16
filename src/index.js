import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import  '../node_modules/bootstrap/scss/bootstrap.scss';
import '../node_modules/slick-carousel/slick/slick.scss';
import '../node_modules/slick-carousel/slick/slick-theme.scss';

import App from './presentationComponents/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
