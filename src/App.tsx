<<<<<<< HEAD
import React from 'react';
import logo from "./logo.svg"
import SampleLogin from "./SampleLogin"; 
=======
import React, {useEffect} from 'react';
import logo from './logo.svg';
>>>>>>> dead0bb927c0f311a90ad4f15b44ff51c5f17e88
import './App.css';
import Layout from "./components/Layout";
import {BrowserRouter as Router, Route} from "react-router-dom";
import ProfileCard from "./components/ProfileCard";
import "bootstrap/dist/css/bootstrap.min.css"
import Index from "./components/Index";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
<<<<<<< HEAD
  return (
    <div className="App">
      <SampleLogin /> 
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
=======
    useEffect(() => AOS.init());
    return (
        <Router>
            <Layout>
                <Route link="/" exact component={Index}/>
            </Layout>
        </Router>
    );
>>>>>>> dead0bb927c0f311a90ad4f15b44ff51c5f17e88
}

export default App;
