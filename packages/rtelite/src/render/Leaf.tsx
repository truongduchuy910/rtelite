import type { RenderLeafProps } from "slate-react";

export default function LeafRender({
  attributes,
  children,
  leaf,
}: RenderLeafProps) {
  if (leaf.tag == "span") {
    return <span {...attributes}>{children}</span>;
  }

  return <div {...attributes}>{children}</div>;
}
