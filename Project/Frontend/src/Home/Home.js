import React from 'react';
import hospitalImage from './images/HomePage.jpg';
import './Home.css';

function Home() {
  return (
    <div className="home">

      <img 
        src={hospitalImage} 
        alt="Home" 
        className="bgBack"
      />

      <div className="textContainer">
        <h2>XYZ HOSPITAL...</h2>
        <p>
        • Emergency Care: Our 24/7 emergency department is equipped to handle urgent medical needs with speed and expertise.
        </p>
        <p>
        • Inpatient & Outpatient Services: We offer a range of medical services, including surgeries, diagnostics, and rehabilitation.
        </p>
        <p>
        • Specialized Care: Our team of specialists provides advanced care in areas such as cardiology, orthopedics, pediatrics, and more.
        </p>
        <p>
        • Preventive Health: We emphasize the importance of preventive care through screenings, wellness programs, and educational resources.
        </p>
      </div>
    </div>
  );
}

export default Home;
