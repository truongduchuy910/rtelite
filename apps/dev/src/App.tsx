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

**This is bold text**

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tristique pulvinar neque at pulvinar. Curabitur pretium euismod cursus. Interdum et malesuada fames ac ante ipsum primis in faucibus. In finibus metus varius, congue magna at, faucibus felis. Suspendisse nisl tellus, cursus at ornare id, convallis id diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus lectus elit, efficitur in pellentesque ut, rhoncus sit amet lectus. Cras ornare euismod tellus quis venenatis. Vestibulum iaculis odio eget arcu convallis porttitor.

Etiam purus quam, pulvinar nec aliquam et, ultricies ut risus. Aliquam varius facilisis placerat. Nullam ultricies volutpat ante a suscipit. Proin at tempus ligula. Fusce dignissim elit ac consectetur aliquam. In tristique, risus sit amet facilisis molestie, odio magna viverra nisi, nec gravida nibh libero ut lectus. Phasellus nec mattis massa, in pretium nibh.

Ut molestie vehicula neque, id luctus nulla pulvinar sit amet. Etiam sollicitudin, mi vel fringilla commodo, risus erat sagittis odio, eu efficitur velit mauris eget lacus. Sed massa ipsum, scelerisque ac blandit non, pretium a est. Nulla quis fringilla urna, vitae tincidunt lacus. Praesent ac placerat tortor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc nec efficitur nisi, non sagittis odio. Ut suscipit, massa id suscipit consectetur, justo odio accumsan eros, non gravida mi lorem eget lectus.

Maecenas finibus, ex id consequat condimentum, libero tortor molestie leo, ut tempus nisl metus eget augue. Maecenas pharetra at odio non lacinia. Curabitur porta risus magna, id mattis nisl hendrerit et. Duis auctor, nisi quis ullamcorper volutpat, massa mi ornare neque, id vulputate nisi risus a eros. Donec a urna risus. Sed laoreet est id mi eleifend, vitae laoreet sapien dapibus. Nulla nibh sapien, feugiat sed purus ac, imperdiet commodo nisi. Nam convallis metus vestibulum consectetur scelerisque. Mauris gravida velit vitae metus venenatis facilisis. Duis sit amet nisi at libero molestie fringilla a nec magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;

Fusce tempus augue eu ante elementum, quis consectetur leo placerat. Ut eget erat eget odio porttitor imperdiet. Nunc condimentum tortor in vehicula finibus. Nunc sit amet enim quis tellus rutrum feugiat. Integer feugiat mollis dolor, vel varius odio ornare et. Etiam aliquam viverra leo nec finibus. Ut eu mauris sit amet nibh ultrices porta nec ut elit. Aenean dapibus ultricies nulla, id porttitor nibh luctus ut. Cras eu dui eu quam tincidunt dapibus nec vel arcu. Proin ac faucibus nulla.
`;

  const _todo = `
_This text is italicized_
~~This was mistaken text~~
**This text is _extremely_ important**
***All this text is important***
This is a <sub>subscript</sub> text
This is a <sup>superscript</sup> text
`;

  const root = new MdRoot(md);
  const value = root.toDescendants();
  return (
    <Fragment>
      <div style={{ maxWidth: 600, margin: "auto" }}>
        <RTELite initialValue={value} />
      </div>
    </Fragment>
  );
}

export default App;
