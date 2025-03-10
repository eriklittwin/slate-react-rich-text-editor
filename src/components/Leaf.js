import React from "react";

const Leaf = ({ attributes, children, leaf }) => {
  if (leaf.bold) {
    children = <strong>{ children }</strong>;
  }

  if (leaf.italic) {
    children = <em>{ children }</em>;
  }

  if (leaf.code) {
    children = <code>{children}</code>;
  }

  if (leaf.underline) {
    children = <u>{ children }</u>;
  }

  return <span { ...attributes }>{ children }</span>
};

export default Leaf;
