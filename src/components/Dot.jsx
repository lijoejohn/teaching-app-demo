import React from "react";
import PropTypes from "prop-types";
import "./dot.css";

/**
 * Primary UI component for user interaction
 */
export const Dot = ({ color }) => {
  return <div className={"dot"} style={{ backgroundColor: `${color}` }}></div>;
};

Dot.propTypes = {
  /**
   * Button contents
   */
  color: PropTypes.string,
};

Dot.defaultProps = {
  color: "#FF2E00",
};
