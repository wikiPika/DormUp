import React, {useRef, useState, useEffect} from 'react';
import ProfileCard from "./ProfileCard";
import "@fortawesome/fontawesome-free/css/all.min.css"
import {Jumbotron} from "react-bootstrap";
import '../css/index.css';

function Index(props){
    return (
        <React.Fragment>
            <Jumbotron data-aos="flip-left">
            <ProfileCard profileName={"Tymur Arsentiev"} profileImg={"https://img.quizur.com/f/img608039381dda94.72427060.jpg?lastEdited=1619015995"} age={24} school={"College of Lake County"} major={"Computer Science"} tag={["drinking", "driving", "drinking while driving", "undergrad", "on campus"]} bio={"Bruh moment"} />
                <div className="text-desc" data-aos="fade-right" data-aos-delay="150">
                    <h1 className="display-5 fw-bold">Welcome to Dorm-Up!</h1><br/>
                    <p className="lead">The best place to find a room buddy. <br/> Make friends by finding people  with similar interests <br/>
                        or make money by renting to your friends. The possibilities are endless.</p>
                </div>
            </Jumbotron>
        </React.Fragment>
    );
}
export default Index;
