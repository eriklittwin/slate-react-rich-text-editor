import React, { useCallback, useMemo, useState } from 'react';
import './App.scss';
import { Editable, Slate, withReact } from "slate-react";
import { createEditor } from "slate";
import Leaf from "./components/Leaf";
import CustomEditor from "./helpers/CustomEditor";
import Toolbar from "./components/Toolbar";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import isHotkey from "is-hotkey";
import { HOTKEYS, LIST_TYPES } from './helpers/constants';
import Element from "./components/Element";

function App() {
  const editor = useMemo(() => withReact(createEditor()), []);

  // set initial state
  const savedContent = JSON.parse(localStorage.getItem('content'));
  const [value, setValue] = useState(
    savedContent[0].children[0].text ? savedContent : [
      {
        type: 'paragraph',
        children: [{ text: 'Enter some rich text…' }],
      }
    ]);

  const renderElement = useCallback(props => <Element {...props} />, []);
  const renderLeaf = useCallback(props => <Leaf { ...props }/>, []);

  const handleChange = (value) => {
    setValue(value);

    const content = JSON.stringify(value);
    localStorage.setItem('content', content);
  };

  const handleKeyDown = event => {
    for (const hotkey in HOTKEYS) {
      if (isHotkey(hotkey, event)) {
        event.preventDefault();

        const mark = HOTKEYS[hotkey];
        CustomEditor.toggleMark(editor, mark);
      }
    }
  };

  return (
    <div className="App">
      <Slate editor={ editor } value={ value } onChange={ value => handleChange(value) }>
        <Container>
          <h1 className="mt-4">Rich Text Editor</h1>
          <Card className="mt-2">
            <Card.Header>
              <Toolbar/>
            </Card.Header>

            <Card.Body>
              <Editable renderElement={ renderElement }
                        renderLeaf={ renderLeaf }
                        onKeyDown={ event => handleKeyDown(event) }/>
            </Card.Body>
          </Card>
        </Container>
      </Slate>
    </div>
  );
}

export default App;
