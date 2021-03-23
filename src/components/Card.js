import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

const Card = ({ id, index, name, thumbnail, isFood }) => {
  const history = useHistory();
  //   console.log(history);
  //   console.log(index);
  //   console.log(name);
  //   console.log(thumbnail);
  function handleClick() {
    if (isFood) {
      history.push(`/comidas/${id}`);
    } else {
      history.push(`/bebidas/${id}`);
    }
    console.log(history);
  }
  return (
    <button
      type="button"
      onClick={ () => handleClick() }
      data-testid={ `${index}-recipe-card` }
    >
      <p data-testid={ `${index}-card-name` }>{name}</p>
      <img
        // style={ `max-width:200px;
        //     max-height:150px;
        //     width: auto;
        //     height: auto ;` }
        width="320"
        height="205"
        src={ thumbnail }
        alt="Foto da receita"
        data-testid={ `${index}-card-img` }
      />
    </button>
  );
};
Card.propTypes = {
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  isFood: PropTypes.bool.isRequired,
};

export default Card;
