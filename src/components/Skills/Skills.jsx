import "./Skills.css";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaAws,
} from "react-icons/fa";

import {
  SiCplusplus,
  SiPython,
  SiExpress,
  SiMongodb,
  SiMysql,
} from "react-icons/si";

function Skills() {
  const skills = [
    { name: "C++", icon: <SiCplusplus color="#00599C" /> },
    { name: "Python", icon: <SiPython color="#3776AB" /> },
    { name: "Java", icon: <FaJava color="#007396" /> },
    { name: "SQL", icon: <SiMysql color="#4479A1" /> },
    { name: "HTML", icon: <FaHtml5 color="#E34F26" /> },
    { name: "CSS", icon: <FaCss3Alt color="#1572B6" /> },
    { name: "JavaScript", icon: <FaJs color="#F7DF1E" /> },
    { name: "React", icon: <FaReact color="#61DAFB" /> },
    { name: "Node.js", icon: <FaNodeJs color="#339933" /> },
    { name: "Express", icon: <SiExpress color="#444444" /> },
    { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
    { name: "AWS", icon: <FaAws color="#FF9900" /> },
    { name: "Git", icon: <FaGitAlt color="#F05032" /> },
    { name: "GitHub", icon: <FaGithub color="#171515" /> },
  ];

  return (
    <section id="skills" className="skills">
      <h2 className="skills-title">Skills & Technologies</h2>

      <p className="skills-subtitle">
        The tools and technologies I use to build modern applications
      </p>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">{skill.icon}</div>

            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
