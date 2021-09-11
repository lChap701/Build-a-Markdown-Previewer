import React from "react";

/* Stateless component for the toolbar */
const Toolbar = props => {
  return (
    <div className="toolbar">
      <h2>
        <i className="fab fa-free-code-camp"></i>
        {props.text}
      </h2>
      <i className={props.icon} onClick={props.onClick}></i>
    </div>
  );
}

export default Toolbar;