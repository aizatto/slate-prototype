import React, {useState, useMemo} from 'react';

// Import the Slate editor factory.
import { createEditor, Node } from 'slate'

// Import the Slate components and React plugin.
import { Slate, Editable, withReact } from 'slate-react'

const MDserializerLib = require('slate-md-serializer').default;
const MDserializer = new MDserializerLib();

// const plugins = [Code({
//   highlight: true,
//   block: "code",
//   line: "code-line",
//   classNames: {
//     block: "code",
//     line: "code-line"
//   }
// })]

// const initialValue = Value.fromJSON({
//   document: {
//     nodes: [
//       {
//         object: 'block',
//         type: 'paragraph',
//         nodes: [
//           {
//             object: 'text',
//             text: 'A line of text in a paragraph.',
//           },
//         ],
//       },
//     ],
//   },
//   annotations: {},
//   decorations: {},
// });

// function handleKeyDown(event: any, editor: any, next: any) {
//   if (event.ctrlKey) {
//     switch (event.key) {
//       case 'y':
//         event.preventDefault();
//         console.log('here');
//         editor.insertCode({ code: '<h1>Heading 1</h1>', language: "html" });
//         break;
//       default:
//         return next();
//     }
//   } else {
//     return next()
//   }
// }


const Editor: React.FC<any> = () => {
  const editor = useMemo(() => withReact(createEditor()), [])

  // Keep track of state for the value of the editor.
  const [value, setValue] = useState<Node[]>([
    {
      type: 'paragraph',
      children: [{ text: 'A line of text in a paragraph.' }],
    },
  ])

  return (
    <Slate
      editor={editor}
      value={value}
      onChange={value => {
        console.log(value);
        setValue(value);
        // const markdown = MDserializer.serialize({ document: { nodes: value }});
        // console.log(markdown);
        // const markdown = value.map(node => MDserializer.renderNode(node));
        // console.log(markdown.join("\n"));
      }}>
      <Editable />
    </Slate>
  );
}

export default Editor;