import PropType from "prop-types";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function LandscapeProfile(props) {
    return(
        <Card className="d-flex landscape-prof" style={{maxWidth: '50%'}}>
            <Row>
                <Col className="ml-auto" style={{maxWidth: '300px'}}>
                    <Card.Img src={props.profileImg} style={{maxWidth:'300px'}}/>
                </Col>
                <Col>
                    <Card.Body>
                        <Row>
                            <Col className="font-weight-bold">
                                {props.profileName}
                            </Col>
                            <Col style={{textAlign:'right'}} className="text-muted card-subtitle">
                                {props.major}
                            </Col>
                        </Row>
                        <Row>
                            <Col className="font-weight-bold">
                                ({props.age}, {props.gender})
                            </Col>
                            <Col style={{textAlign:'right'}} className="text-muted card-subtitle">
                                {props.school}
                            </Col>
                        </Row>
                        <Row className="card-text mt-3 text-body">
                            {props.bio}
                        </Row>
                        <Row className="??? mt-4">
                            Put tags here
                        </Row>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    )
}

LandscapeProfile.propTypes = {
    profileName: PropType.string,
    profileImg: PropType.string,
    age: PropType.number,
    gender: PropType.string,
    school: PropType.string,
    major: PropType.string,
    tag: PropType.arrayOf(PropType.string),
    bio: PropType.string,
}

LandscapeProfile.defaultProps = {
    profileName: "N/A",
    profileImg: "N/A",
    age: -1,
    gender: "N/A",
    school: "N/A",
    major: "N/A",
    tag: [],
    bio: "N/A",
}

export default LandscapeProfile;