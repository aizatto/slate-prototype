import React, {useState} from 'react';
const Code = require("@convertkit/slate-code").default;

const {Editor: SlateEditor} = require('slate-react');
const { Value } = require('slate');
const MDserializer = require('slate-md-serializer').default;

const plugins = [Code({
  highlight: true,
  block: "code",
  line: "code-line",
  classNames: {
    block: "code",
    line: "code-line"
  }
})]

const initialValue = Value.fromJSON({
  document: {
    nodes: [
      {
        object: 'block',
        type: 'paragraph',
        nodes: [
          {
            object: 'text',
            text: 'A line of text in a paragraph.',
          },
        ],
      },
    ],
  },
  annotations: {},
  decorations: {},
});

function handleKeyDown(event: any, editor: any, next: any) {
  if (event.ctrlKey) {
    switch (event.key) {
      case 'y':
        event.preventDefault();
        console.log('here');
        editor.insertCode({ code: '<h1>Heading 1</h1>', language: "html" });
        break;
      default:
        return next();
    }
  } else {
    return next()
  }
}

const Editor: React.FC<any> = () => {
  const [value, setValue] = useState(initialValue);
  
  console.log(value);
  console.log(value.toJSON());
  /*
  const md = new MDserializer();


  console.log(new MDserializer().serialize(value));
  */

  return (
    <SlateEditor
      plugins={plugins}
      value={value}
      onChange={({ value: newValue }: any) => setValue(newValue)}
      onKeyDown={handleKeyDown}
    />
  );
}

export default Editor;