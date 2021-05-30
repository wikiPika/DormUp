import {useLocation} from 'react-router-dom';
import {useEffect, useState} from "react";
import React from "react";
import '../css/login.css';
import {Button, Card, Form, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'aos/dist/aos.css';
import {useAuth} from "../AuthContext"
import {db, auth} from "../fb";

function Profile(props) {
    const location = useLocation();

    const {currentUser} = useAuth()!;

    const [name, setName] = useState("");
    const [age, setAge] = useState(-1);
    const [pfp, setPfp] = useState("");
    const [major, setMajor] = useState("");
    const [school, setSchool] = useState("");
    const [tags, setTags] = useState([""]);
    const [bio, setBio] = useState("");

    useEffect(() => {
        if (currentUser === null) {
            window.location.href = "/register"
        }
    });

    return(
        <React.Fragment>
            <img alt="college" className="back-image" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.timesofisrael.com%2Fwww%2Fuploads%2F2019%2F10%2FMain_Library-University_of_Illinois_at_Urbana-Champaign_Wikimedia-commons-resize-2160x1198.jpg&f=1&nofb=1"/>
            <Card className="login-card" style={{
                width: "40%",
                height: "80%",
                margin: "-4% 0% 0% 0%"
            }}>
                <Card.Header style={{
                    fontSize: "1vw",
                    textAlign: "center",
                }} className="text-muted card-subtitle">
                    Logged in as {currentUser.email} ({currentUser.displayName})
                </Card.Header>
                <Card.Body data-aos="fade-in" style={{

                }}>
                        <div style={{
                            maxWidth: "12vw",
                            maxHeight: "12vw",
                            border: "0.2vw solid lightgray",
                            margin: "0",
                            padding: "0",
                            display: "inline-block",
                            transform: "translate(0%, -62.5%)"
                        }}>
                            <Card.Img src={currentUser.pfp !== undefined ? currentUser.pfp : "https://www.nbp.org/nbp/images/programs/gep/penny/samediff-apples.jpg"} style={{
                                aspectRatio: "1 / 1",
                                objectFit: "cover",
                            }}/>
                        </div>
                        <div style={{
                            display: "inline-block",
                            padding: "1vw 0vw 0vw 2vw",
                            width: "60%",
                            transform: "translate(0%, -3%)"
                        }}>
                            <Form style={{
                                display: "inline-block",
                            }}>
                                <Form.Group controlId="formName">
                                    <Form.Control placeholder="Edit name" onChange={e => setName(e.target.value)} />
                                    <Form.Text className="text-muted">Enter your first and last name, separated by a space.</Form.Text>
                                </Form.Group>
                                <Form.Group controlId="formName">
                                    <Form.Control placeholder="Edit age" onChange={e => setAge(parseInt(e.target.value))} />
                                    <Form.Text className="text-muted">Enter your current age in years.</Form.Text>
                                </Form.Group>
                                <Form.Group controlId="formProfile">
                                    <Form.Control placeholder="Edit profile" onChange={e => setPfp(e.target.value)} />
                                    <Form.Text className="text-muted">Enter a URL for a new profile picture.</Form.Text>
                                </Form.Group>
                            </Form>
                        </div>
                        <div style={{
                            transform: "translate(0%, -20%)",
                        }}>
                            <Form.Group controlId="formMajor">
                                <Form.Control placeholder="Edit major" onChange={e => setMajor(e.target.value)} />
                                <Form.Text className="text-muted">Enter your current major.</Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formSchool">
                                <Form.Control placeholder="Edit school" onChange={e => setSchool(e.target.value)} />
                                <Form.Text className="text-muted">Enter your current school.</Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formHobbies">
                                <Form.Control placeholder="Edit tags" onChange={e => setTags(e.target.value.split(" "))} />
                                <Form.Text className="text-muted">Kebab-case separated by spaces, ex. "bass-fishing programming".</Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formBio">
                                <Form.Control placeholder="Edit bio" onChange={e => setBio(e.target.value)} />
                                <Form.Text className="text-muted">Enter some information about yourself.</Form.Text>
                            </Form.Group>
                            <Button variant="primary" onClick={() => {
                                db.collection("users").doc(auth.currentUser!.uid).set({
                                    first_name: name.split(" ")[0],
                                    last_name: name.split(" ")[1],
                                    age: age,
                                    bio: bio,
                                    college: school,
                                    major: major,
                                    pfp: pfp,
                                    tags: tags,
                                }).then();
                            }}>Update</Button>
                        </div>
                </Card.Body>
            </Card>
        </React.Fragment>
    );
}

Profile.propTypes = {

}

export default Profile;
