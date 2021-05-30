import PropType from "prop-types";
import {Container, Popover, OverlayTrigger, Tooltip} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image"
import "../css/index.css"
import { getTags } from "./ProfileCard";
import {useState} from "react";

function LandscapeProfile(props) {
    return(
        <div style={{
            maxWidth: "90%",
            margin: "1vw 0vw 1vw 0vw"
        }}>
            <Row style={{margin: "0"}}>
                <Col md={3}>
                    <img src={props.profileImg} style={{
                        width: "100%",
                        height: "auto",
                        aspectRatio: "1 / 1",
                        objectFit: "cover",
                        border: "0.2vw solid lightgray",
                    }} />
                </Col>

                <Col md={9}>
                    <Card style={{
                        borderWidth: "0.2vw",
                        borderStyle: "solid",
                        borderColor: "lightgray",
                        width: "100%",
                        height: "100%",
                    }}>
                        <Card.Header style={{padding: "0.5vw"}}>
                            <div style={{padding: "0"}}>
                                <Col style={{fontWeight: "bold", fontSize: "1vw", paddingLeft: "0", paddingRight: "0"}}>
                                    {props.profileName} ({props.age}, {props.gender})
                                </Col>
                                <Col className="text-muted card-subtitle" style={{textAlign: "right", fontSize: "0.8vw", paddingLeft: "0", paddingRight: "0"}}>
                                    {props.major} @ {props.school}
                                </Col>
                            </div>
                        </Card.Header>
                        <Card.Body style={{padding: "0.5vw"}}>
                            <div style={{height: "4.8vw", overflow: "auto", fontSize: "0.8vw", textOverflow: "ellipsis"}}>
                                {props.bio}
                            </div>
                        </Card.Body>
                        <Card.Footer style={{height: "auto", textAlign: "left", justifyContent: "center", padding: "0.2vw 0.2vw 0.2vw 0.1vw"}}>
                            <Row>
                                <Col md={10}>
                                    {getTags(props.tag)}
                                </Col>
                                <Col md={2}style={{textAlign: "right", justifyContent: "middle"}}>
                                    <OverlayTrigger
                                        trigger="click"
                                        placement="left"
                                        overlay={
                                            <Tooltip id="button-tooltip" {...props}>
                                                Your request has been sent to <strong>{props.profileName}</strong>! Please wait for them to contact you back.
                                            </Tooltip>
                                        }
                                        rootClose={true}
                                    >
                                        <Button style={{
                                            padding: "0vw",
                                            fontSize: "0.8vw",
                                            width: "4.5vw",
                                            height: "1.5vw",
                                            borderRadius: "0.5vw 0vw 0vw 0vw",
                                            margin: "0 auto",
                                            display: "inline-block",
                                            verticalAlign: "middle",
                                            textAlign: "center",
                                        }}>Request</Button>
                                    </OverlayTrigger>
                                </Col>
                            </Row>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </div>
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
