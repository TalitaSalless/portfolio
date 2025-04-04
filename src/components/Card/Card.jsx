import PropTypes from "prop-types";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { CardContainer, CardContent, CardText, CardImage, CardLinks, ProjectDescription } from "./CardStyles";
import { ButtonComponent } from "../Button/Button";

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
                    <h1>{projectName}</h1>
                    <ProjectDescription>{projectDescription}</ProjectDescription>

                    <CardLinks>
                        {projectLink && (
                            <a href={projectLink} target="_blank" rel="noopener noreferrer">
                                <ButtonComponent icon={faGlobe}>Link do projeto</ButtonComponent>
                            </a>
                        )}
                        <a href={githubLink} target="_blank" rel="noopener noreferrer">
                            <ButtonComponent icon={faGithubAlt}>Github</ButtonComponent>
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
