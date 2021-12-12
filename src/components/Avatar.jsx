import React from "react";
import PropTypes from "prop-types";
import "./avatar.css";

/**
 * Primary UI component for user interaction
 */
export const Avatar = ({ label, ...props }) => {
  return (
    <div className={`avatar hand-tool`} {...props}>
      <span>{label}</span>
    </div>
  );
};

Avatar.propTypes = {
  /**
   * Contents
   */
  label: PropTypes.string,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Avatar.defaultProps = {
  label: "",
  onClick: undefined,
};
