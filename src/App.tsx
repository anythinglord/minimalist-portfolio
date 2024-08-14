import './App.css'

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
        <p className="text">+4 years of professional experience like software web developer. Currently i am woking
          like fullstack developer, living in bogota, Colombia. i have been working in the construction
          side creating a diferent solutions across some finland companies</p>
      </section>
      <div className="experience">
        <h3>Professional Experience</h3>
        <div className="company">
          <a target="blank" href="https://ihme3d.com/en/" className="company-name">Ihme3d</a>
          <span className="text">2020 - current</span>
        </div>
        <span className="role">Full Stack Developer</span>
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
        <h3>Projects</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor architecto laboriosam repellat! Error,
          itaque? Corporis iste animi eum alias voluptates doloribus, ipsum dolore vitae aliquam error laborum ut
          quidem pariatur.</p>
      </section>
      <section className="skills">
        <h3>Skills</h3>
        <div className="skills-container">
          <span className="skill-box">
            <i className="fa-brands fa-html5"></i>
            HTML
          </span>
          <span className="skill-box">
            <i className="fa-brands fa-css3-alt"></i>
            CSS
          </span>
          <span className="skill-box">
            <i className="fa-brands fa-js"></i>
            JavaScript
          </span>
          <span className="skill-box">TypeScript</span>
          <span className="skill-box">MySQL</span>
          <span className="skill-box">
            <i className="fa-brands fa-git-alt"></i>
            Git
          </span>
          <span className="skill-box">
            <i className="fa-brands fa-github"></i>
            Github
          </span>
          <span className="skill-box">
            <i className="fa-brands fa-gitlab"></i>
            Gitlab
          </span>
          <span className="skill-box">
            <i className="fa-brands fa-react"></i>
            React</span>
          <span className="skill-box">
            <i className="fa-brands fa-docker"></i>
            Docker</span>
        </div>
      </section>
    </div>
  )
}

export default App
