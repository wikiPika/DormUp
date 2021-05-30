import {useLocation} from 'react-router-dom';
import {useEffect} from "react";
import React from "react";
import '../css/login.css';
import {Button, Card, Form, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'aos/dist/aos.css';

function Profile(props) {
    const location = useLocation();
    useEffect(() => {
        //todo: redirect user if they are already logged in
    });

    return(
        <React.Fragment>
            <img alt="college" className="back-image" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.timesofisrael.com%2Fwww%2Fuploads%2F2019%2F10%2FMain_Library-University_of_Illinois_at_Urbana-Champaign_Wikimedia-commons-resize-2160x1198.jpg&f=1&nofb=1"/>
            <Card className="login-card" style={{
                width: "40%",
                height: "70%",
                margin: "-4% 0% 0% 0%"
            }}>
                <Card.Body data-aos="fade-in">

                </Card.Body>
            </Card>
        </React.Fragment>
    );
}

Profile.propTypes = {

}

export default Profile;
