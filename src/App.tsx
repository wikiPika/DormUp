import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from "./components/Layout";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ProfileCard from "./components/ProfileCard"
import ProfileSearch from "./components/ProfileSearch"
import "bootstrap/dist/css/bootstrap.min.css"
import Index from "./components/Index"
import AOS from "aos"
import 'aos/dist/aos.css';

function App() {
    AOS.init();

    return (
        <Router>
            <Layout>
                <Switch>

                    <Route path="/search">
                        <ProfileSearch />
                    </Route>

                    <Route path="/">
                        <Index />
                    </Route>
                </Switch>
            </Layout>
        </Router>
    );
}

export default App;
