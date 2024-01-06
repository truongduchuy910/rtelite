import type { RenderCustomLeafProps } from "src/types";

export default function LeafRender({
  attributes,
  children,
  leaf,
}: RenderCustomLeafProps) {
  if (leaf.tag === "strong") {
    return <strong {...attributes}>{children}</strong>;
  }

  return <span {...attributes} children={children} />;
}
