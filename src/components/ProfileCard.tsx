import {useState} from "react";
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import PropType from "prop-types";
import "../css/profileCard.css";

function ProfileCard(props) {
    return (
        <Card className="rounded border-bottom border-right m-3">
            <Card.Img variant="top" src={props.profileImg} />
            <Card.Body>
                <Card.Title>{props.profileName} ({props.age})</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                    {props.major}
                    <br />
                    {props.school}
                </Card.Subtitle>
                <Card.Text>{props.bio}</Card.Text>
                <Button variant="primary" className="align-self-auto">Request</Button>
            </Card.Body>
        </Card>
    );
}

ProfileCard.propTypes = {
    profileName: PropType.string,
    profileImg: PropType.string,
    age: PropType.number,
    school: PropType.string,
    major: PropType.string,
    locStatus: PropType.oneOf(["On Campus", "Off Campus"]),
    schStatus: PropType.oneOf(["Undergrad", "Grad", "Postgrad"]),
    hobby: PropType.arrayOf(PropType.string),
    bio: PropType.string,
}

export default ProfileCard;
