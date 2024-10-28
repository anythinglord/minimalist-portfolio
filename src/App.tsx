import './App.css'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'

function App() {
  return (
    <div className="content">
      <section className="header">
        <div className="info">
          <span className="name">Jesus Salcedo</span>
          <span className="role">Full Stack JavaScript Developer +4 years</span>
          <span className="location">Bogota, Colombia</span>
        </div>
        <img className="image" src="/assets/photo.jpeg" alt="image" height="85" width="80"/>
      </section>
      <section className="about">
        <h3>About me</h3>
        <p className="text">With over four years of professional experience as a web software developer, 
        I am currently working as a Full Stack Developer. My career has been focused on designing and 
        implementing a wide range of innovative solutions across multiple companies. I have played a key role in constructing robust, 
        scalable applications, and my expertise spans both front-end and back-end development. 
        This experience has equipped me with the skills necessary to handle complex projects, ensuring that I can deliver high-quality, 
        efficient software solutions tailored to meet specific business needs.</p>
      </section>
      <div className="experience">
        <h3>Professional Experience</h3>
        <div className="company">
          <a target="blank" href="https://ihme3d.com/en/" className="company-name">Ihme3d</a>
          <span className="text">2020 - current</span>
        </div>
        <span className="role">Full Stack Developer</span>
        <p className="text">
        I contribute to the development of the second phase of a comprehensive cost calculator application for a Finnish company. 
        This solution empowers users to design, create, and plan construction projects with enhanced precision by integrating location 
        data via Mapbox and utilizing drag-and-drop functionalities to improve the overall user experience. The system also supports 
        real-time cost calculations based on project structures and additional data, offering a more dynamic and intuitive approach to project planning.
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
