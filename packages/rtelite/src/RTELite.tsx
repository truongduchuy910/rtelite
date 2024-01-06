import { Fragment, useCallback, useState } from "react";
import { createEditor } from "slate";
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

interface RTELiteProps {
  initialValue?: any[];
  toolbarCN?: string;
}

export function RTELite(props: RTELiteProps) {
  const initialValue = props?.initialValue || [
    {
      children: [{ tag: "span", text: "A line of text in a paragraph." }],
    },
  ];

  const renderElement = useCallback(
    (props: RenderElementProps) => <ElementRender {...props} />,
    [],
  );

  const renderLeaf = useCallback(
    (props: RenderLeafProps) => <LeafRender {...props} />,
    [],
  );

  const [editor] = useState(() => withReact(createEditor()));

  return (
    <Fragment>
      <Slate editor={editor} initialValue={initialValue}>
        <div style={{ position: "relative" }}>
          <div
            className={props?.toolbarCN}
            style={{
              paddingTop: 5,
              paddingLeft: 7,
              paddingRight: 7,
              top: 8,
              zIndex: 11,
              position: "sticky",
            }}
          >
            <ButtonH1 />
            <ButtonH2 />
            <ButtonH3 />
            <ButtonBold />
          </div>
          <div>
            <Editable
              className="rtelite"
              renderElement={renderElement}
              renderLeaf={renderLeaf}
              spellCheck
              autoFocus
            />
            <hr />
          </div>
        </div>
      </Slate>
    </Fragment>
  );
}
