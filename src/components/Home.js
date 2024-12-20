import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Home.css';
import leetcodeLogo from "./leet-logo2.png";
import profileImage from "./profile.jpg";

function Home() {
  return (
    <section id="home" className="home-section">
      <div className="home-image">
        <img src={profileImage} alt="Sindhuraj Thanneru" />
      </div>
      <div className="home-content">
        <h1 id="p2">Hello, I'm <span className="highlight">"Sindhuraj Thanneru"</span></h1>
        <p id="p1">And I'm good at "Front-end Development"<br />
         and "Machine Learning"</p>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/sindhuraj-thanneru-3979a227a/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://github.com/sindhuraj1" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://leetcode.com/u/sindhuraj_2003/" target="_blank" rel="noopener noreferrer">
            <img src={leetcodeLogo} alt="LeetCode" style={{ width: '35px', height: '35px' }} />
          </a>
        </div>
        <a href="https://drive.google.com/uc?export=download&id=16lqvn0BcCd-asEKB9dkX16HnGzjwneHZ" download="Sindhuraj_Thaneeru_Resume.pdf" className="btn btn-resume">Download Resume</a>
      </div>
    </section>
  );
}

export default Home;
