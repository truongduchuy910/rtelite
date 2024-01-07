import { Fragment, useCallback, useMemo, useState } from "react";
import { createEditor, type Descendant } from "slate";
import {
  Editable,
  type RenderElementProps,
  type RenderLeafProps,
  Slate,
  withReact,
} from "slate-react";
import ElementRender from "./render/Element";
import LeafRender from "./render/Leaf";
import ButtonBold from "./toolbar/Bold";
import ButtonH1 from "./toolbar/H1";
import ButtonH2 from "./toolbar/H2";
import ButtonH3 from "./toolbar/H3";

import ButtonH4 from "./toolbar/H4";
import ButtonH5 from "./toolbar/H5";
import ButtonH6 from "./toolbar/H6";
import ButtonItalic from "./toolbar/Italic";

/**
 * ICON
 * https://tablericons.com/
 */
interface RTELiteProps {
  initialValue?: any[];
  localStorageKey?: string;
  toolbarClassName?: string;
  onAstChange?: (value: Descendant[]) => void;
}

export function RTELite(props: RTELiteProps) {
  // const initialValue = props?.initialValue || [
  //   {
  //     children: [{ tag: "span", text: "A line of text in a paragraph." }],
  //   },
  // ];

  const renderElement = useCallback(
    (props: RenderElementProps) => <ElementRender {...props} />,
    [],
  );

  const renderLeaf = useCallback(
    (props: RenderLeafProps) => <LeafRender {...props} />,
    [],
  );

  const [editor] = useState(() => withReact(createEditor()));
  const localStorageKey = props.localStorageKey || "rte-content";

  const initialValue = useMemo(() => {
    const content = localStorage.getItem(localStorageKey);
    return content
      ? JSON.parse(content)
      : [
          {
            tag: "p",
            children: [{ text: "A line of text in a paragraph." }],
          },
        ];
  }, []);

  const onChange = (value: Descendant[]) => {
    const isAstChange = editor.operations.some(
      (op) => "set_selection" !== op.type,
    );
    if (!isAstChange) return;

    const content = JSON.stringify(value);
    localStorage.setItem(localStorageKey, content);
    if (typeof props?.onAstChange === "function") props.onAstChange(value);
  };
  return (
    <Fragment>
      <Slate editor={editor} initialValue={initialValue} onChange={onChange}>
        <div
          className={
            props?.toolbarClassName ||
            "sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 bg-white/95 supports-backdrop-blur:bg-white/60"
          }
        >
          <div className="py-2 border-b border-slate-900/10 lg:px-8 lg:border-0 mx-4 lg:mx-0">
            <ButtonBold />
            <ButtonItalic />
            <ButtonH1 />
            <ButtonH2 />
            <ButtonH3 />
          </div>
        </div>
        <Editable
          className="outline-none"
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          spellCheck
          autoFocus
        />
      </Slate>
    </Fragment>
  );
}
