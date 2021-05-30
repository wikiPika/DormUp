import PropType from "prop-types"
import {useState, useEffect} from "react"
import {
    Button,
    Jumbotron,
    Row,
    Col,
    Image,
    Form,
    FormGroup,
    FormControl,
    InputGroup,
    FormCheck,
    Pagination
} from "react-bootstrap"
import "../../node_modules/aos/dist/aos.css";
import "../../node_modules/aos/dist/aos.js";
import {getTags} from "./ProfileCard"
import LandscapeProfile from "./LandscapeProfile";
import {db} from "../fb";

function ProfileSearch(props) {
    const [searchTags, setSearchTags] = useState([""]);
    const [location, setLocation] = useState("");
    const [page, setPage] = useState(0);
    // MF = all
    const [gender, setGender] = useState(["M", "F"]);
    const [results, setResults] = useState([<div />]);

    useEffect( () => {
        const load = async () => {
            let data = await getTenProfiles(searchTags, gender, page);
            setResults(data)
        }

        load();
    })

    return (
        <div data-aos="flip-left" data-aos-anchor-placement="top" data-aos-delay="150">
            <Jumbotron>
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
                        <Form.Group style={{
                            textAlign: "center",
                            fontSize: "1.5vw",
                            margin: "1.5vw 0vw 0.25vw 0vw",
                        }} onChange={e => {
                            let val = e.target.value;

                            if (val === "mf") setGender(["M", "F"])
                            if (val === "m") setGender(["M"])
                            if (val === "f") setGender(["F"])
                        }}>
                            <FormCheck inline type="radio" value={"mf"}  name="gender-checkbox" id="checkboxAny" label="All" />
                            <FormCheck inline type="radio" value={"m"} name="gender-checkbox" id="checkboxMale" label="Male" />
                            <FormCheck inline type="radio" value={"f"} name="gender-checkbox" id="checkboxFemale" label="Female"/>
                        </Form.Group>
                    </Form>
                    <div style={{
                        margin: "4px 0px -6px -2px",
                    }}>
                        Tags
                        <br />
                        {getTags(searchTags)}
                    </div>
                    <div style={{
                        display: "flex",
                        justifyContent: "center"
                    }}>
                        <Pagination style={{
                            textAlign: "center",
                            fontSize: "1.5vw",
                            margin: "1vw 0vw 0vw 0vw",
                        }}>
                            <Pagination.Prev onClick={() => {
                                if (page != 0) setPage(page - 1)
                            }} />
                            <Pagination.Item active>{page + 1}</Pagination.Item>
                            <Pagination.Next onClick={() => {
                                if (results.length === 10) setPage(page + 1)
                            }}/>
                        </Pagination>
                    </div>
                </Col>

                <Col md={8} xs={6} >
                    {results}
                </Col>
            </Row>
        </div>
    );
}

async function getTenProfilesDefault(page) {
    let r: Array<JSX.Element> = []
    let key = 0;

    let ptr = 0;
    let start = page * 10;
    let end = (page + 1) * 10;

    await db.collection("users").where("first_name", "!=", "undefined").limit(end).get()
        .then(query => {
            query.forEach(doc => {
                if (ptr >= start && ptr < end) {
                    let data = doc.data();
                    let name: string = data.first_name + " " + data.last_name;
                    r.push(<LandscapeProfile profileName={name}
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
                }
                ptr++;
            })
        })
    return r;
}

async function getTenProfiles(tags, userGender, page) {
    if ((tags.length === 1 && tags[0] === "") && (userGender[0] === "M" && userGender[1] === "F")) return await getTenProfilesDefault(page);
    let r: Array<JSX.Element> = []

    let ptr = 0;
    let start = page * 10;
    let end = (page + 1) * 10;

    let key = 0;

    if (tags.length === 1 && tags[0] === "") {
        await db.collection("users").where("first_name", "!=", "undefined").get()
            .then((query) => {
                query.forEach((doc) => {
                    if (ptr >= start && ptr < end) {
                        let data = doc.data();
                        if (userGender.includes(data.gender)) {
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
                    }
                    ptr++;
                })
            })
    }
    else {
        await db.collection("users").where("tags", "array-contains-any", tags).where("first_name", "!=", "undefined").get()
            .then((query) => {
                query.forEach((doc) => {
                    let data = doc.data();
                    if (userGender.includes(data.gender)) {
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
    }

    return r;
}

ProfileSearch.propTypes = {
    profiles: PropType.arrayOf(PropType.element),
}

export default ProfileSearch;
