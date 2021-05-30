import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from "./components/Layout";
import {BrowserRouter as Router, Route} from "react-router-dom";
import ProfileCard from "./components/ProfileCard";
import "bootstrap/dist/css/bootstrap.min.css"
import Index from "./components/Index";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
    useEffect(() => AOS.init());
    return (
        <Router>
            <Layout>
                <Route link="/" exact component={Index}/>
            </Layout>
        </Router>
    );
}

export default App;
