import type { Nodes, Root, RootContent } from "mdast";
import type { Descendant } from "slate";
import type { CustomNode } from "rtelite";

import { remark } from "remark";

export class MdRoot implements Root {
  type: "root";
  children: RootContent[];

  constructor(content: string) {
    const root: Nodes = remark().parse(content);
    this.type = root.type;
    this.children = root.children;
  }

  static toDescendant(node: RootContent): CustomNode {
    /**
     * Leaf node
     */
    switch (node.type) {
      case "inlineCode":
        return {
          /* inline code */
          tag: "code",
          text: node.value,
        };

      case "code":
        const lines = node.value.split("\n");
        return {
          /* block code */
          tag: "blockquote",
          children: lines.map((text) => ({
            /* line code */
            tag: "pre",
            children: [{ tag: "code", text }],
          })),
        };

      case "text":
        return {
          text: node.value,
        };

      case "html":
        return {
          text: node.value,
        };
    }

    const children = MdRoot.entries((node as any).children || []);
    if (!children?.length) {
      throw new Error(`${node.type} chilrend is required.`);
    }

    /**
     * Element node
     */
    switch (node.type) {
      case "blockquote":
        return { tag: "blockquote", children };

      case "paragraph":
        return { tag: "p", children };

      case "strong":
        return { tag: "strong", weight: "font-bold", children };

      case "emphasis":
        return { tag: "em", style: "italic", children };

      case "heading":
        return { tag: `h${node.depth}`, children };

      case "link":
        break;

      case "listItem":
        break;

      case "list":
        break;
    }
    console.error(node);
    throw new Error(`${node.type} is not implement to bind.`);
  }

  static text(node: RootContent[]) {
    const [first] = node;
    if (node.length === 1 && first.type === "text") return first.value;
  }

  static entries(node: RootContent[]) {
    return node?.map(MdRoot.toDescendant).filter((i: any) => !!i);
  }

  toDescendants(): Descendant[] {
    const descendants = MdRoot.entries(this.children);
    return [{ children: descendants }];
  }
}
