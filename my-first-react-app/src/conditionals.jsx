/* eslint-disable react/prop-types */
// using if/else
// export default function ConditionalList(props) {
//   if (!props.fruits) {
//     return <div>Loading...</div>;
//   }

//   if (props.fruits.length === 0) {
//     return <div>There is no fruits in list!</div>;
//   }

//   return (
//     <ul>
//       {props.fruits.map((fruits) => {
//         return <li key={fruits}>{fruits}</li>;
//       })}
//     </ul>
//   );
// }

//-----------------------------------------

// using ternary operator
// function ConditionalList(props) {
//   return (
//     <>
//       {!props.fruits ? (
//         <div>Loading...</div>
//       ) : props.fruits.length === 0 ? (
//         <div>There is no fruits in list!</div>
//       ) : (
//         <ul>
//           {props.fruits.map((fruits) => {
//             return <li key={fruits}>{fruits}</li>;
//           })}
//         </ul>
//       )}
//     </>
//   );
// }

//--------------------------------------

// using && operator
function ConditionalList(props) {
  return (
    <>
      {!props.fruits && <div>Loading...</div>}
      {props.fruits && props.fruits.length === 0 && (
        <div>There is no fruits in list!</div>
      )}
      {props.fruits && props.fruits.length > 0 && (
        <ul>
          {props.fruits.map((fruits) => {
            return <li key={fruits}>{fruits}</li>;
          })}
        </ul>
      )}
    </>
  );
}
export default ConditionalList;
