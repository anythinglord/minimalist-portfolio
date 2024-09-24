import { ProjectSmash } from "../data"

interface Props { }

export const Projects: React.FC = ({ }: Props) => {

  return (
    <div>
      <h3>Projects</h3>
      <div className="card-container">
        {ProjectSmash.map((smash, index) => (
          <div className={`card ${smash.fav ? 'box-gradient' : ''}`} key={index}>
            <div className="card-header">
              <a
                target="blank" href={smash.link}
                className="card-name">
                {smash.title}
              </a>
              {smash.show_url && <a target="blank" href={smash.url} style={{ color: '#000' }}>
                <i className='fa-brands fa-github' />
              </a>}
            </div>
            <div className="card-text">{smash.description}</div>
            <div className="skills-container">
              {smash.notes?.map((note, indexNote) => (
                <span className="note" key={indexNote}>{note}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
