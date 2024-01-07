import { useSlate } from "slate-react";
import { Editor, Element } from "slate";

export default function ButtonItalic() {
  const editor = useSlate();
  const [style] = Array.from(
    Editor.nodes(editor, {
      match: (n) => {
        const notEditor = !Editor.isEditor(n);
        const notElement = !Element.isElement(n);
        return (
          notEditor && notElement && n.tag === "em" && n.style === "italic"
        );
      },
    }),
  );

  const onClick = (event: any) => {
    event.preventDefault();
    const { selection } = editor;
    if (!selection) return false;

    if (style) {
      editor.removeMark("style");
      editor.removeMark("tag");
    } else {
      editor.addMark("style", "italic");
      editor.addMark("tag", "em");
    }
  };

  return (
    <button onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-italic"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        strokeWidth={style ? ".2rem" : ".1rem"}
        stroke="#2c3e50"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M11 5l6 0" />
        <path d="M7 19l6 0" />
        <path d="M14 5l-4 14" />
      </svg>
    </button>
  );
}
