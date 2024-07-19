import "./CardStyle.css";

export function Card({ projectName, projectImage, projectLink, githubLink }) {
  return (
    <div className="card">
      <img src={projectImage} alt={projectName} />

      <div className="card-content">
        <h3>{projectName}</h3>
        <div className="links">
          <a href={projectLink} target="_blank" rel="noopener noreferrer">
            <button className="button">
              Link do projeto
            </button>
          </a>

          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <button className="button">
              Repositório Github
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
