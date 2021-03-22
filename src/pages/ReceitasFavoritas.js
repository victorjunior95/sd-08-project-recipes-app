import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

// Aqui será importado o Array de Comidas Favoritas
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

// Esse objeto simula um array de comidas favoritas que provavelmente virá do context
const favoriteRecipes = [
  {
    id: '52771',
    type: 'comida',
    area: 'Italian',
    category: 'Vegetarian',
    alcoholicOrNot: '',
    name: 'Spicy Arrabiata Penne',
    image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
  },
  {
    id: '178319',
    type: 'bebida',
    area: '',
    category: 'Cocktail',
    alcoholicOrNot: 'Alcoholic',
    name: 'Aquamarine',
    image: 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg',
  },
];

const ReceitasFavoritas = () => (
  <section className="w-100">
    <h1>Página Receitas Favoritas</h1>
    { favoriteRecipes.map((favoriteArray, index) => (
      <div key={ index }>
        <Card style={ { width: '18rem' } }>
          <Card.Img
            variant="top"
            src={ favoriteArray.image }
            alt="Foto do Cocktail"
            width="150"
            height="150"
            data-testid={ `${index}-horizontal-image` }
          />
          <Card.Body>
            <img
              src={ shareIcon }
              alt="Botão Compartilhar"
              data-testid={ `${index}-horizontal-share-btn` }
            />
            <img
              src={ blackHeartIcon }
              alt="Baotão Favoritar"
              data-testid={ `${index}-horizontal-favorite-btn` }
            />
            <Card.Title
              data-testid={ `${index}-horizontal-name` }
            >
              { favoriteArray.name }
            </Card.Title>
            <Card.Text>
              Essa é Top
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>{ `ID: ${favoriteArray.id}` }</ListGroupItem>
            {/* <ListGroupItem>
              {
                favoriteArray.alcoholicOrNot === ''
                  ? 'Produto não alcólico' : <span>{ favoriteArray.alcoholicOrNot }</span>
              }
            </ListGroupItem> */}
            <ListGroupItem>
              <span
                data-testid={ `${index}-horizontal-top-text` }
              >
                {
                  favoriteArray.alcoholicOrNot === ''
                    ? `${favoriteArray.area} - ${favoriteArray.category}`
                    : (
                      <span>
                        { `${favoriteArray.alcoholicOrNot} - ${favoriteArray.category}` }
                      </span>
                    )
                }
              </span>
            </ListGroupItem>
            <ListGroupItem>{ `Tipo: ${favoriteArray.type}` }</ListGroupItem>
          </ListGroup>
        </Card>
      </div>
    )) }
  </section>
);

export default ReceitasFavoritas;
