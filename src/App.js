import { useState } from 'react';
import { marked } from 'marked';
import './App.css';

function App() {
  const [text, setText] = useState(`
  # H1
  ## H2
  [title](https://www.example.com)
  \`code\`
  \`\`\`
  {
    "firstName": "John",
    "lastName": "Smith",
    "age": 25
  }
  \`\`\`

  1. First item
  2. Second item
  3. Third item

  > blockquote

  ![alt text](image.jpg)

  **bold text**
  `);

  marked.setOptions({
    breaks: true
  })

  return (
    <div className="App">
      <textarea
        id="editor"
        onChange={(event) => {
          setText(event.target.value);
        }}
        value={text}
      >

      </textarea>

      <div id='preview' dangerouslySetInnerHTML={{
        __html: marked(text),
      }}></div>
    </div>
  );
}

export default App;
