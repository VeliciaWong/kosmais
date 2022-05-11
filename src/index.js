import * as React from "react";
import { StrictMode} from "react";
import ReactDOM from "react-dom";
import Home from './containers/pages/Home/Home'
// import Home from './containers/pages/App';
// import Error from './containers/Error/Error'
// import Modal from "./components/Modal/Modal";
import reportWebVitals from './reportWebVitals';


const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
      <Home/>
  </StrictMode>,
  rootElement
);

reportWebVitals();
