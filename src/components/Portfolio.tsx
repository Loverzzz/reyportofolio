import React from "react";
import Project1 from "../assets/project1.png";
import Project2 from "../assets/project2.png";
import Project3 from "../assets/project3.png";
import Project4 from "../assets/project4.png";
import Project5 from "../assets/project5.jpg";
import Project6 from "../assets/project6.png";

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="portfolio">
      <h1 className="text-4xl font-bold text-center mb-12">My Projects</h1>
      <div className="project-grid">
        {/* Project 1 */}
        <div className="project-item">
          <a
            href="https://github.com/Loverzzz/diabetes-prediction-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Project1} 
              alt="Diabetes Prediction with Tensorflow Extended (TFX) for Deployment Railway and Monitoring with Promotheus"
              className="project-image"
            />
            <h3 className="text-xl font-semibold mt-4">
              Diabetes Prediction with Tensorflow Extended (TFX) for Deployment Railway and Monitoring with Promotheus
            </h3>
            <p className="text-gray-700">
              This project uses TensorFlow Extended (TFX) to create an
              end-to-end pipeline for predicting diabetes risk based on
              historical data, covering data ingestion, validation,
              preprocessing, model training, evaluation, and deployment.
            </p>
          </a>
        </div>

        {/* Project 2 */}
        <div className="project-item">
          <a
            href="https://github.com/Loverzzz/DropoutPredictive"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Project2} 
              alt="Dropout Model Prediction with Dashboard Metabase and Streamlit"
              className="project-image"
            />
            <h3 className="text-xl font-semibold mt-4">
              Dropout Model Prediction with Dashboard Metabase and Streamlit
            </h3>
            <p className="text-gray-700">
              A dashboard created to visualize the performance of students and
              dropout risks.
            </p>
          </a>
        </div>

        {/* Project 3 */}
        <div className="project-item">
          <a
            href="https://github.com/Loverzzz/EmployeeAttrition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Project3}
              alt="Employee Attrition Model Prediction and Dashboard Metabase"
              className="project-image"
            />
            <h3 className="text-xl font-semibold mt-4">
              Employee Attrition Model Prediction and Dashboard Metabase
            </h3>
            <p className="text-gray-700">
              A dashboard to visualize employee attrition data and the factors
              that affect employee retention.
            </p>
          </a>
        </div>

        {/* Project 4*/}
        <div className="project-item">
          <a
            href="https://github.com/Loverzzz/AirQAnalysisBeijing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Project4} //
              alt="Air Quality Visualization Dashboard (Beijing)"
              className="project-image"
            />
            <h3 className="text-xl font-semibold mt-4">
              Air Quality Visualization Dashboard
            </h3>
            <p className="text-gray-700">
              This interactive dashboard visualizes air quality data from
              Beijing, showing patterns in PM2.5 levels, weather influence,
              station variation, and correlations between pollutants.
            </p>
          </a>
        </div>

        {/* Project 5 */}
        <div className="project-item">
          <a
            href="https://github.com/Loverzzz/PalmTreeCount"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Project5} // Replace with your actual project image
              alt="YOLOv8 Palm Tree Detection"
              className="project-image"
            />
            <h3 className="text-xl font-semibold mt-4">
              Object Detection Using YOLOv8 for Palm Tree Detection
            </h3>
            <p className="text-gray-700">
              This project demonstrates training a custom YOLOv8 model for
              detecting palm trees in large images using a sliding window
              approach. The model is trained to detect and process palm tree
              locations efficiently.
            </p>
          </a>
        </div>

        {/* Project 6*/}
        {/* Project 6 - Stress Prediction Using Text Based */}
        <div className="project-item">
          <a
            href="https://github.com/Loverzzz/StressPredictionTextBased"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Project6} // Replace with your actual project image
              alt="Stress Prediction Using Text Based"
              className="project-image"
            />
            <h3 className="text-xl font-semibold mt-4">
              Stress Prediction Using Text Based
            </h3>
            <p className="text-gray-700">
              This project involves predicting stress levels based on text
              written by individuals. Using machine learning and natural
              language processing (NLP), the model analyzes text data to detect
              signs of stress.
            </p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
