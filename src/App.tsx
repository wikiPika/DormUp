import React, { useEffect } from "react";
import Layout from "./components/Layout";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ProfileCard from "./components/ProfileCard";
import ProfileSearch from "./components/ProfileSearch";
import Index from "./components/Index";
import { AuthProvider } from "./AuthContext";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  useEffect(() => AOS.init());
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Route link="/" exact component={Index} />
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;
