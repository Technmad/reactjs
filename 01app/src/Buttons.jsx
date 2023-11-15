function ButtonList(props) {
  const buttonStyle = {
    color: props.color,
    fontSize: props.fontSize + "px",
  };

  return <button style={buttonStyle}>{props.text}</button>;
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
