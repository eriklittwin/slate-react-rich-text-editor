import React from "react";
import CustomEditor from "../helpers/CustomEditor";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

const Toolbar = ({ editor }) => {
  return (
    <>
      <ButtonGroup>
        <Button variant="outline-dark"
                onMouseDown={ event => {
                  event.preventDefault();
                  CustomEditor.toggleBoldMark(editor);
                } }>
          Bold
        </Button>
        <Button variant="outline-dark"
                onMouseDown={ event => {
                  event.preventDefault();
                  CustomEditor.toggleItalicMark(editor);
                } }>
          Italic
        </Button>
        <Button variant="outline-dark"
                onMouseDown={ event => {
                  event.preventDefault();
                  CustomEditor.toggleUnderlineMark(editor);
                } }>
          Underline
        </Button>
      </ButtonGroup>

      <ButtonGroup className="ml-2">
        <Button variant="outline-dark"
                onMouseDown={ event => {
                  event.preventDefault();
                  CustomEditor.toggleCodeBlock(editor);
                } }>
          Code Block
        </Button>
      </ButtonGroup>
    </>
  );
};

export default Toolbar;
