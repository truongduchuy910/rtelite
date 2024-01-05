import renderer from "react-test-renderer";
import LeafRender from "../dist/render/Leaf";

test("LeafRender", () => {
  const component = renderer.create(
    <LeafRender leaf={{ tag: "span" }}>test</LeafRender>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
