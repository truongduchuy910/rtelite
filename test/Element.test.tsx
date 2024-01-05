import renderer from "react-test-renderer";
import ElementRender from "../dist/render/Element";

test("ElementRender", () => {
  const component = renderer.create(
    <ElementRender element={{ tag: "section" }}>test</ElementRender>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
