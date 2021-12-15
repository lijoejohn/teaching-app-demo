import React from "react";
import PropTypes from "prop-types";
import "./checkbox.css";
import Select from "react-select";
import { Icon } from "./Icon";
/**
 * Primary UI component for user interaction
 */
const options = [
  { value: "1km", label: "1 KM" },
  { value: "11km", label: "5 KM" },
  { value: "111km", label: "8 KM" },
];
const customStyles = {
  container: (provided, state) => ({
    fontFamily: '"Open Sans", sans-serif',
    boxSizing: "border-box",
    textAlign: "left",
    position: "relative",
    color: "#000000",
    fontWeight: "normal",
    fontSize: "16px",
  }),
};
export const SelectBox = (props) => {
  return (
    <div className="selectBox" {...props}>
      <Select
        value={{ value: "11km", label: "5 KM" }}
        className="custom-select"
        styles={customStyles}
        options={options}
      />
    </div>
  );
};

SelectBox.propTypes = {};

SelectBox.defaultProps = {};
