import PropType from "prop-types"
import {useState} from "react"
import {Jumbotron, Row, Col, Image, Form, FormGroup, FormControl, InputGroup} from "react-bootstrap"

function ProfileSearch(props) {
    const [searchTags, setSearchTags] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [location, setLocation] = useState("");

    return (
        <div>
            <Jumbotron >
                <h1 style={{
                    fontSize: "6vmin",
                }}>Find a Dormmate</h1>
                <p style={{
                    fontSize: "3vmin",
                }}>Search for your best fit based on interests, location, and more!</p>
            </Jumbotron>
            <Row>
                <Col md={4} xs={6} style={{
                    margin: "0 auto",

                }}>
                    <div style={{
                        textAlign: "center",
                        fontSize: "3vmin",
                        fontWeight: "bold",
                    }}>
                        Search Options
                    </div>
                    <Form>
                        <Form.Group controlId="searchTags" style={{
                            textAlign: "center",
                            fontSize: "2vmin"
                        }}>
                            <Form.Label>Tags</Form.Label>
                            <Form.Control placeholder="Enter here, separated by spaces" style={{
                                display: "inline-block",
                                width: "50%",
                                margin: "0px 8px 0px 8px",
                            }} />
                        </Form.Group>
                    </Form>
                </Col>

                <Col md={8} xs={6}>
                    {getTenProfiles()}
                </Col>
            </Row>
        </div>
    );
}

function getTenProfiles() {
    return <div></div>
}

ProfileSearch.propTypes = {
    profiles: PropType.arrayOf(PropType.element).isRequired,
}

export default ProfileSearch;
