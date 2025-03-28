import './App.css'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills/Skills'

function App() {
  return (
    <div className="content">
      <section className="header">
        <div className="info">
          <span className="name">Jesus Salcedo</span>
          <span className="role">Software Engineer +4 years</span>
          <span className="location">Bogota, Colombia</span>
        </div>
        <img className="image" src="/assets/photo.jpeg" alt="image" height="85" width="80"/>
      </section>
      <section className="about">
        <h3>About me</h3>
        <p className="text">With over four years of professional experience as a software engineer, I am currently working as a developer.
        My expertise is centered around <b>React with TypeScript and JavaScript</b>, building scalable and high-performance applications. 
        As a full-stack developer, I have been involved in the entire development lifecycle, from design to deployment. Additionally, 
        I have experience working with <b>PHP, Symfony, and MySQL</b>.</p>

        <p className="text">Currently, I am working on personal projects focused on <b>React, TypeScript, Redux, Node.js, Express, Prisma ORM, and MongoDB</b>. 
          I am designing and developing full-stack applications, handling both frontend and backend processes to build scalable and efficient solutions
        </p>
      </section>
      <div className="experience">
        <h3>Professional Experience</h3>
        <div className="company">
          <a target="blank" href="https://ihme3d.com/en/" className="company-name">Ihme3d</a>
          <span className="text">2020 - current</span>
        </div>
        <span className="role">Software Engineer</span>
        <p className="text">
        Develop a platform that allows users to create construction projects and an API for consuming information.
        Improve services to support the load of hundreds of requests per day. Help reduce calculation times and reduce costs through existing database structures..
        </p>
        <p className="text">
        actively participated in the requirements gathering processes necessary for configurators for several clients who required multiple products. 
        This process included processes ranging from building and/or modifying configurators that allowed <b>3D product views in the browser</b> and the
        possibility to generate quote files and other files needed by clients..
        </p>
      </div>
      <section className="experience">
        <h3>Education</h3>
        <div className="company">
          <a target="blank" href="https://ihme3d.com/en/" className="company-name">National University of Colombia</a>
          <span className="text">2015 - 2020</span>
        </div>
        <span className="role">Systems and Computer Engineer</span>
      </section>
      <section className="projects">
        <Projects />
      </section>
      <section className="skills">
        <Skills />
      </section>
    </div>
  )
}

export default App
