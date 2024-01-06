import { Editor } from "slate";
import isEmpty from "lodash/isEmpty";
import { useSlate } from "slate-react";

export default function ButtonH6() {
  const editor = useSlate();
  const tag = "h6";
  const [node]: any = Editor.nodes(editor, {
    match: (n: any) => n?.tag === tag,
  });
  const clickButton = (event: any) => {
    event.preventDefault();
    editor.setNodes(isEmpty(node) ? { tag: tag } : { tag: "span" });
  };
  return (
    <button onClick={clickButton}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-h-6"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        strokeWidth={node ? ".2rem" : ".1rem"}
        stroke="#2c3e50"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M19 14a2 2 0 1 0 0 4a2 2 0 0 0 0 -4z" />
        <path d="M21 12a2 2 0 1 0 -4 0v4" />
        <path d="M4 6v12" />
        <path d="M12 6v12" />
        <path d="M11 18h2" />
        <path d="M3 18h2" />
        <path d="M4 12h8" />
        <path d="M3 6h2" />
        <path d="M11 6h2" />
      </svg>
      ;
    </button>
  );
}
