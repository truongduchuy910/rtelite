import type { RenderCustomElementProps } from "src/types";

export default function ElementRender({
  attributes,
  children,
  element,
}: RenderCustomElementProps) {
  if (element.tag === "h1") {
    return <h1 {...attributes}>{children}</h1>;
  }

  if (element.tag === "h2") {
    return <h2 {...attributes}>{children}</h2>;
  }

  if (element.tag === "h3") {
    return <h3 {...attributes}>{children}</h3>;
  }

  if (element.tag === "h4") {
    return <h4 {...attributes}>{children}</h4>;
  }

  if (element.tag === "h5") {
    return <h5 {...attributes}>{children}</h5>;
  }

  if (element.tag === "h6") {
    return <h6 {...attributes}>{children}</h6>;
  }

  if (element.tag === "p") {
    return <p {...attributes}>{children}</p>;
  }

  if (element.children) {
    return <section {...attributes}>{children}</section>;
  }
  return <div {...attributes}>{children || ""}</div>;
}
