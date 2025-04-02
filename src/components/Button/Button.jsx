import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyledButton } from "./ButtonStyles";

export const ButtonComponent = ({ children, icon, onClick }) => {
    return (
        <StyledButton onClick={onClick}>
            {icon && <FontAwesomeIcon icon={icon} className="icon" />}
            {children}
        </StyledButton>
    );
};

ButtonComponent.propTypes = {
    children: PropTypes.node.isRequired,
    icon: PropTypes.object,
    onClick: PropTypes.func,
};

ButtonComponent.defaultProps = {
    icon: null,
    onClick: () => { },
};

