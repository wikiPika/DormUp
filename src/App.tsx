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

function App() {
    useEffect(() => {AOS.init()});

    return (
      <Layout>
          <Route link="/" exact component={Index}/>
      </Layout>
  );
}

export default App;
