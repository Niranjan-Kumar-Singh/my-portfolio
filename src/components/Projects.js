import React from 'react';
import './Projects.css'; // CSS for project cards
import restraunt from '../images/restraunt.png'; // Path to images
import textCounter from '../images/textCounter.png'; // Path to images
import weather from '../images/weather.png'; // Path to images

const Projects = () => {
  const projectList = [
    {
      title: 'Restaurant Dashboard',
      description: `The Restaurant Dashboard is a web-based platform designed to streamline restaurant operations by 
      providing comprehensive insights into various aspects of the business. The dashboard enables restaurant owners and 
      managers to track key performance metrics such as orders, revenue, and customer satisfaction in real-time. 
      With an intuitive interface and data visualization tools, the dashboard allows for better decision-making and 
      improved operational efficiency.\n\nFeatures include:\n- Real-time data analytics on orders and sales\n- User-friendly charts and graphs for visualizing performance\n- Integration with backend systems for dynamic updates\n- Responsive design for desktop and mobile use\n\nTechnologies Used: React.js, CSS3, JavaScript, Chart.js`,
      img: restraunt,
      link: 'https://resdashboard.netlify.app'
    },
    { 
      title: 'Text Counter App',
      description: `The Text Counter App is a simple and efficient web application that allows users to quickly analyze their text by counting the number of characters and words. This tool is perfect for writers, students, and professionals who need to meet specific word or character limits for essays, articles, or social media posts. The app provides instant feedback as the user types or pastes text into the input area.\n\nFeatures:\n- Real-time character and word count\n- Clean and minimalist user interface\n- Copy-paste functionality for easy text input\n- Supports dark mode for a comfortable user experience\n\nTechnologies Used: React.js, CSS3, JavaScript`,
      img: textCounter,
      link: 'https://textcounterapp.netlify.app'
    },
    { 
      title: 'Weather Forecasting App',
      description: `The Weather Forecasting App provides users with real-time weather updates and forecasts for any location worldwide. This application is designed to offer accurate weather conditions such as temperature, humidity, wind speed, and more, with a user-friendly interface. It is particularly useful for travelers, outdoor enthusiasts, and anyone looking to stay updated on weather conditions.\n\nFeatures:\n- Real-time weather data for any location\n- Temperature, humidity, wind speed, and other key metrics\n- Easy-to-use location search functionality\n- Responsive design for both desktop and mobile devices\n\nTechnologies Used: React.js, CSS3, OpenWeatherMap API`,
      img: weather,
      link: 'https://w-forecasting.netlify.app'
    },
  ];

  return (
    <section id="projects">
      <h1>My Projects</h1>
      <div className="project-column">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.img} alt={project.title} className="project-image" />
            <div className="project-details">
              <h3>{project.title}</h3>
              <p className="description">{project.description}</p>
              <a href={project.link} className="view-site-btn" target="_blank" rel="noopener noreferrer">View site</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
  