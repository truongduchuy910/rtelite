import clsx from "clsx";
import type { RenderCustomLeafProps } from "src/types";
export default function LeafRender({
  attributes,
  children,
  leaf,
}: RenderCustomLeafProps) {
  if (leaf.tag === "code") {
    return <code {...attributes}>{children}</code>;
  }

  return (
    <span {...attributes} className={clsx(leaf.weight, leaf.style)}>
      {children}
    </span>
  );
}
