/* eslint-disable react/prop-types */
function ButtonList({ text, color, fontSize }) {
  const buttonStyle = {
    color: color,
    fontSize: fontSize + "px",
  };

  return <button style={buttonStyle}>{text}</button>;
}

const Buttons = () => {
  return (
    <div>
      <ButtonList text="Click Me!" color="blue" fontSize={12} />
      <ButtonList text="Don't Click Me!" color="red" fontSize={15} />
      <ButtonList text="Click Me!" color="green" fontSize={20} />
    </div>
  );
};

export default Buttons;
