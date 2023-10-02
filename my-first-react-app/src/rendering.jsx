/* eslint-disable react/prop-types */
// using jsx to render list
// export default function HeroList() {
//   const hero = ["Ironman", "spiderman", "thor", "hulk"];

//   const heroList = hero.map((hero) => {
//     return <li key={hero}>{hero}</li>;
//   });

//   return (
//     <>
//       <h1>heroes :</h1>
//       <ul>
//         {/* {hero.map((hero) => {
//           return <li key={hero}>{hero}</li>;
//         })} */}
//         {heroList}
//       </ul>
//     </>
//   );
// }

//------------------------------------------------------------------------
// rendering components

export default function Fruits() {
  const fruits = ["apple", "mango", "banana", "grapes"];

  return (
    <>
      <h1>Fruits :</h1>
      <List fruits={fruits} />
    </>
  );
}

function List(props) {
  return (
    <ul>
      {props.fruits.map((fruits) => {
        return <li key={fruits}>{fruits}</li>;
      })}
    </ul>
  );
}
