import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase';
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDM77Bjpn2IlLJ7iaL41S5CenbuOdWx6vE",
    authDomain: "chatcom-d79a7.firebaseapp.com",
    databaseURL: "https://chatcom-d79a7.firebaseio.com",
    projectId: "chatcom-d79a7",
    storageBucket: "chatcom-d79a7.appspot.com",
    messagingSenderId: "589856328128",
    appId: "1:589856328128:web:eabd8035871b6360866025",
    measurementId: "G-GE5ZBFML44"
};
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
