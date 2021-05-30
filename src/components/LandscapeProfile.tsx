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
            maxWidth: "80%",
            margin: "0 auto"
        }}>
            <Row style={{margin: "0"}}>
                <Col md={3}>
                    <img src={props.profileImg} style={{
                        width: "100%",
                        height: "auto",
                        aspectRatio: "1 / 1",
                        objectFit: "cover",
                        border: "2px solid lightgray",
                    }} />
                </Col>

                <Col md={9}>
                    <Card style={{
                        borderWidth: "2px",
                        borderStyle: "solid",
                        borderColor: "lightgray",
                        width: "100%",
                        height: "100%",
                    }}>
                        <Card.Header style={{padding: "0.7vw"}}>
                            <div style={{padding: "0"}}>
                                <Col style={{fontWeight: "bold", fontSize: "1vw", paddingLeft: "0", paddingRight: "0"}}>
                                    {props.profileName} ({props.age})
                                </Col>
                                <Col className="text-muted card-subtitle" style={{textAlign: "right", fontSize: "0.8vw", paddingLeft: "0", paddingRight: "0"}}>
                                    {props.major} @ {props.school}
                                </Col>
                            </div>
                        </Card.Header>
                        <Card.Body style={{padding: "0.7vw"}}>
                            <div style={{height: "4.8vw", overflow: "auto", fontSize: "0.8vw", textOverflow: "ellipsis"}}>
                                {props.bio}
                            </div>
                        </Card.Body>
                        <Card.Footer style={{height: "auto", textAlign: "left", justifyContent: "center", padding: "6px 4px 10px 4px"}}>
                            <Row>
                                <Col>
                                    {getTags(props.tag)}
                                </Col>
                                <Col style={{textAlign: "right"}}>
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
                                            height: "100%",
                                            padding: "0",
                                            fontSize: "12",
                                            width: "3vw"
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
