import PropTypes from "prop-types";
import React from "react";

export default function Button({onClick, text}) {
  return <button onClick={onClick}>{text}</button>;
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};
