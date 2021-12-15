import React from "react";
import PropTypes from "prop-types";
import "./button.css";
import { Icon } from "./Icon";
/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary,
  backgroundColor,
  size,
  label,
  fullWidth,
  ...props
}) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  return !fullWidth ? (
    <button
      type="button"
      className={["storybook-button", `storybook-button--${size}`, mode].join(
        " "
      )}
      {...props}
    >
      {label}
    </button>
  ) : (
    <div className="full-width-button" {...props}>
      {label}
      <Icon color="#5655C6" graphics="plus" height="18px" width="18px" />
    </div>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(["small", "large"]),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
  fullWidth: PropTypes.bool,
};

Button.defaultProps = {
  primary: false,
  size: "small",
  onClick: undefined,
  fullWidth: false,
};
