import type { RenderCustomLeafProps } from "src/types";

export default function LeafRender({
  attributes,
  children,
  leaf,
}: RenderCustomLeafProps) {
  if (leaf.text) {
    return <span {...attributes}>{children}</span>;
  }

  return <span {...attributes} children={children} />;
}
