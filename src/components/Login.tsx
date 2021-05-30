import { useLocation } from "react-router-dom";
import { useState } from "react";
import React from "react";
import "../css/login.css";
import { Button, Card, Form, Row } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "aos/dist/aos.css";
import { useAuth } from "../AuthContext";
import { db, auth } from "../firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { createUserWithGoogleSignIn } = useAuth()!;
  const history = useHistory();
  const { login } = useAuth()!;

  async function signInWithEmailAndPassword() {
    const result = await auth.signInWithEmailAndPassword(email, password);
    if (result.user) {
      history.push("/");
    } else {
        history.push('/login')
    }
  }
  return (
    <React.Fragment>
      <img
        alt="college"
        className="back-image"
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.timesofisrael.com%2Fwww%2Fuploads%2F2019%2F10%2FMain_Library-University_of_Illinois_at_Urbana-Champaign_Wikimedia-commons-resize-2160x1198.jpg&f=1&nofb=1"
      />
      <Card className="login-card">
        <Card.Body data-aos="fade-in">
          <Row className="d-flex justify-content-center my-3">
            <i id="login-logo" className="fas fa-university" />
          </Row>
          <hr />
          <Form style={{ width: "20vw", minWidth: "250px" }}>
            <Form.Group>
              <Button
                block
                variant="outline-dark"
                className="btn btn-outline-dark"
                role="button"
                style={{ textTransform: "none" }}
                onClick={createUserWithGoogleSignIn}
              >
                <img
                  width="20px"
                  style={{ marginBottom: "3px", marginRight: "5px" }}
                  alt="Google sign-in"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
                />
                Login with Google
              </Button>
            </Form.Group>
            <p className="text-center mt-1 text-black-50">or</p>
            <Form.Group>
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Text className="text-black-50">
                Enter the email you created your account with
              </Form.Text>
            </Form.Group>
            <Form.Group>
              <Form.Label>Password:</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Button variant="primary" onClick={signInWithEmailAndPassword}>
                Login
              </Button>
              <Form.Text>
                <Link to="/register" style={{ color: "inherit" }}>
                  Don't have an account?
                </Link>
              </Form.Text>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
}
export default Login;
