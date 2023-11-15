const person = {
  name: "Anurag",
  theme: {
    backgroundColor: "black",
    color: "pink",
  },
};

const Items = () => {
  return (
    <>
      <h1>{person.name} to do</h1>
      <ol className="test-list" style={person.theme}>
        <li>List item 1</li>
        <li>List item 2</li>
        <li>List item 3</li>
      </ol>
      <svg>
        <circle cx="25" cy="75" r="20" stroke="green" strokeWidth="2" />
      </svg>
      <form>
        <input type="text" />
      </form>
    </>
  );
};

export default Items;
