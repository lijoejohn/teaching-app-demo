import React from "react";
import PropTypes from "prop-types";
import "./line.css";

/**
 * Primary UI component for user interaction
 */
export const Line = ({ progress, width, ...props }) => {
  return (
    <div className={"wrap"} style={{ width: `${width}` }}>
      {progress ? (
        <div className="done" style={{ width: `${progress}%` }}></div>
      ) : null}
    </div>
  );
};

Line.propTypes = {
  /**
   * Optional click handler
   */
  progress: PropTypes.number,
  /**
   * width of line
   */
  width: PropTypes.string,
};

Line.defaultProps = {
  progress: 0,
  width: "100px",
};
