import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Firstcomponent from "./components/firstcomponent";
import FunctionalComponent from "./components/FunctionalComponent"
import classcomponent from "./components/classcomponent"
import CounterClass from "./components/classcomponent";
import BootstrapComponents from "./components/BootstrapComponents";

import 'bootstrap/dist/css/bootstrap.min.css'
ReactDOM.render(
  <React.StrictMode>
    <App />
      <Firstcomponent/>
      <FunctionalComponent initialCounter={10}/>
      <CounterClass initialCounter={10}/>
      <BootstrapComponents/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
