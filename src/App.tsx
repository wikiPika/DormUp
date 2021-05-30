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
<<<<<<< HEAD
            <PrivateRoute path="/search" component={ProfileSearch} />
=======
            <Route path="/search" component={ProfileSearch} />
>>>>>>> d6679cea63cb345a2f8333275b891c3becac7423
            <Route component={Index} exact path="/" />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Layout>
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
