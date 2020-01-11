import React from "react";
import CustomEditor from "../helpers/CustomEditor";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import MarkButton from "./MarkButton";
import BlockButton from "./BlockButton";

const Toolbar = () => {
  return (
    <>
      <ButtonGroup>
        <MarkButton format="bold" icon="format_bold" />
        <MarkButton format="italic" icon="format_italic" />
        <MarkButton format="underline" icon="format_underlined" />
        <MarkButton format="code" icon="code" />
      </ButtonGroup>

      <ButtonGroup className="ml-2">
        <BlockButton format="heading-one" icon="looks_one" />
        <BlockButton format="heading-two" icon="looks_two" />
        <BlockButton format="block-quote" icon="format_quote" />
        <BlockButton format="numbered-list" icon="format_list_numbered" />
        <BlockButton format="bulleted-list" icon="format_list_bulleted" />
      </ButtonGroup>
    </>
  );
};

export default Toolbar;
