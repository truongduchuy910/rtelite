import type { BaseElement, BaseText } from "slate";

interface TextNode extends BaseText {
  tag?: string;
  text: string;
}

type Node = TextNode | ElementNode;

interface ElementNode extends BaseElement {
  tag?: string;
  children: Node[];
}

declare module "slate" {
  interface CustomTypes {
    Element: ElementNode;
    Text: TextNode;
  }
}

export interface RTELiteProps {
  initialValue?: Node[];
}
