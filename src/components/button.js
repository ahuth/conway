import React from "react";

function Button({onClick, text}) {
  return <button onClick={onClick}>{text}</button>;
}

Button.propTypes = {
  onClick: React.PropTypes.func.isRequired,
  text: React.PropTypes.string.isRequired
};

export default Button;
