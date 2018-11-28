import React from 'react';
import ReactDOM from 'react-dom';
import AddressBook from './components/address-book';
import './index.css';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<AddressBook />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
