Testing out slate with TypeScript

Demo:

- https://aizatto.github.io/slate-prototype

URLs:

- https://docs.slatejs.org/
- https://docs.slatejs.org/walkthroughs/installing-slate
- https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/slate/index.d.ts
- http://npmjs.com/package/slate
- http://npmjs.com/package/slate-react
- http://npmjs.com/package/@types/slate
- http://npmjs.com/package/@types/slate-react
- https://github.com/ianstormtaylor/slate/blob/master/docs/general/plugins.md
- https://github.com/netlify/slate-markdown-serializer
- https://www.npmjs.com/package/slate-md-serializer
- slate-md-serializer
  - https://github.com/tommoor/slate-md-serializer
  - https://www.npmjs.com/package/slate-md-plugin
  - seems to be having issues reading the Value
- https://github.com/outline/rich-markdown-editor

Code Highlighting
- https://github.com/ianstormtaylor/slate/blob/master/examples/code-highlighting/index.js
- https://www.slatejs.org/#/code-highlighting

```sh
yarn add slate slate-react immutable slate-md-serializer
```

I need to test:

- Code
- Markdown
- Keyboard Shortcuts

Cons of slate:

- No TypeScript support
- Can't use "import ... from" because TypeScript expects types
- Plugins aren't mature, so I'll have to probably write my own...