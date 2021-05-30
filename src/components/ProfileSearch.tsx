import PropType from "prop-types"
import {useState, useEffect} from "react"
import {Button, Jumbotron, Row, Col, Image, Form, FormGroup, FormControl, InputGroup} from "react-bootstrap"
import "../../node_modules/aos/dist/aos.css";
import "../../node_modules/aos/dist/aos.js";
import {getTags} from "./ProfileCard"
import LandscapeProfile from "./LandscapeProfile";

function ProfileSearch(props) {
    const [searchTags, setSearchTags] = useState([""]);
    const [pageNumber, setPageNumber] = useState(1);
    const [location, setLocation] = useState("");

    return (
        <div data-aos="flip-left" data-aos-anchor-placement="top" data-aos-delay="150">
            <Jumbotron >
                <h1 style={{
                    fontSize: "5vw",
                }}>Find a Dormmate</h1>
                <p style={{
                    fontSize: "2vw",
                }}>Search for your best fit based on interests, location, and more!</p>
            </Jumbotron>
            <Row>
                <Col md={4} xs={6} style={{
                    margin: "0 auto",
                    textAlign: "center",
                }}>
                    <div style={{
                        textAlign: "center",
                        fontSize: "2vw",
                        fontWeight: "bold",
                    }}>
                        Search Options
                    </div>
                    <Form>
                        <Form.Group controlId="searchTags" style={{
                            textAlign: "center",
                            fontSize: "2vw",
                            margin: "1vmin 0vmin 1vmin 0vmin",
                        }}>
                            <Form.Control placeholder="Tags: separated by spaces" style={{
                                display: "inline-block",
                                width: "75%",
                                margin: "0.25vw 0vw 0.25vw 0vw",
                                fontSize: "1vw",
                                height: "2.5vw",
                            }} onChange={e => setSearchTags(e.target.value.split(" "))} />
                        </Form.Group>
                        <Form.Group controlId="searchLocation" style={{
                            textAlign: "center",
                            fontSize: "2vw",
                            margin: "0.25vw 0vw 0.25vw 0vw",
                        }}>
                            <Form.Control placeholder="Location: school or zipcode" style={{
                                display: "inline-block",
                                width: "75%",
                                margin: "0vw 0vw 0vw 0vw",
                                fontSize: "1vw",
                                height: "2.5vw",
                            }} onChange={e => setLocation(e.target.value)}/>
                        </Form.Group>
                    </Form>
                    <div style={{
                        margin: "4px 0px -6px -2px",
                    }}>
                        {getTags(searchTags)}
                    </div>
                </Col>

                <Col md={8} xs={6} >
                    {getTenProfiles()}
                </Col>
            </Row>
        </div>
    );
}

function getTenProfiles() {
    return <LandscapeProfile profileName="Tymur"
                             profileImg="https://img.quizur.com/f/img608039381dda94.72427060.jpg?lastEdited=1619015995"
                             age={24}
                             gender="F"
                             school="College of Lake County"
                             major="Computer Science"
                             tag={["driving", "drinking", "drinking-while-driving", "undergrad", "on-campus"]}
                             bio="This is a long bio. This is a long bio. This is a long bio. This is a long bio. This is a long bio. This is a long bio. This is a long bio. This is a long bio. This is a long bio. This is a long bio. This is a long bio. This is a long bio. This is a long bio. This is a long bio. This is a long bio. This is a long bio. This is a long bio. This is a long bio. This is a long bio. This is a long bio. This is a long bio. This is a long bio. This is a long bio. This is a long bio. This is a long bio. This is a long bio. This is a long bio. This is a long bio. This is a long bio. This is a long bio. This is a long bio. This is a long bio. This is a long bio. This is a long bio. This is a long bio. This is a long bio. "
        />
}

ProfileSearch.propTypes = {
    profiles: PropType.arrayOf(PropType.element),
}

export default ProfileSearch;
