import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HeaderStyle from './components/Header';
import './index.css';
import Home from './pages/Home';
import Logement from './pages/Housing';
import reportWebVitals from './reportWebVitals';
import GlobalStyle from './utils/style/GlobalStyle';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <GlobalStyle />
            <HeaderStyle />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/housing/:id">
                    <Logement />
                </Route>
            </Switch>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
