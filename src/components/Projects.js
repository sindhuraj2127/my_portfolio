import React, { useState } from 'react';
import './Projects.css';

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      title: "Number of Trades Prediction",
      description: "Developed a predictive model using AI/ML techniques to forecast the number of trades in financial markets. Leveraged historical data, feature engineering, and machine learning algorithms to improve trading strategy efficiency and decision-making."
    },
    {
      title: "Heart failure prediction",
      description: "Designed and implemented a Convolutional Neural Network (CNN) for predicting heart failure risk using patient health data. Optimized the model for accuracy and efficiency, enabling early detection and improved healthcare decision-making."
    },
    {
      title: "A Modern Hotel Management System Using C",
      description: "Developed a modern hotel management system in C, incorporating features like room booking, customer management, and billing. Streamlined operations with an intuitive interface and efficient data handling."
    },
    {
      title: "Expense Tracker mobile Application",
      description: "In this project, Expense tracker apps serve as digital diaries for recording all our expenditures. They offer features like categorizing expenses, setting budgets, generating reports and sometimes even syncing with bank accounts or Credit cards for automatic tracking."
    },
    {
      title: "AI Powered Traffic Sign Recognition System For Autonomous Vechiles Using Raspberry Pi",
      description: "Developed a real-time traffic sign detection and classification system using Raspberry Pi, OpenCV, and TensorFlow.Trained a Convolutional Neural Network (CNN) on the GTSRB dataset to achieve high accuracy in diverse conditions."
    }
  ];

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-container">
        <button className="arrow left-arrow" onClick={handlePrevClick}>◀</button>
        <div className="project-card">
          <h3 className="project-title">{projects[currentIndex].title}</h3>
          <p className="project-description">{projects[currentIndex].description}</p>
        </div>
        <button className="arrow right-arrow" onClick={handleNextClick}>▶</button>
      </div>
    </section>
  );
}

export default Projects;
