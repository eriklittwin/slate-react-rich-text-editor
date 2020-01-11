import React, { useCallback, useMemo, useState } from 'react';
import './App.scss';
import { Editable, Slate, withReact } from "slate-react";
import { createEditor } from "slate";
import CodeElement from "./components/elements/CodeElement";
import DefaultElement from "./components/elements/DefaultElement";
import Leaf from "./components/Leaf";
import CustomEditor from "./helpers/CustomEditor";
import Toolbar from "./components/Toolbar";

function App() {
  const editor = useMemo(() => withReact(createEditor()), []);
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem('content')) || [
      {
        type: 'paragraph',
        children: [{ text: 'A line of text in a paragraph.' }],
      }
    ]);

  const renderElement = useCallback(props => {
    switch (props.element.type) {
      case 'code':
        return <CodeElement { ...props }/>
      default:
        return <DefaultElement { ...props }/>
    }
  }, []);

  const renderLeaf = useCallback(props => {
    return <Leaf { ...props }/>
  }, []);

  const handleChange = (value) => {
    setValue(value);

    const content = JSON.stringify(value);
    localStorage.setItem('content', content);
  };

  const handleKeyDown = event => {
    if (!event.ctrlKey) return;

    switch (event.key) {
      case 'c':
        event.preventDefault();
        CustomEditor.toggleCodeBlock(editor);

        break;
      case 'b':
        event.preventDefault();
        CustomEditor.toggleBoldMark(editor);

        break;
      default:
        return;
    }
  };

  return (
    <div className="App">
      <Slate editor={ editor } value={ value } onChange={ value => handleChange(value) }>
        <Toolbar editor={ editor }/>
        <Editable renderElement={ renderElement }
                  renderLeaf={ renderLeaf }
                  onKeyDown={ event => handleKeyDown(event) }/>
      </Slate>
    </div>
  );
}

export default App;
