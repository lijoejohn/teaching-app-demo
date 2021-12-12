import React from "react";
import PropTypes from "prop-types";
import "./menuItem.css";

/**
 * Primary UI component for user interaction
 */
export const MenuItem = ({ label, ...props }) => {
  return (
    <div className={"menu-item"} {...props}>
      <span>{label}</span>
    </div>
  );
};

MenuItem.propTypes = {
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

MenuItem.defaultProps = {
  onClick: undefined,
};
