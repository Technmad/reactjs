/* eslint-disable react/prop-types */
function ListItems(props) {
  return <li>{props.animal}</li>;
}

const List = () => {
  const animal = ["Lions", "Cow", "Snake", "Lizard"];

  return (
    <div>
      <h1>Animals: </h1>
      <ul>
        {animal.map((animal) => {
          return <ListItems key={animal} animal={animal} />;
        })}
      </ul>
    </div>
  );
};

export default List;
