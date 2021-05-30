import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from "./components/Layout";
import ProfileCard from "./components/ProfileCard"
import ProfileSearch from "./components/ProfileSearch"
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
      <Layout>
          <ProfileSearch profiles={[<ProfileCard profileName={"Tymur Arsentiev"}
                                                 profileImg={"https://img.quizur.com/f/img608039381dda94.72427060.jpg?lastEdited=1619015995"}
                                                 age={24}
                                                 gender={"F"}
                                                 school={"College of Lake County"}
                                                 major={"Computer Science"}
                                                 tag={["drinking", "driving", "drinking while driving", "undergrad", "on campus"]}
                                                 bio={"This is a really long bio. This is a really long bio. This is a really long bio. This is a really long bio. This is a really long bio. "} />]}/>
      </Layout>
  );
}

export default App;
