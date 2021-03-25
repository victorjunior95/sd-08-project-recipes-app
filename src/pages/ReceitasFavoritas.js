import React, { useContext, useEffect, useState } from 'react';

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
    setFavoriteRecipes(JSON.parse(localStorage.getItem('favoriteRecipes')));
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

  return favoriteRecipes.length === 0
    ? (
      <section className="receitas-favoritas">
        <Header />
        <h1>Nenhum Favorito...</h1>
        <h1>:-(</h1>
      </section>
    ) : (
      <section>
        <Header />
        <div className="btn-group btn-group-toggle" data-toggle="buttons">
          <button
            className="categoryButton btn btn-success"
            type="button"
            name="options"
            id="option1"
            checked
            data-testid="filter-by-all-btn"
            onClick={ filterAll }
          >
            All
          </button>
          <button
            type="button"
            name="options"
            id="option2"
            className="categoryButton btn btn-success"
            data-testid="filter-by-food-btn"
            onClick={ filterFood }
          >
            Food
          </button>
          <button
            type="button"
            name="options"
            id="option3"
            className="categoryButton btn btn-success"
            data-testid="filter-by-drink-btn"
            onClick={ filterDrink }
          >
            Drinks
          </button>
        </div>
        {
          renderMSG ? <h2>Link copiado!</h2>
            : <h2 hidden>Link copiado!</h2>
        }
        { favoriteRecipes.map((favoriteArray, index) => (
          <div key={ index }>
            <div>
              <a href={ `http://localhost:3000/${favoriteArray.type}s/${favoriteArray.id}` }>
                <img
                  variant="top"
                  src={ favoriteArray.image }
                  alt="Foto do Cocktail"
                  width="130"
                  height="130"
                  data-testid={ `${index}-horizontal-image` }
                />
              </a>
              <div>
                <p
                  data-testid={ `${index}-horizontal-top-text` }
                >
                  {
                    favoriteArray.alcoholicOrNot === ''
                      ? `${favoriteArray.area} - ${favoriteArray.category}`
                      : (
                        `${favoriteArray.alcoholicOrNot} - ${favoriteArray.category}`
                      )
                  }
                </p>
                <a
                  href={ `http://localhost:3000/${favoriteArray.type}s/${favoriteArray.id}` }
                  data-testid={ `${index}-horizontal-name` }
                >
                  { favoriteArray.name }
                </a>
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
                <button
                  type="button"
                  onClick={ () => removerLocalStorage(favoriteArray.id) }
                >
                  <img
                    src={ BlackHeartIcon }
                    alt="Botão Favoritar"
                    data-testid={ `${index}-horizontal-favorite-btn` }
                  />
                </button>
              </div>
            </div>
          </div>
        )) }
      </section>
    );
};

export default ReceitasFavoritas;
