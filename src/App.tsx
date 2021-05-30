import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from "./components/Layout";
import ProfileCard from "./components/ProfileCard"
import ProfileSearch from "./components/ProfileSearch"
import "bootstrap/dist/css/bootstrap.min.css"
import {Route} from 'react-router-dom';
import Index from "./components/Index";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Login from "./components/Login";
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
    useEffect(() => {AOS.init()});

    return (
        <Router>
            <Layout>
                <Route path="/" exact component={Index}/>
                <Route path="/login" exact component={Login}/>
            </Layout>
        </Router>
  );
}

export default App;
