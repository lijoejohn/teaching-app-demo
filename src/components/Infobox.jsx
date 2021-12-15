import React from "react";
import PropTypes from "prop-types";
import "./infobox.css";
import { Icon } from "./Icon";
/**
 * Primary UI component for user interaction
 */
export const Infobox = ({ title, subtitle, ...props }) => {
  return (
    <div className={"data-infobox"} {...props}>
      <div className="block">
        <div className="title">{title}</div>
        <div className="icon-block">
          <Icon color="#5655C6" graphics="close" height="16px" width="16px" />
        </div>
      </div>
      <div className="subtitle">{subtitle}</div>
    </div>
  );
};

Infobox.propTypes = {
  /**
   * Title contents
   */
  title: PropTypes.string,
  /**
   * Title contents
   */
  subtitle: PropTypes.string,
};

Infobox.defaultProps = {
  title: undefined,
  subtitle: undefined,
};
