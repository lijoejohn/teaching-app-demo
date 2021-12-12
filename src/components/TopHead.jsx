import React from "react";
import PropTypes from "prop-types";
import "./topHead.css";
import { Icon } from "./Icon";
import { Dot } from "./Dot";
import { Avatar } from "./Avatar";
/**
 * Primary UI component for user interaction
 */
export const TopHead = ({
  label,
  menuItems,
  showNotification,
  showAvatar,
  ...props
}) => {
  return (
    <div className={"navbar"} {...props}>
      <div className="menu-wrap">{menuItems}</div>
      {showNotification && (
        <div className="notification-wrap">
          <Icon graphics="bell" />
          <div className="dot-wrap">
            <Dot />
          </div>
        </div>
      )}
      {showAvatar && (
        <div className="avatar-wrap">
          <Avatar label="SH" />
        </div>
      )}
    </div>
  );
};

TopHead.propTypes = {
  /**
   * Nav contents
   */
  menuItems: PropTypes.element,
  /**
   * Flag to show Notification
   */
  showNotification: PropTypes.bool,
  /**
   * Button contents
   */
  showAvatar: PropTypes.bool,
};

TopHead.defaultProps = {
  menuItems: undefined,
  showNotification: true,
  showAvatar: true,
};
