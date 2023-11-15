/* eslint-disable react/prop-types */
function ListItems(props) {
  return (
    <ul>
      {props.animal.map((animal) => {
        return animal.startsWith("L") ? <li key={animal}>{animal}</li> : null;
      })}
    </ul>
  );
}

const List = () => {
  const animal = ["Lions", "Cow", "Snake", "Lizard"];

  return (
    <div>
      <h1>Animals: </h1>
      <ListItems animal={animal} />
    </div>
  );
};

export default List;
