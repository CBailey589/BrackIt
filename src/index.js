import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter as Router } from "react-router-dom"
import "./index.css"
import BrackIt from './components/BrackIt';

ReactDOM.render(
<Router>
    <BrackIt />
</Router>
, document.querySelector("#root"));