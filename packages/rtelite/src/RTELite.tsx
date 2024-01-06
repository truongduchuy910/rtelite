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

interface RTELiteProps {
  initialValue?: any[];
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
      <hr />
      <Slate editor={editor} initialValue={initialValue}>
        <Editable
          className="rtelite"
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          spellCheck
          autoFocus
        />
      </Slate>
      <hr />
    </Fragment>
  );
}
