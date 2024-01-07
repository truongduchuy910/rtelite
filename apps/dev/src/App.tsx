import { Fragment, useEffect } from "react";
import { RTELite } from "rtelite";
import { MdRoot } from "rtebind";

function App() {
  const md = `
Some basic Git commands are:

\`\`\`js
    <Fragment>
      <div style={{ maxWidth: 600, margin: "auto" }}>
        <RTELite
          onAstChange={(value) => {
            console.log(value);
          }}
        />
      </div>
    </Fragment>
\`\`\`

some text

Use \`git status\` to list all new or modified files that haven't yet been committed.
Fusce tempus augue eu ante elementum, quis consectetur leo placerat. Ut eget erat eget odio porttitor imperdiet. Nunc condimentum tortor in vehicula finibus. Nunc sit amet enim quis tellus rutrum feugiat. Integer feugiat mollis dolor, vel varius odio ornare et. Etiam aliquam viverra leo nec finibus. Ut eu mauris sit amet nibh ultrices porta nec ut elit. Aenean dapibus ultricies nulla, id porttitor nibh luctus ut. Cras eu dui eu quam tincidunt dapibus nec vel arcu. Proin ac faucibus nulla.
`;

  const root = new MdRoot(md);
  const value = root.toDescendants();
  useEffect(() => {
    localStorage.setItem("rte-content", JSON.stringify(value));
  }, [value]);
  return (
    <Fragment>
      <div style={{ maxWidth: 600, margin: "auto" }}>
        <RTELite
          onAstChange={(value) => {
            console.log(value);
          }}
        />
      </div>
    </Fragment>
  );
}

export default App;
