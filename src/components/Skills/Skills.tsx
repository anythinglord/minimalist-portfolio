import { SkillSmash, voidSkills } from "../../data"
import "./index.css"

export const Skills: React.FC = () => {
  return (
    <div className="skills-index">
      <h3>Skills</h3>
      <div className="skills-container">
        {voidSkills.map((_, index) => (
          <span className="skill-box" key={index}/>
        ))}
        {SkillSmash.map((smash, index) => (
          <span className="skill-box" key={index}>
            <i className={`fa-brands ${smash.icon}`}/>
          </span>  
        ))}
      </div>
      <div className="skills-container-down">
        {voidSkills.map((_, index) => (
          <span className="skill-box" key={index}/>
        ))}
        {SkillSmash.map((smash, index) => (
          <span className="skill-box" key={index}>
            <i className={`fa-brands ${smash.icon}`}/>
          </span>  
        ))}
      </div>
    </div>
  )
}
