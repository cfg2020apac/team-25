import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyBzLsOyB73X2B7zO23MFB4euy9e9A_g8yc",
  authDomain: "cfg2020apac-team25.firebaseapp.com",
  databaseURL: "https://cfg2020apac-team25.firebaseio.com",
  projectId: "cfg2020apac-team25",
  storageBucket: "cfg2020apac-team25.appspot.com",
  messagingSenderId: "404107048277",
  appId: "1:404107048277:web:df228f0ce4098bc4376bdc",
  measurementId: "G-KNWSKVZBTE"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

ReactDOM.render(
  <App />
, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
