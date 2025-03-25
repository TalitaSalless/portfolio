import PropTypes from "prop-types";
import "./CardStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";


// Validação das propriedades
Card.propTypes = {
    projectName: PropTypes.string.isRequired,
    projectImage: PropTypes.string.isRequired,
    projectLink: PropTypes.string,
    githubLink: PropTypes.string.isRequired,
    projectDescription: PropTypes.string.isRequired,
};

export function Card({ projectName, projectImage, projectLink, githubLink, projectDescription }) {
    return (
        <div className="card">
            <div className="card-content">
                <div className="card-content-text">
                    <h3>{projectName}</h3>
                    <p className="project-description">{projectDescription}</p>

                    <div className="card-links">
                        {projectLink && (
                            <a href={projectLink} target="_blank" rel="noopener noreferrer">
                                <button className="button"><FontAwesomeIcon icon={faGithubAlt} className="icon"/>
                                    Link do projeto
                                </button>
                            </a>
                        )}
                        <a href={githubLink} target="_blank" rel="noopener noreferrer">
                            <button className="button"><FontAwesomeIcon icon={faGithubAlt} className="icon" />
                            Github
                            </button>
                        </a>
                    </div>
                </div>

                <div className="card-image">
                    <img src={projectImage} alt={projectName} />
                </div>
            </div>
        </div>

    );
}

