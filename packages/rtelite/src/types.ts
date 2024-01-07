import type { BaseEditor, BaseElement, BaseText } from "slate";
import type { HistoryEditor } from "slate-history";
import type {
  ReactEditor,
  RenderElementProps,
  RenderLeafProps,
} from "slate-react";

export type Format = "paragraph" | "block-quote" | "list-item";
export type Align = "left" | "center" | "right" | "justify";

/**
 * Text decoration base on tailwindcss
 */
type Decoration = {
  /* https://tailwindcss.com/docs/text-decoration */
  type: "underline" | "overline" | "line-through" | "no-underline";
  /* https://tailwindcss.com/docs/text-decoration-style */
  style: "decoration-solid" | "decoration-dotted";
  /* https://tailwindcss.com/docs/text-decoration-thickness */
  thickness: "decoration-auto" | "decoration-from-font" | "decoration-1";
};

/**
 * Typography base on tailwindcss
 */
class Typography {
  /* https://tailwindcss.com/docs/text-decoration */
  decoration?: Decoration;

  /* https://tailwindcss.com/docs/font-style */
  style?: "italic" | "not-italic";

  /* https://tailwindcss.com/docs/font-weight */
  weight?: "font-normal" | "font-bold";

  /* https://tailwindcss.com/docs/vertical-align */
  align?: "align-left" | "align-center" | "align-right" | "align-justify";

  /* https://tailwindcss.com/docs/text-underline-offset */
  /* https://tailwindcss.com/docs/text-color */
  /* https://tailwindcss.com/docs/text-transform */
  /* https://tailwindcss.com/docs/text-overflow */
  /* https://tailwindcss.com/docs/text-wrap */
  /* https://tailwindcss.com/docs/text-indent */
  /* https://tailwindcss.com/docs/whitespace */
  /* https://tailwindcss.com/docs/word-break */
}

/* https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax */
type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type StyleTag = "strong" | "em" | "del" | "sub" | "sup" | "u";
export interface CustomText extends Typography, BaseText {
  tag?: StyleTag | "span" | "code" | "pre";
  text: string;
}

export interface CustomElement extends Typography, BaseElement {
  /* HTML tag */
  tag?: HeadingTag | "p" | "blockquote" | StyleTag | "html" | "pre";
  children: Array<CustomText | CustomElement>;
}

export type CustomNode = CustomText | CustomElement;

export interface RenderCustomElementProps extends RenderElementProps {
  element: CustomElement;
}

export interface RenderCustomLeafProps extends RenderLeafProps {
  leaf: CustomText;
}

declare module "slate" {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor & HistoryEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}
