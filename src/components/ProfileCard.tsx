import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import PropType from "prop-types";
import {Fragment} from "react";
import {Container, Row, Col, Image, Badge} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/css/bootstrap.css"

function ProfileCard(props) {
    return (
        <Card className="rounded border-bottom border-right m-3" style={{
            border: "0px 4px 4px 0px solid black",
        }}>
            <Card.Body>
                <Card.Img variant="top" src={props.profileImg}></Card.Img>
                <Card.Title>{props.profileName} ({props.age}{props.gender != "N/A" ? <Fragment>, {props.gender}</Fragment> : <Fragment></Fragment>})</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                    {props.major}
                    <br />
                    {props.school}
                </Card.Subtitle>
                <Card.Text>
                    {props.bio}
                    <br />
                    <div style={{
                        margin: "4px 0px -6px -2px",
                    }}>
                        {getTags(props.tag)}
                    </div>
                </Card.Text>
                <Button variant="primary" className="align-self-auto">Request</Button>
            </Card.Body>
        </Card>
    );
}

function getTags(list) {
    let result: JSX.Element[] = [];

    list.forEach(tag => result.push(
        <div style={{
            borderRadius: 4,
            border: "1px solid black",
            fontSize: 12,
            textAlign: "center",
            fontWeight: "bold",
            backgroundColor: "#444444",
            color: "white",
            verticalAlign: "middle",
            display: "inline-block",
            padding: "0px 6px 0px 6px",
            margin: "0px 2px 0px 2px",
        }}>
            {tag}
        </div>
        /*<Fragment><Badge pill variant={"info"}>
            {tag}
        </Badge>{' '}</Fragment>*/
    ));

    return result;
}

ProfileCard.propTypes = {
    profileName: PropType.string,
    profileImg: PropType.string,
    age: PropType.number,
    gender: PropType.string,
    school: PropType.string,
    major: PropType.string,
    tag: PropType.arrayOf(PropType.string),
    bio: PropType.string,
}

ProfileCard.defaultProps = {
    profileName: "N/A",
    profileImg: "N/A",
    age: -1,
    gender: "N/A",
    school: "N/A",
    major: "N/A",
    tag: [],
    bio: "N/A",
}

export default ProfileCard;
