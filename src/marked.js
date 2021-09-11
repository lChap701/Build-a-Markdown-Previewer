import Marked from "marked";

/*
 * This project uses the marked library 
 * which can be found here: https://cdnjs.com/libraries/marked
 */

// Markdown preview
const placeholder = `# This is a heading (h1)
## This is a sub-heading (h2)
### This is a sub-sub-heading (h3)
#### This is a sub-sub-sub-heading (h4)
##### This is a sub-sub-sub-sub-heading (h5)
###### This is a sub-sub-sub-sub-sub-heading (h6)
 
Here's some code, \`<div></div>\`, between 2 backticks.
\`\`\`
// this is multi-line code:
function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header  | Crazy Header  | Another Header?
------------ | ------------- | -------------
Your content | can be here,  | and it can be here....
And here.    | Okay.         | I think we get it.

- And of course there are lists.
  - Some are bulleted.
    - With different indentation levels.
      - That look like this.

1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/320px-React-icon.svg.png)
 `;

// Adds line breaks
Marked.setOptions({
  breaks: true
});

// Creates a template for links
const render = new Marked.Renderer();
render.link = function(href, title, text) {
  return `<a target="_blank" title="${text}" href="${href}">${text}` 
    + '</a>';
};


export {placeholder, render};