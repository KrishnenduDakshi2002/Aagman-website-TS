import React from 'react';
import ReactMarkdown from 'react-markdown'
import MDEditor from '@uiw/react-md-editor';

export const CollaboratePage = () => {
  const [value, setValue] = React.useState("");
  return (
    <div>
      <ReactMarkdown>```
const  add = 1 + 2;

```</ReactMarkdown>
      <MDEditor
          data-color-mode='light'
          value={value}
          onChange = {(text)=> {
            if(text != undefined) setValue(text);
          }}
        />
        <MDEditor.Markdown source={value} style={{ whiteSpace: 'pre-wrap' }} />
        {/* <ReactMarkdown>{value}</ReactMarkdown> */}
    </div>
  )
}
