import React from "react";
import PropTypes from "prop-types";
import "./actionBar.css";
import { Icon } from "./Icon";
import { Line } from "./Line";
/**
 * Primary UI component for user interaction
 */
export const ActionBar = ({ data, ...props }) => {
  return (
    <div className={"actionbar"} {...props}>
      <div className="action-wrap">
        {data.map((item, index) => {
          return (
            <div key={item.label} className="action-item">
              <div className="action-step">
                <span className="icons">
                  <Icon
                    color={item.progress ? "#5655C6" : "#C4C4C4"}
                    graphics={item.icon}
                    height="22px"
                    width="22px"
                  />
                </span>
                <span
                  className={`typography ${item.progress ? "progress" : ""}`}
                >
                  {item.label}
                </span>
              </div>
              {index + 1 < data.length && (
                <div className="line-sep">
                  <Line progress={item.progress} width="100px" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

ActionBar.propTypes = {
  /**
   * action data
   */
  data: PropTypes.array,
};

ActionBar.defaultProps = {
  data: undefined,
};
