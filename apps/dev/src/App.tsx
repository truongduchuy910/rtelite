import { Fragment } from "react";
import "./App.css";
import { RTELite } from "rtelite";
import { MdRoot } from "rtebind";

function App() {
  const md = `
To create a heading, add one to six # symbols before your heading text. The number of # you use will determine the hierarchy level and typeface size of the heading.

# A first-level heading
## A second-level heading
### A third-level heading
#### 4. Heading
##### 5. Heading
###### 6. Heading
`;
  const root = new MdRoot(md);
  const value = root.toDescendants();
  return (
    <Fragment>
      <RTELite />
      <RTELite initialValue={value} />
    </Fragment>
  );
}

export default App;
