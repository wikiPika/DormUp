import React, {useRef, useState, useEffect} from 'react';
import ProfileCard from "./ProfileCard";
import "@fortawesome/fontawesome-free/css/all.min.css"
import {Jumbotron} from "react-bootstrap";
import '../css/index.css';
import LandscapeProfile from "./LandscapeProfile";

function Index(props){
    return (
        <React.Fragment>
            <Jumbotron data-aos="flip-left" className="shadow mb-0">
                <ProfileCard profileName={"Tymur Arsentiev"}
                             profileImg={"https://img.quizur.com/f/img608039381dda94.72427060.jpg?lastEdited=1619015995"}
                             age={24}
                             gender={"F"}
                             school={"College of Lake County"}
                             major={"Computer Science"}
                             tag={["drinking", "driving", "drinking while driving", "undergrad", "on campus"]}
                             bio={"This is a really long bio. This is a really long bio. This is a really long bio. This is a really long bio. This is a really long bio. "} />
                <div className="text-desc" data-aos="fade-right" data-aos-delay="150">
                    <h1 className="display-5 fw-bold">Welcome to Dorm-Up!</h1><br/>
                    <p className="lead">The best place to find a room buddy. <br/> Make friends by finding people  with similar interests <br/>
                        or make money by renting to your friends. The possibilities are endless.</p>
                </div>
            </Jumbotron>
            <Jumbotron style={{maxHeight:'400px'}}>
                <h1 className="display-5 fw-bold">Share a little or a lot</h1><br/>
                <div className="lead">
                    Many, people will be returning back to campus after COVID-19. <br/>
                    Do you have a roommate to stay with? No?  <br/>
                    No problem. Come join us on Dorm-Up, and <br/>
                    get your social game back on after COVID-19!
                </div>
                <LandscapeProfile
                    profileName={"Tymur Arsentiev"}
                    profileImg={"https://img.quizur.com/f/img608039381dda94.72427060.jpg?lastEdited=1619015995"}
                    age={24}
                    gender={"F"}
                    school={"College of Lake County"}
                    major={"Computer Science"}
                    tag={["drinking", "driving", "drinking while driving", "undergrad", "on campus"]}
                    bio={"This is a really long bio. This is a really long bio. This is a really long bio. This is a really long bio. This is a really long bio. "}/>
            </Jumbotron>
        </React.Fragment>
    );
}
export default Index;
