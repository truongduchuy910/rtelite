# RTELite

Highly customisable rich text editor

### Why Slate?

Why create Slate? Well... _(Beware: this section has a few of
[my](https://github.com/ianstormtaylor) opinions!)_

Before creating Slate, I tried a lot of the other rich text libraries out
there—[**Draft.js**](https://facebook.github.io/draft-js/),
[**Prosemirror**](http://prosemirror.net/), [**Quill**](http://quilljs.com/),
etc. What I found was that while getting simple examples to work was easy
enough, once you started trying to build something like
[Medium](https://medium.com/), [Dropbox Paper](https://www.dropbox.com/paper) or
[Google Docs](https://www.google.com/docs/about/), you ran into deeper issues...

- **The editor's "schema" was hardcoded and hard to customize.** Things like
  bold and italic were supported out of the box, but what about comments, or
  embeds, or even more domain-specific needs?

- **Transforming the documents programmatically was very convoluted.** Writing
  as a user may have worked, but making programmatic changes, which is critical
  for building advanced behaviors, was needlessly complex.

- **Serializing to HTML, Markdown, etc. seemed like an afterthought.** Simple
  things like transforming a document to HTML or Markdown involved writing lots
  of boilerplate code, for what seemed like very common use cases.

- **Re-inventing the view layer seemed inefficient and limiting.** Most editors
  rolled their own views, instead of using existing technologies like React, so
  you have to learn a whole new system with new "gotchas".

- **Collaborative editing wasn't designed for in advance.** Often the editor's
  internal representation of data made it impossible to use to for a realtime,
  collaborative editing use case without basically rewriting the editor.

- **The repositories were monolithic, not small and reusable.** The code bases
  for many of the editors often didn't expose the internal tooling that could
  have been re-used by developers, leading to having to reinvent the wheel.

- **Building complex, nested documents was impossible.** Many editors were
  designed around simplistic "flat" documents, making things like tables, embeds
  and captions difficult to reason about and sometimes impossible.

Of course not every editor exhibits all of these issues, but if you've tried
using another editor you might have run into similar problems. To get around the
limitations of their API's and achieve the user experience you're after, you
have to resort to very hacky things. And some experiences are just plain
impossible to achieve.

If that sounds familiar, you might like Slate.

Which brings me to how Slate solves all of that...
