import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "./ButtonStyles";  


export const ButtonComponent = ({ children, icon, onClick }) => {
    return (
        <Button onClick={onClick}>
            {icon && <FontAwesomeIcon icon={icon} className="icon" />}
            {children}
        </Button>
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

