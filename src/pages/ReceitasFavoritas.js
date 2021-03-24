import React, { useEffect, useState } from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const ReceitasFavoritas = () => {
  // Jogando o Array de Favoritos no State
  const [favoritesArray, setFavoritesArray] = useState([]);
  useEffect(() => {
    setFavoritesArray([
      ...favoriteRecipes,
    ]);
  }, []);

  // Logica para copiar a URL
  const [renderMSG, setRenderMSG] = useState(false);
  const msgTime = 10000;
  const copiarURL = (id) => {
    copy(`http://localhost:3000/comidas/${id}`);
    setRenderMSG(true);
    setTimeout(() => { setRenderMSG(false); }, msgTime);
  };

  // Logica para remover do LocalStorage
  const removerLocalStorage = (id) => {
    console.log(favoritesArray.filter((fav) => fav.id !== id));
    setFavoritesArray(favoritesArray.filter((fav) => fav.id !== id));
    localStorage.setItem(
      'favoriteRecipes', JSON.stringify(favoritesArray.filter((fav) => fav.id !== id)),
    );
  };

  return /* favoritesArray === 0 ? <h1>Nenhum Favorito...</h1> : */ (
    <section className="receitas-favoritas">
      <h1>Página Receitas Favoritas</h1>
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
      { favoritesArray.map((favoriteArray, index) => (
        <div key={ index } className="cardBackGround">
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
              <div className="share-favorite">
                <input
                  type="image"
                  src={ shareIcon }
                  alt="Botão Compartilhar"
                  data-testid={ `${index}-horizontal-share-btn` }
                  className="share"
                  onClick={ () => copiarURL(favoriteArray.id) }
                />
                {
                  renderMSG ? <span>Link copiado!</span>
                    : <span hidden>Link copiado!</span>
                }
                <input
                  type="image"
                  src={ blackHeartIcon }
                  alt="Botão Favoritar"
                  data-testid={ `${index}-horizontal-favorite-btn` }
                  className="favorite"
                  onClick={ () => removerLocalStorage(favoriteArray.id) }
                />
              </div>
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
              <ListGroupItem>
                <span
                  data-testid={ `${index}-horizontal-top-text` }
                >
                  {
                    favoriteArray.alcoholicOrNot === ''
                      ? `${favoriteArray.area} - ${favoriteArray.category}`
                      : (
                        <span>
                          { `${
                            favoriteArray.alcoholicOrNot
                          } - ${favoriteArray.category}` }
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
};

export default ReceitasFavoritas;
