function BgChanger() {
  const color = ["red", "blue", "green"];

  return (
    <>
      {color.map((color) => (
        <button key={color}>{color}</button>
      ))}
    </>
  );
}

export default BgChanger;
