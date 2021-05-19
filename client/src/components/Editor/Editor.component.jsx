import React from 'react';
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/javascript/javascript'
import './Editor.styles.scss'
import {Controlled as ControlledEditor} from 'react-codemirror2'


const Editor = ({language,displayName,value,onChange,clickEvent }) => {


    const handleChange = (editor, data, value) =>{
        onChange(value);
    }
    return(
        <div className="editor-container">
            <div className="editor-title">
                {displayName}
            </div>
            <ControlledEditor
                onBeforeChange={handleChange}
                value={value}
                className="code-mirror-wrapper"
                options={{
                    lineWrapping: true,
                    lint: true,
                    mode: language,
                    theme: 'material',
                    lineNumbers: true,
                }}
            />
            <button onClick={clickEvent}>Test Code</button>
        </div>
    )
}

export default Editor;