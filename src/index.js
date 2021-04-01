//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// //include bootstrap npm library into the bundle
// import "bootstrap/dist/css/bootstrap.css";

//include your index.scss file into the bundle
import './styles/index.css';

//import your own components
import Layout from "./Layout";
// import App from './pages/App';
import reportWebVitals from './reportWebVitals';

//render your react application
ReactDOM.render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();










