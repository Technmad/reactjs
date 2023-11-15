/* eslint-disable react/prop-types */
function ListItems(props) {
  //   if (!props.animal) {
  //     return <div>Loading...</div>;
  //   }
  //   if (props.animal.length === 0) {
  //     return <div>There are no animals in the list!</div>;
  //   }
  //   return (
  //     <ul>
  //       {props.animal.map((animal) => {
  //         return <li key={animal}>{animal}</li>;
  //       })}
  //     </ul>
  //   );

  //   ------------------------------------

  return (
    <>
      {!props.animal && <div> loading...</div>}
      {props.animal && props.animal.length > 0 && (
        <ul>
          {props.animal.map((animal) => {
            return <li key={animal}>{animal}</li>;
          })}
        </ul>
      )}
      {props.animal && props.animals.length === 0 && (
        <div>There are no animals in the list!</div>
      )}
    </>
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
