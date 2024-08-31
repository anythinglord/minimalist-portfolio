import './App.css'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'

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
        <span className="role">Software Engineer</span>
        <p className="text">
          I develop the second stage the mainly cost calculator application to another finland company,
          enabling the users another way to desing, create, plan construction`s projects, setting up the correct location,
          using the provider <i>Mapbox</i> also the drag&drop utilities to provide a new user experience,
          thinking in the posibility to see in the real time the calculation of costs using the structures and
          another data like a base.
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
