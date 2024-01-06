import { useSlate } from "slate-react";
import { Editor, Element } from "slate";

export default function ButtonBold() {
  const editor = useSlate();
  const [weight] = Array.from(
    Editor.nodes(editor, {
      match: (n) => {
        const notEditor = !Editor.isEditor(n);
        const notElement = !Element.isElement(n);
        return (
          notEditor &&
          notElement &&
          n.tag === "strong" &&
          n.weight === "font-bold"
        );
      },
    }),
  );

  const onClick = (event: any) => {
    event.preventDefault();
    const { selection } = editor;
    if (!selection) return false;

    if (weight) {
      editor.removeMark("weight");
      editor.removeMark("tag");
    } else {
      editor.addMark("weight", "font-bold");
      editor.addMark("tag", "strong");
    }
  };

  return (
    <button onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-bold"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        strokeWidth={weight ? ".2rem" : ".1rem"}
        stroke="#2c3e50"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M7 5h6a3.5 3.5 0 0 1 0 7h-6z" />
        <path d="M13 12h1a3.5 3.5 0 0 1 0 7h-7v-7" />
      </svg>
    </button>
  );
}
