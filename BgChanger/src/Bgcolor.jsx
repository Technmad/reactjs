import { useState } from "react";

const colors = ["red", "blue", "green"];

function Bgcolor() {
  const [color, setColor] = useState(colors[0]);

  return (
    <>
      <div className="App" style={{ color }}>
        {colors.map((color) => {
          <button type="button" key={color} onClick={setColor}>
            {color}
          </button>;
        })}
      </div>
    </>
  );
}

export default Bgcolor;
