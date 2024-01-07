import type { RenderCustomElementProps } from "src/types";
import { clsx } from "clsx";

const base = {
  heading:
    "font-heading my-4 subpixel-antialiased not-italic font-normal tracking-wide line-clamp-3 leading-snug font-heading",
};

export default function ElementRender({
  attributes,
  children,
  element,
}: RenderCustomElementProps) {
  if (element.tag === "h1") {
    return (
      <h1 {...attributes} className={clsx(base.heading, "text-5xl")}>
        {children}
      </h1>
    );
  }

  if (element.tag === "h2") {
    return (
      <h2 {...attributes} className={clsx(base.heading, "text-4xl")}>
        {children}
      </h2>
    );
  }

  if (element.tag === "h3") {
    return (
      <h3 {...attributes} className={clsx(base.heading, "text-3xl")}>
        {children}
      </h3>
    );
  }

  if (element.tag === "h4") {
    return (
      <h4 {...attributes} className={clsx(base.heading, "text-2xl")}>
        {children}
      </h4>
    );
  }

  if (element.tag === "h5") {
    return (
      <h5 {...attributes} className={clsx(base.heading, "text-xl")}>
        {children}
      </h5>
    );
  }

  if (element.tag === "h6") {
    return (
      <h6 {...attributes} className={clsx(base.heading, "text-lg")}>
        {children}
      </h6>
    );
  }

  if (element.tag === "p") {
    return <p {...attributes}>{children}</p>;
  }

  if (element.tag === "strong") {
    return (
      <strong {...attributes} className={clsx(element.weight)}>
        {children}
      </strong>
    );
  }

  if (element.tag === "em") {
    return (
      <em {...attributes} className={clsx(element.style)}>
        {children}
      </em>
    );
  }

  if (element.tag === "blockquote") {
    return (
      <blockquote {...attributes} className="mb-4">
        <svg
          className="w-6 h-6 text-gray-400 mt-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 18 14"
        >
          <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
        </svg>
        {children}
      </blockquote>
    );
  }

  if (element.tag === "pre") {
    return (
      <pre {...attributes} className="flex flex-col">
        {children}
      </pre>
    );
  }

  return <div {...attributes}>{children}</div>;
}
