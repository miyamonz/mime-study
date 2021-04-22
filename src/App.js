import React, {useState} from 'react'
import './App.css';

function App() {
  const [text, setText] = useState('')
const onChangeFile = (event) => {
    event.preventDefault();
    const files = event.target.files;
    if (!files || files.length !== 1) {
      return;
    }
    const file = files[0];
  console.log(file)
  setText(file.type)
    event.target.value = '';
  };

  return (
    <div className="App">
      <header className="App-header">
        <input
          accept="application/json"
          id="contained-button-file"
          multiple
          type="file"
          onChange={onChangeFile}
        />
    type: {text}
      </header>
    </div>
  );
}

export default App;
