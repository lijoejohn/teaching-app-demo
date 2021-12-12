import React from "react";
import PropTypes from "prop-types";
import "./typography.css";

/**
 * Primary UI component for user interaction
 */
export const Heading = ({ label, ...props }) => {
  return (
    <div className="main-heading" {...props}>
      {label}
    </div>
  );
};
Heading.propTypes = {
  /**
   * Heading contents
   */
  label: PropTypes.string.isRequired,
};
Heading.defaultProps = {};

export const SubHeading = ({ label, small, ...props }) => {
  return (
    <div className={`sub-heading ${small ? "small" : ""}`} {...props}>
      {label}
    </div>
  );
};
SubHeading.propTypes = {
  /**
   * Heading contents
   */
  label: PropTypes.string.isRequired,
  small: PropTypes.bool,
};
SubHeading.defaultProps = { small: false };

export const Label = ({ label, small, ...props }) => {
  return (
    <div className={`heading-label ${small ? "small" : ""}`} {...props}>
      {label}
    </div>
  );
};
Label.propTypes = {
  /**
   * Heading contents
   */
  label: PropTypes.string.isRequired,
  small: PropTypes.bool,
};
Label.defaultProps = { small: false };

export const InfoLabel = ({ label, ...props }) => {
  return (
    <div className={`heading-label-info`} {...props}>
      {label}
    </div>
  );
};
InfoLabel.propTypes = {
  /**
   * Heading contents
   */
  label: PropTypes.string.isRequired,
};
InfoLabel.defaultProps = { small: false };

export const HLine = ({ label, ...props }) => {
  return <div className={`hr-line`} {...props}></div>;
};
