import { SkillSmash } from "../data"

interface Props { }

export const Skills = ({  }: Props) => {
  
  return (
    <div>
      <h3>Skills</h3>
      <div className="skills-container">
        {SkillSmash.map((smash, index) => (
          <span className="skill-box" key={index}>
            <i className={`fa-brands ${smash.icon}`}/>
            {smash.name}
          </span>  
        ))}
      </div>
    </div>
  )
}
