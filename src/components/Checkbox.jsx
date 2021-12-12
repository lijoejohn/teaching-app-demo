import React from "react";
import PropTypes from "prop-types";
import "./checkbox.css";
import Checkbox from "react-custom-checkbox";
import { Icon } from "./Icon";
/**
 * Primary UI component for user interaction
 */
export const Check = ({ parent, onClick, checked, label, showInfo }) => {
  return (
    <Checkbox
      icon={<span className="checked-icon"></span>}
      className={`custom-checkbox ${parent ? "parent" : "child"}`}
      name="my-input"
      checked={checked}
      onChange={(value) => {
        onClick(value);
      }}
      borderColor="#5655C6"
      labelStyle={{ marginLeft: 5, userSelect: "none" }}
      label={
        <div>
          <span>{label}</span>
          {showInfo && (
            <Icon color="#5655C6" graphics="info" height="16px" width="16px" />
          )}
        </div>
      }
      labelClassName={`checkbox-label  ${parent ? "parent" : "child"}`}
    />
  );
};

Check.propTypes = {
  /**
   * parent flag
   */
  parent: PropTypes.bool,
  /**
   * label
   */
  label: PropTypes.string,
  /**
   * label
   */
  showInfo: PropTypes.bool,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Check.defaultProps = {
  parent: true,
  onClick: undefined,
  label: "",
  showInfo: false,
};

export const CheckGroup = ({ data }) => {
  return (
    <div className="check-group">
      {data.map(({ parent, checked, onClick, label, showInfo }) => {
        return (
          <div
            key={label}
            className={`check-box-item ${parent ? "parent" : "child"}`}
          >
            <Checkbox
              icon={<span className="checked-icon"></span>}
              className={`custom-checkbox ${parent ? "parent" : "child"}`}
              name="my-input"
              checked={checked}
              onChange={(value) => {
                onClick(value);
              }}
              borderColor="#5655C6"
              labelStyle={{ marginLeft: 5, userSelect: "none" }}
              label={
                <div>
                  <span>{label}</span>
                  {showInfo && (
                    <Icon
                      color="#5655C6"
                      graphics="info"
                      height="16px"
                      width="16px"
                    />
                  )}
                </div>
              }
              labelClassName={`checkbox-label  ${parent ? "parent" : "child"}`}
            />
          </div>
        );
      })}
    </div>
  );
};

CheckGroup.propTypes = {
  /**
   * parent flag
   */
  data: PropTypes.array,
};

CheckGroup.defaultProps = {
  data: [],
};
