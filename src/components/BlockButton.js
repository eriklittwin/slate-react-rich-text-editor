import React from "react";
import { useSlate } from "slate-react";
import Button from "react-bootstrap/Button";
import CustomEditor from "../helpers/CustomEditor";

const BlockButton = ({ format, icon }) => {
  const editor = useSlate();

  return (
    <Button active={ CustomEditor.isBlockActive(editor, format) }
            variant="outline-dark"
            size="sm"
            onMouseDown={ event => {
              event.preventDefault();
              CustomEditor.toggleBlock(editor, format)
            } }>
      <i className="material-icons">{ icon }</i>
    </Button>
  );
};

export default BlockButton;
