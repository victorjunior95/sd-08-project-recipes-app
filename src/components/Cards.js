import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function Cards() {
  const {
    createCards,
    apiResponse,
    type,
  } = useContext(MyContext);

  return (
    apiResponse[type.item].map((item, index) => {
      console.log(type.palavra);

      if (index <= 11) {
        return (
          <div
          key={index}
          data-testid={`${index}-recipe-card`}
        >
          <h3
            data-testid={`${index}-card-name`}
          >{item[`str${type.palavra}`]}</h3>
          <img
            data-testid={`${index}-card-img`}
            src={item[`str${type.palavra}Thumb`]}
          ></img>
        </div>
        );
      } else {
        return null;
      }
    })
  );
}

export default Cards;
