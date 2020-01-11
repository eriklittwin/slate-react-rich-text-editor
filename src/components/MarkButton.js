import React from "react";
import { useSlate } from "slate-react";
import Button from "react-bootstrap/Button";
import CustomEditor from "../helpers/CustomEditor";

const MarkButton = ({ format, icon }) => {
  const editor = useSlate();

  return (
    <Button active={ CustomEditor.isMarkActive(editor, format) }
            variant="outline-dark"
            size="sm"
            onMouseDown={ event => {
              event.preventDefault();
              CustomEditor.toggleMark(editor, format)
            } }>
      <i className="material-icons">{ icon }</i>
    </Button>
  );
};

export default MarkButton;
