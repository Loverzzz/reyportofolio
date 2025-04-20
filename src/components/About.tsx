import React from "react";
import AboutImage from "../assets/Aldo.jpg"; // Replace with your actual image

const About: React.FC = () => {
  return (
    <section id="about" className="about py-20 relative">
      {/* Video Background */}
      <div className="video-background">
        <video autoPlay loop muted className="video-element">
          <source src="/assets/bganimation.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="container mx-auto px-8 md:px-16 lg:px-24 text-center z-10 relative">
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        <div className="flex flex-col md:flex-row justify-center items-center">
          {/* Profile Image with White Border */}
          <div className="w-48 h-48 md:w-96 md:h-96 mb-8 md:mb-0">
            <img
              src={AboutImage} // Make sure your image path is correct
              alt="Reynaldo Arya Budi Trisna"
              className="w-full h-full rounded-full object-cover border-8 border-white shadow-lg transform transition-transform duration-500 hover:scale-110"
            />
          </div>

          {/* Description */}
          <div className="flex-1 mt-4 md:mt-0 md:ml-8 text-xl">
            <p>
              Hello! I am Reynaldo Arya Budi Trisna, a passionate AI/ML and Data
              Enthusiast focused on developing innovative solutions in the
              fields of artificial intelligence, machine learning, and data
              science. I specialize in creating responsive and user-friendly web
              applications using front-end technologies like React and
              TypeScript.
            </p>
            <p className="mt-8">
              I graduated from Universitas Airlangga's Robotics and AI
              Engineering program. I have a strong interest in robotics,
              artificial intelligence, machine learning, smart farming, graphics
              design, and video editing. I'm enthusiastic about applying my
              knowledge and skills to new opportunities and challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
