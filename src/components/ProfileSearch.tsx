import PropType from "prop-types"
import {useState, useEffect} from "react"
import {Button, Jumbotron, Row, Col, Image, Form, FormGroup, FormControl, InputGroup, FormCheck} from "react-bootstrap"
import "../../node_modules/aos/dist/aos.css";
import "../../node_modules/aos/dist/aos.js";
import {getTags} from "./ProfileCard"
import LandscapeProfile from "./LandscapeProfile";
import {db} from "../firebase";

function ProfileSearch(props) {
    const [searchTags, setSearchTags] = useState([""]);
    const [pageNumber, setPageNumber] = useState(1);
    const [location, setLocation] = useState("");
    // MF = all
    const [gender, setGender] = useState(["M", "F"]);
    const [results, setResults] = useState([<div />]);

    useEffect( () => {
        const load = async () => {
            let data = await getTenProfilesDefault();
            setResults(data)
        }

        load();
    })

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
                        <div style={{
                            textAlign: "center",
                            fontSize: "1.5vw",
                            margin: "1.5vw 0vw 0.25vw 0vw",
                        }}>
                        <FormCheck inline type="radio" name="gender-checkbox" id="checkboxAny" label="All" onChange={e => setGender(["M", "F"])}/>
                        <FormCheck inline type="radio" name="gender-checkbox" id="checkboxMale" label="Male" onChange={e => setGender(["M"])} />
                        <FormCheck inline type="radio" name="gender-checkbox" id="checkboxFemale" label="Female" onChange={e => setGender(["F"])} />
                        </div>
                        <div style={{
                            textAlign: "center",
                            fontSize: "1.5vw",
                            margin: "1.5vw 0vw 0.25vw 0vw",
                        }}>
                            <Button variant="primary" onClick={async () => {
                                setResults(await getTenProfiles(searchTags, gender, pageNumber))
                            }}>Submit</Button>
                        </div>
                    </Form>
                    <div style={{
                        margin: "4px 0px -6px -2px",
                    }}>
                        {getTags(searchTags)}
                    </div>
                </Col>

                <Col md={8} xs={6} >
                    {results}
                </Col>
            </Row>
        </div>
    );
}

async function getTenProfilesDefault() {
    let r: Array<JSX.Element> = []
    let key = 0;
    await db.collection("users").limit(10).get()
        .then(query => {
            query.forEach(doc => {
                let data = doc.data();

                r.push(<LandscapeProfile profileName={data.first_name + data.last_name}
                                         profileImg={data.pfp}
                                         age={data.age}
                                         gender={data.gender}
                                         school={data.school}
                                         major={data.major}
                                         tag={data.tags}
                                         bio={data.bio}
                                         key={key}

                />)
                key++;
            })
        })
    return r;
}

async function getTenProfiles(tags, userGender, page) {
    let r: Array<JSX.Element> = []
    let key = 0;
    await db.collection("users").where("tags", "array-contains-any", tags).orderBy("age").startAt(page * 10).endAt((page + 1) * 10).limit(10).get()
        .then((query) => {
            query.forEach((doc) => {
                let data = doc.data();
                console.log(data);

                if (userGender.contains(data.gender)) {
                    let name: string = data.first_name + " " + data.last_name;

                    r.push(<LandscapeProfile profileName={name}
                                             profileImg={data.pfp}
                                             age={data.age}
                                             gender={data.gender}
                                             school={data.college}
                                             major={data.major}
                                             tag={data.tags}
                                             bio={data.bio}
                                             key={key}

                    />)
                    key++;
                }
            })
        })

    return r;
}

ProfileSearch.propTypes = {
    profiles: PropType.arrayOf(PropType.element),
}

export default ProfileSearch;
