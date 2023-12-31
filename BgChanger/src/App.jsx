import { useState } from "react";
import "./App.css";

const colors = ["olive", "green", "blue", "yellow", "purple"];

function App() {
  const [backgroundColor, setBackgroundColor] = useState(colors[0]);
  const [counter, setCounter] = useState(0);

  const onButtonClick = (color) => {
    setBackgroundColor(color);
    setCounter(counter + 1);
  };

  return (
    <>
      <div
        className="App"
        style={{
          backgroundColor,
        }}
      >
        {colors.map((color) => (
          <button
            type="button"
            key={color}
            onClick={() => onButtonClick(color)}
          >
            {color}
          </button>
        ))}
        <div>Background Color changed {counter} times</div>
      </div>
    </>
  );
}

export default App;
