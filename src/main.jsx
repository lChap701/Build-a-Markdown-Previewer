import React from "react";
import ReactDOM from "react-dom";
import Toolbar from "./Toolbar";
import {placeholder} from "./marked";
import Preview from "./Preview";
import Editor from "./Editor";
import "./index.scss";

/* Stateful component */
class Markdown extends React.Component {
  constructor(props) {
    super(props);
    
    // States that will be passed as props
    this.state = {
      editorMax: false,
      previewMax: false,
      markdown: placeholder
    }
    this.textChange = this.textChange.bind(this);
    this.editorSizeChange = this.editorSizeChange.bind(this);
    this.previewSizeChange = this.previewSizeChange.bind(this);
  }
  
  // Gets markdown text
  textChange(e) {
    this.setState({
      markdown: e.target.value
    });
  }
  
  // Changes the size of the Editor window
  editorSizeChange() {
    this.setState({
      editorMax: !this.state.editorMax
    });
  }
  
  // Changes the size of the Preview window
  previewSizeChange() {
    this.setState({
      previewMax: !this.state.previewMax
    });
  }
 
  render() {
    const classes = [
      { 
        h1: "",
        editor: "wrap",
        preview: "wrap",
        icon: "fas fa-expand-arrows-alt fa-2x"
      },
      { 
        h1: "hide",
        editor: "wrap max",
        preview: "wrap hide",
        icon: "fas fa-compress-arrows-alt fa-2x"
      },
      {
        h1: "hide",
        editor: "wrap hide",
        preview: "wrap max",
        icon: "fas fa-compress-arrows-alt fa-2x"
      }
    ];
    
    const INDEX = this.state.editorMax ? 1
                  : this.state.previewMax ? 2
                    : 0;
    
    // Adds an overlay effect to the body 
    if (classes[INDEX].h1 == "hide") {
      document.body.classList.add("overlay");
    } else if (document.body.classList.contains("overlay")) {
        document.body.classList.remove("overlay");
     }
    
    
    return (
      <div>
        <h1 className={classes[INDEX].h1}>Markdown Previewer</h1>
        
        <div className={classes[INDEX].editor}>
          <Toolbar 
            icon={classes[INDEX].icon}
            onClick={this.editorSizeChange}
            text="Editor" 
          />
          <Editor 
            markdown={this.state.markdown}
            onChange={this.textChange}
          />
        </div>
        
        <div className={classes[INDEX].preview}>
          <Toolbar 
            icon={classes[INDEX].icon}
            onClick={this.previewSizeChange}
            text="Preview"
          />
          <Preview markdown={this.state.markdown} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Markdown />, document.getElementById("root"));
