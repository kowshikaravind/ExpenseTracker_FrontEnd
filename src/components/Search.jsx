// import React from 'react';

// function Search(props) {
//   const [name, setName] = React.useState('');
//   const filterItems = props.titles.filter((e) =>
//     e.toLowerCase().includes(name.toLowerCase())
//   );

//   return (
//     <div>
//       <input
//         type='text'
//         placeholder='Search to delete'
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <ul>
//         {filterItems.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Search;