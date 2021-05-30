import React, { useEffect } from "react";
import Layout from "./components/Layout";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ProfileCard from "./components/ProfileCard";
import ProfileSearch from "./components/ProfileSearch";
import Index from "./components/Index";
import { AuthProvider } from "./AuthContext";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";
import Register from "./components/Register";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  useEffect(() => AOS.init());
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Layout>
            <PrivateRoute path="/search" component={ProfileSearch} />
            <PrivateRoute component={Index} exact path="/" />
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
          </Layout>
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
