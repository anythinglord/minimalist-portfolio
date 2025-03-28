import { SkillSmash } from "../../data"
import "./index.css"

export const Skills: React.FC = () => {
  return (
    <div className="skills-index">
      <h3>Skills</h3>
      <div className="skills-container">
        {SkillSmash.map((smash, index) => (
          <span className="skill-box" key={index}>
            <i className={`fa-brands ${smash.icon}`}/>
          </span>  
        ))}
      </div>
    </div>
  )
}
