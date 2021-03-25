import React, { useContext, useEffect, useState } from 'react';
// import { Card } from 'react-bootstrap';

import Header from '../components/Header';
import ContextRecipes from '../context/ContextRecipes';
import ShareIcon from '../images/shareIcon.svg';
import BlackHeartIcon from '../images/blackHeartIcon.svg';

const copy = require('clipboard-copy');

const ReceitasFavoritas = () => {
  const { favoriteRecipes,
    setHeaderInfo,
    setFavoriteRecipes } = useContext(ContextRecipes);

  const [renderMSG, setRenderMSG] = useState(false);

  useEffect(() => {
    setFavoriteRecipes(JSON.parse(localStorage.getItem('favoriteRecipes')));
    setHeaderInfo({
      pageTitle: 'Receitas Favoritas',
    });
  }, [setFavoriteRecipes, setHeaderInfo]);

  const removerLocalStorage = (id) => {
    setFavoriteRecipes(favoriteRecipes.filter((fav) => fav.id !== id));
    localStorage.setItem(
      'favoriteRecipes', JSON.stringify(favoriteRecipes.filter((fav) => fav.id !== id)),
    );
  };

  const msgTime = 5000;
  const copiarURL = (tipo, id) => {
    copy(`http://localhost:3000/${tipo}/${id}`);
    // alert('Link copiado!');
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
            className="btn btn-secondary active"
            type="button"
            name="options"
            id="option1"
            checked
            data-testid="filter-by-all-btn"
          >
            All
          </button>
          <button
            type="button"
            name="options"
            id="option2"
            className="btn btn-secondary"
            data-testid="filter-by-food-btn"
          >
            Food
          </button>
          <button
            type="button"
            name="options"
            id="option3"
            className="btn btn-secondary"
            data-testid="filter-by-drink-btn"
          >
            Drinks
          </button>
        </div>
        {
          renderMSG ? <span>Link copiado!</span>
            : <span hidden>Link copiado!</span>
        }
        { favoriteRecipes.map((favoriteArray, index) => (
          <div key={ index }>
            <div>
              <img
                variant="top"
                src={ favoriteArray.image }
                alt="Foto do Cocktail"
                width="130"
                height="130"
                data-testid={ `${index}-horizontal-image` }
              />
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
                <p
                  data-testid={ `${index}-horizontal-name` }
                >
                  { favoriteArray.name }
                </p>
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
