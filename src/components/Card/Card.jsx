import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { CardContainer, CardContent, CardText, CardImage, CardLinks, Button, ProjectDescription } from "./CardStyles";

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
        <CardContainer>
            <CardContent>
                <CardText>
                    <h3>{projectName}</h3>
                    <ProjectDescription>{projectDescription}</ProjectDescription>

                    <CardLinks>
                        {projectLink && (
                            <a href={projectLink} target="_blank" rel="noopener noreferrer">
                                <Button>
                                    <FontAwesomeIcon icon={faGithubAlt} className="icon" />
                                    Link do projeto
                                </Button>
                            </a>
                        )}
                        <a href={githubLink} target="_blank" rel="noopener noreferrer">
                            <Button>
                                <FontAwesomeIcon icon={faGithubAlt} className="icon" />
                                Github
                            </Button>
                        </a>
                    </CardLinks>
                </CardText>

                <CardImage>
                    <img src={projectImage} alt={projectName} />
                </CardImage>
            </CardContent>
        </CardContainer>
    );
}
