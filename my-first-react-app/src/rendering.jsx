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
import ConditionalList from "./conditionals";

export default function Fruits() {
  const fruits = ["apple", "mango", "banana", "grapes"];

  return (
    <>
      <h1>Fruits :</h1>
      <List fruits={fruits} />
      <ConditionalList fruits={fruits} />
    </>
  );
}

function List(props) {
  return (
    <ul>
      {/* using ternary operator
       
      {props.fruits.map((fruits) => {
        return fruits.startsWith("g") ? <li key={fruits}>{fruits}</li> : null;
      })} */}

      {
        // && operator
        props.fruits.map((fruits) => {
          return fruits.startsWith("g") && <li key={fruits}>{fruits}</li>;
        })
      }
    </ul>
  );
}
