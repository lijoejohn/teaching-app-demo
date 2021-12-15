import React from "react";
import PropTypes from "prop-types";
import "./container.css";

/**
 * Primary UI component for user interaction
 */
export const Container = ({ children, ...props }) => {
  return (
    <div className={"data-container"} {...props}>
      {children}
    </div>
  );
};

Container.propTypes = {
  /**
   * Button contents
   */
  children: PropTypes.element,
};

Container.defaultProps = {
  children: undefined,
};
export const ChildContainer = ({ children, ...props }) => {
  return (
    <div className={"data-child-container"} {...props}>
      {children}
    </div>
  );
};

ChildContainer.propTypes = {
  /**
   * Button contents
   */
  children: PropTypes.element,
};

ChildContainer.defaultProps = {
  children: undefined,
};
