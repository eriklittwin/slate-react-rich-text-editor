import { Editor, Text, Transforms } from "slate";
import { LIST_TYPES } from "./constants";

const CustomEditor = {
  isMarkActive: (editor, format) => {
    const [match] = Editor.nodes(editor, {
      match: node => node[format] === true,
      universal: true,
    });

    return !!match;
  },
  toggleMark: (editor, format) => {
    const isActive = CustomEditor.isMarkActive(editor, format);

    Transforms.setNodes(
      editor,
      { [format]: isActive ? null : true },
      { match: node => Text.isText(node), split: true },
    );
  },
  isBlockActive: (editor, format) => {
    const [match] = Editor.nodes(editor, {
      match: node => node.type === format,
    });

    return !!match;
  },
  toggleBlock: (editor, format) => {
    const isActive = CustomEditor.isBlockActive(editor, format)
    const isList = LIST_TYPES.includes(format)

    Transforms.unwrapNodes(editor, {
      match: node => LIST_TYPES.includes(node.type),
      split: true,
    });

    Transforms.setNodes(editor, {
      type: isActive ? 'paragraph' : isList ? 'list-item' : format,
    });

    if (!isActive && isList) {
      const block = { type: format, children: [] };
      Transforms.wrapNodes(editor, block)
    }
  },
};

export default CustomEditor;
