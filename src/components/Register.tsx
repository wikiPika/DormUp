import { Button, Card, Form, Row } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../AuthContext";
import firebase from "firebase";
import { db } from "../firebase";
import { useHistory } from "react-router-dom";

<<<<<<< HEAD
function Register() {
  const { createUserWithGoogleSignIn } = useAuth()!;
  const history = useHistory(); 

  // async function createUserWithEmailSignIn() {}
  return (
    <React.Fragment>
      <img
        style={{ minHeight: "1000px" }}
        alt="college"
        className="back-image"
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.vox-cdn.com%2Fthumbor%2F416Yb8UtOJUaqQ8YLfL5XuRbf9Y%3D%2F0x25%3A500x306%2F1600x900%2Fcdn.vox-cdn.com%2Fimported_assets%2F1025586%2F3455622341_a5db2082c5.jpg&f=1&nofb=1"
      />
      <div className="background-blur" />
      <Card className="login-card register-card">
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
                Register with Google
              </Button>
            </Form.Group>
            <p className="text-center mt-1 text-black-50">or</p>
            <Form.Group>
              <Form.Label>Email:</Form.Label>
              <Form.Control type="email" required placeholder="Email" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password:</Form.Label>
              <Form.Control
                type="password"
                required
                minLength={7}
                placeholder="Password"
              />
              <Form.Text className="text-black-50">
                Choose a strong password
              </Form.Text>
            </Form.Group>
            <Form.Group>
              <Form.Label>Full name:</Form.Label>
              <div className="d-flex">
                <Form.Control
                  className={"mr-2"}
                  type="name"
                  required
                  placeholder="Name"
                />
                <Form.Control
                  style={{ width: "22vh" }}
                  type="date"
                  required
                  placeholder="Date of Birth"
                />
              </div>
              <Form.Text className="text-black-50">
                Your DOB will not be shown, only your age
              </Form.Text>
            </Form.Group>
            <Form.Group>
              <Button variant="primary" type="submit">
                Register
              </Button>
              <Form.Text>
                <Link to="/login" style={{ color: "inherit" }}>
                  Already have an account?
                </Link>
              </Form.Text>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
=======
function Register(){
    return (
        <React.Fragment>
            <img style={{minHeight:'1000px'}} alt="college" className="back-image" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.vox-cdn.com%2Fthumbor%2F416Yb8UtOJUaqQ8YLfL5XuRbf9Y%3D%2F0x25%3A500x306%2F1600x900%2Fcdn.vox-cdn.com%2Fimported_assets%2F1025586%2F3455622341_a5db2082c5.jpg&f=1&nofb=1"/>
            <div className="background-blur"/>
            <Card className="login-card register-card">
            <Card.Body data-aos="fade-in">
                <Row className="d-flex justify-content-center my-3"><i id="login-logo" className="fas fa-university"/></Row>
                <hr/>
                <Form style={{width : '20vw', minWidth : '250px'}} >
                    <Form.Group>
                        <Button block variant="outline-dark" className="btn btn-outline-dark" role="button"
                                style={{textTransform:"none"}}>
                            <img width="20px" style={{marginBottom:"3px", marginRight:"5px"}}
                                 alt="Google sign-in"
                                 src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"/>
                            Register with Google
                        </Button>
                    </Form.Group>
                    <p className="text-center mt-1 text-black-50">or</p>
                    <Form.Group>
                        <Form.Label>Email:</Form.Label>
                        <Form.Control type="email" required placeholder="Email"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password:</Form.Label>
                        <Form.Control type="password" required minLength={7} placeholder="Password"/>
                        <Form.Text className="text-black-50">Choose a strong password</Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Full name:</Form.Label>
                        <div className="d-flex">
                            <Form.Control className={"mr-2"} type="name" required placeholder="Name"/>
                            <Form.Control style={{width : '22vh'}} type="date" required placeholder="Date of Birth"/>
                        </div>
                        <Form.Text className="text-black-50">Your DOB will not be shown, only your age</Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Button variant="primary" type="submit" block>Register</Button>
                        <Form.Text className="text-center"><Link to="/login" style={{color : 'inherit'}}>Already have an account?</Link></Form.Text>
                    </Form.Group>
                </Form>
            </Card.Body>
        </Card>
    </React.Fragment>);
>>>>>>> d6679cea63cb345a2f8333275b891c3becac7423
}

export default Register;
