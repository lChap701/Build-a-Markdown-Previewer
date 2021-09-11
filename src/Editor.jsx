import React from "react";

/* Stateless component for the #editor */
const Editor = props => {
  return (
    <textarea
      id="editor"
      onChange={props.onChange}
      value={props.markdown}
    />
  );
}

export default Editor;