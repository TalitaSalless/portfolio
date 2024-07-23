import PropTypes from "prop-types";
import "./CardStyle.css";

export function Card({ projectName, projectImage, projectLink, githubLink }) {
  return (
    <div className="card">
      <img src={projectImage} alt={projectName} />

      <div className="card-content">
        <h3>{projectName}</h3>
        <div className="links">
          {projectLink && (
            <a href={projectLink} target="_blank" rel="noopener noreferrer">
              <button className="button">Link do projeto</button>
            </a>
          )}
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <button className="button">Repositório Github</button>
          </a>
        </div>
      </div>
    </div>
  );
}

// Validação das propriedades
Card.propTypes = {
  projectName: PropTypes.string.isRequired,
  projectImage: PropTypes.string.isRequired,
  projectLink: PropTypes.string,
  githubLink: PropTypes.string.isRequired,
};

// import "./CardStyle.css";

// export function Card({ projectName, projectImage, projectLink, githubLink }) {
//   return (
//     <div className="card">
//       <img src={projectImage} alt={projectName} />

//       <div className="card-content">
//         <h3>{projectName}</h3>
//         <div className="links">
//           <a href={projectLink} target="_blank" rel="noopener noreferrer">
//             <button className="button">Link do projeto</button>
//           </a>

//           <a href={githubLink} target="_blank" rel="noopener noreferrer">
//             <button className="button">Repositório Github</button>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }
