/* eslint-disable react/prop-types */
function ButtonList({
  text = "Click Me!",
  color = "blue",
  fontSize = 12,
  handleClick,
}) {
  const buttonStyle = {
    color: color,
    fontSize: fontSize + "px",
  };

  return (
    <button onClick={handleClick} style={buttonStyle}>
      {text}
    </button>
  );
}

const Buttons = () => {
  const handleButtonClick = () => {
    window.location.href = "https://www.google.com";
  };

  return (
    <div>
      <ButtonList handleClick={handleButtonClick} />
      <ButtonList text="Don't Click Me!" color="red" fontSize={15} />
      <ButtonList text="Click Me!" color="green" fontSize={20} />
    </div>
  );
};

export default Buttons;
