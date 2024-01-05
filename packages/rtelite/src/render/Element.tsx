import type { RenderElementProps } from "slate-react";

export default function ElementRender({
  attributes,
  children,
  element,
}: RenderElementProps) {
  if (element.tag === "section") {
    return <section {...attributes}>{children}</section>;
  }
  return <div {...attributes}>{children}</div>;
}
