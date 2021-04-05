// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import shareIcon from '../../images/shareIcon.svg';

// const THREE_SECONDS = 3000;
// const copy = require('clipboard-copy');

// const DoneCard = ({ recipe }) => {
//   const [message, setMessage] = useState(false);
//   const [timeID, setTimeId] = useState(null);
//   const {
//     image,
//     name,
//     area,
//     category,
//     alcoholicOrNot,
//     type,
//     id,
//     doneDate,
//     tags,
//   } = recipe;

//   useEffect(() => {
//     if (message === true) {
//       setTimeId(setTimeout(setMessage, THREE_SECONDS, false));
//     }
//   }, [message, setMessage]);

//   useEffect(() => {
//     if (timeID !== null) return () => clearTimeout(timeID);
//   });

//   const handleShare = async () => {
//     copy(`http://localhost:3000/${type}s/${id}`);
//     setMessage(true);
//   };

//   return (
//     <div>
//       {
//         message
//           ? (
//             <div className="message" style={ { display: message ? 'flex' : 'none' } }>
//               <p>Link copiado!</p>
//             </div>
//           ) : null
//       }
//       <Link to="comidas/id} ">
//         <div>
//           <img
//             src={ image }
//             alt={ `${type} ${name}` }
//             data-testid={ `${index}-horizontal-image` }
//           />
//         </div>
//       </Link>
//       <div>
//         <Link to="comidas/id ">
//           <h2 data-testid={ `${index}-horizontal-name` }>{ name }</h2>
//         </Link>
//         <p
//           data-testid={ `${index}-horizontal-top-text` }
//         >
//           {
//             type === 'comida' ? `${area} - ${category}` : alcoholicOrNot
//           }
//         </p>
//         <div>
//           <button type="button" onClick={ handleShare }>
//             <img
//               data-testid={ `${index}-horizontal-share-btn` }
//               src={ shareIcon }
//               alt="share button"
//             />
//           </button>
//         </div>
//         <div>
//           <p data-testid={ `${index}-horizontal-done-date` }>{doneDate}</p>
//         </div>
//         <div>
//           {tags.map(
//             (tag) => (
//               <span
//                 data-testid={ `${index}-${tag}-horizontal-tag` }
//                 key={ tag }
//               >
//                 { tag }
//               </span>
//             ),
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// DoneCard.propTypes = {
//   // index: PropTypes.number.isRequired,
//   recipe: PropTypes.objectOf(PropTypes.any).isRequired,
// };

// export default DoneCard;
