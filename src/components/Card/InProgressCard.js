import React, { useEffect, useState } from 'react';
import './InProgressCard.css';
import PropTypes from 'prop-types';

const InProgressCard = ({ path,
  id, category, title, img, ingredients, alcohol, instructions }) => {
  const [isDrinkOrFood, setIsDrinkOrFood] = useState('');

  useEffect(() => {
    if (path.includes('/bebidas/:id/in-progress')) {
      setIsDrinkOrFood('Drink');
    } else { setIsDrinkOrFood('Food'); }
  }, [path]);

  const instructionsMapping = instructions.split(/,|\. | ;/g).map((string, index) => {
    if (instructions.split(/,|\. | ;/g).length !== index + 1) {
      return (
        <li key={ `instruction-${index}` }>
          {`${string.trim().charAt(0).toUpperCase()}${string.trim().slice(1)}`}
          {' '}
          ;
        </li>);
    }
    return (
      <li key={ `instruction-${index}` }>
        {`${string.trim().charAt(0).toUpperCase()}${string.trim().slice(1)}`}
        {' '}
      </li>);
  });

  const ingredientsMapping = ingredients.map((ingredient, index) => {
    if (ingredient !== '  ') {
      return (
        <div key={ `${index}-${ingredient}` }>
          <input
            id={ `id-${index}` }
            type="checkbox"
            data-testid="ingredient-step"
            value={ ingredient }
            // onChange={ ({ target }) => { console.log(target.checked); } }
          />
          <label htmlFor={ `id-${index}` }>
            {ingredient}
          </label>
        </div>
      );
    }
  });

  const renderFood = () => (
    <div
      name={ id }
      className="card-container"
      data-testid="recipe-card"
      role="button"
    >
      <h4 data-testid="recipe-title">{title}</h4>
      <span data-testid="recipe-category">{`Category => ${category}`}</span>
      <img src={ img } alt={ title } data-testid="recipe-photo" />
      <ul>
        {ingredientsMapping}
      </ul>
      <ol
        style={
          { display:
          'flex',
          flexFlow: 'column wrap',
          textAlign: 'center',
          listStylePosition: 'inside' }
        }
        data-testid="instructions"
      >
        {instructionsMapping}
        Voilá!
      </ol>
      <div>
        <button type="button" data-testid="favorite-btn">Favoritar</button>
        <button type="button" data-testid="share-btn">Compartilhar</button>
        <button type="button" data-testid="finish-recipe-btn">Finalizar</button>
      </div>
    </div>);

  const renderDrink = () => (
    <div
      name={ id }
      className="card-container"
      data-testid="recipe-card"
      role="button"
    >
      <h4 data-testid="recipe-title">{title}</h4>
      <span data-testid="recipe-category">{`Category => ${category}`}</span>
      <span>{alcohol}</span>
      <img src={ img } alt={ title } data-testid="recipe-photo" />
      <ul>
        {ingredientsMapping}
      </ul>
      <ol
        style={
          { display:
          'flex',
          flexFlow: 'column wrap',
          textAlign: 'center',
          listStylePosition: 'inside' }
        }
        data-testid="instructions"
      >
        {instructionsMapping}
        Voilá!
      </ol>
      <div>
        <button type="button" data-testid="favorite-btn">Favoritar</button>
        <button type="button" data-testid="share-btn">Compartilhar</button>
        <button type="button" data-testid="finish-recipe-btn">Finalizar</button>
      </div>
    </div>);

  return (
    <main>
      {isDrinkOrFood === 'Drink' ? renderDrink() : renderFood()}
      {console.log(ingredients)}
    </main>
  );
};

InProgressCard.propTypes = {
  path: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  alcohol: PropTypes.string,
  instructions: PropTypes.string.isRequired,
};

InProgressCard.defaultProps = {
  alcohol: PropTypes.string,
};

export default InProgressCard;
