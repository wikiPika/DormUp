import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from "./components/Layout";
import ProfileCard from "./components/ProfileCard"
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
      <Layout>
          <ProfileCard profileName={"Tymur Arsentiev"} profileImg={"https://img.quizur.com/f/img608039381dda94.72427060.jpg?lastEdited=1619015995"}age={24} school={"College of Lake County"} major={"Computer Science"} locStatus={"On Campus"} schStatus={"Grad"} bio={"Bruh moment"} />
      </Layout>
  );
}

export default App;
