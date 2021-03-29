import React, { useContext, useEffect, useState } from 'react';

import { Button, CardDeck, Card, Nav } from 'react-bootstrap';
import Header from '../components/Header';
import ContextRecipes from '../context/ContextRecipes';
import ShareIcon from '../images/shareIcon.svg';
import BlackHeartIcon from '../images/blackHeartIcon.svg';

const copy = require('clipboard-copy');

const ReceitasFavoritas = () => {
  const { setHeaderInfo,
    favoriteRecipes, setFavoriteRecipes,
  } = useContext(ContextRecipes);

  const [renderMSG, setRenderMSG] = useState(false);

  useEffect(() => {
    const favoriteRecipesFromLocalStorage = JSON
      .parse(localStorage.getItem('favoriteRecipes'));
    if (favoriteRecipesFromLocalStorage !== null) {
      setFavoriteRecipes(favoriteRecipesFromLocalStorage);
    }
    setHeaderInfo({
      pageTitle: 'Receitas Favoritas',
    });
  }, [setHeaderInfo, setFavoriteRecipes]);

  const filterFood = () => {
    setFavoriteRecipes(JSON.parse(localStorage.getItem('favoriteRecipes'))
      .filter((fav) => fav.type === 'comida'));
  };

  const filterDrink = () => {
    setFavoriteRecipes(JSON.parse(localStorage.getItem('favoriteRecipes'))
      .filter((fav) => fav.type === 'bebida'));
  };

  const filterAll = () => {
    setFavoriteRecipes(JSON.parse(localStorage.getItem('favoriteRecipes')));
  };

  const removerLocalStorage = (id) => {
    setFavoriteRecipes(JSON.parse(localStorage.getItem('favoriteRecipes'))
      .filter((fav) => fav.id !== id));
    localStorage.setItem(
      'favoriteRecipes', JSON.stringify(
        JSON.parse(localStorage.getItem('favoriteRecipes'))
          .filter((fav) => fav.id !== id),
      ),
    );
  };

  const msgTime = 5000;
  const copiarURL = (tipo, id) => {
    copy(`http://localhost:3000/${tipo}/${id}`);
    setRenderMSG(true);
    setTimeout(() => { setRenderMSG(false); }, msgTime);
  };
  const TAMANHO_IDEAL = 4;
  const classCardHeigth = favoriteRecipes
    .length < TAMANHO_IDEAL ? 'cardHeigth' : 'cardHeigth2';

  return (
    <section className={ `w-100 bg-dark ${classCardHeigth}` }>
      <Header />
      { favoriteRecipes.length === 0
        ? (
          <div className="cardBody">
            <h1 className="text-light">Nenhum Receita Favoritada...</h1>
            <h1>:-(</h1>
          </div>
        ) : (
          <div>
            <div className="buttonsList">
              <Button
                variant="success"
                className="categoryButton"
                type="button"
                name="options"
                id="option1"
                checked
                data-testid="filter-by-all-btn"
                onClick={ filterAll }
              >
                All
              </Button>
              <Button
                type="button"
                className="categoryButton"
                name="options"
                id="option2"
                variant="success"
                data-testid="filter-by-food-btn"
                onClick={ filterFood }
              >
                Food
              </Button>
              <Button
                type="button"
                className="categoryButton"
                name="options"
                id="option3"
                variant="success"
                data-testid="filter-by-drink-btn"
                onClick={ filterDrink }
              >
                Drinks
              </Button>
            </div>
            <CardDeck className="m-2 d-flex flex-row flex-wrap justify-content-center">
              { favoriteRecipes.map((favoriteArray, index) => (
                <Card key={ index } className="col-8 m-2 p-0 border-dark">
                  <Nav.Link href={ `http://localhost:3000/${favoriteArray.type}s/${favoriteArray.id}` } className="p-0">
                    <Card.Img
                      variant="top"
                      src={ favoriteArray.image }
                      alt="Foto do Cocktail"
                      width="130"
                      data-testid={ `${index}-horizontal-image` }
                    />
                  </Nav.Link>
                  <Card.Body className="p-0">
                    <Card.Text
                      data-testid={ `${index}-horizontal-top-text` }
                    >
                      {
                        favoriteArray.alcoholicOrNot === ''
                          ? `${favoriteArray.area} - ${favoriteArray.category}`
                          : (
                            `${favoriteArray.alcoholicOrNot} - ${favoriteArray.category}`
                          )
                      }
                    </Card.Text>
                  </Card.Body>
                  <Nav.Link
                    href={ `http://localhost:3000/${favoriteArray.type}s/${favoriteArray.id}` }
                    data-testid={ `${index}-horizontal-name` }
                  >
                    { favoriteArray.name }
                  </Nav.Link>
                  <Card.Body className="d-flex justify-content-evenly">
                    <input
                      type="image"
                      src={ ShareIcon }
                      alt="Botão Compartilhar"
                      data-testid={ `${index}-horizontal-share-btn` }
                      className="share"
                      onClick={ () => copiarURL(
                        `${favoriteArray.type}s`, favoriteArray.id,
                      ) }
                    />
                    {
                      renderMSG ? <h2>Link copiado!</h2>
                        : <h2 hidden>Link copiado!</h2>
                    }
                    <input
                      type="image"
                      src={ BlackHeartIcon }
                      alt="Botão Favoritar"
                      data-testid={ `${index}-horizontal-favorite-btn` }
                      onClick={ () => removerLocalStorage(favoriteArray.id) }
                    />
                  </Card.Body>
                </Card>
              )) }
            </CardDeck>
          </div>) }
    </section>
  );
};

export default ReceitasFavoritas;
