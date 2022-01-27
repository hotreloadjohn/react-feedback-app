import React from "react";
import PropTypes from "prop-types";

function Header({ headerText, bgColor, textColor }) {
  const headerStyle = {
    backgroundColor: bgColor,
    color: textColor,
  };
  return <header style={headerStyle}>{headerText}</header>;
}

Header.defaultProps = {
  headerText: "Feedback UI",
  bgColor: "rgba(0,0,0,0.4)",
  textColor: "#ff6a95",
};

Header.propTypes = {
  headerText: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default Header;
