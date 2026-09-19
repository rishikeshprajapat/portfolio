import "./About.css";
import { Typewriter } from "react-simple-typewriter";
import { FaPhoneAlt, FaFileAlt } from "react-icons/fa";

function About() {
  return (
    <section id="home" className="about">
      <div className="about-intro">
        <img src="/projects/portfolio.png"
          alt="profile"
          className="about-img" />

        <h1>
          Hi, I'm <span>Rishikesh Prajapat</span>
        </h1>

        <h2 className="role">
          <Typewriter
            words={[
              "AWS Developer",
              "Full Stack Web Developer",
              "Tech Enthusiast",
              "Problem Solver",
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>

        <p className="about-text">
          I’m a B.Tech CSE student at NIT Arunachal Pradesh with a strong interest 
          in AWS Cloud and Full Stack Development. I have hands-on experience with 
          AWS services such as IAM, EC2, S3, VPC, Elastic Load Balancing, and Auto 
          Scaling. I also enjoy building web applications using the MERN stack, 
          solving coding problems, and exploring new technologies.
        </p>

        <div className="about-buttons">
          <button className="contact-btn">
            <FaPhoneAlt className="btn-icon" />
            Contact Me
          </button>

          <a
            href="https://drive.google.com/file/d/1-VHGLLd1zRAtmDd_1AeSg6kJsjfR6e__/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="resume-btn">
              <FaFileAlt className="btn-icon" />
              Resume
            </button>
          </a>
        </div>
      </div>

      <div className="about-cards">
        <div className="about-card">
          <h3>🎓 Education</h3>
          <p>National Institute of Technology Arunachal Pradesh</p>
        </div>

        <div className="about-card">
          <h3>💻 Web Development</h3>
          <p>React, Node.js, JavaScript</p>
        </div>

        <div className="about-card">
          <h3>🚀 Interests</h3>
          <p>Web Development,Problem Solving & AWS</p>
        </div>

        <div className="about-card">
          <h3>📍 Location</h3>
          <p>India</p>
        </div>
      </div>
    </section>
  );
}

export default About;
