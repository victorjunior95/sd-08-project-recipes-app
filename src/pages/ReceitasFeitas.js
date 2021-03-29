import React, { useContext, useEffect, useState } from 'react';
import { Button, Card, CardDeck, Nav } from 'react-bootstrap';

import Header from '../components/Header';
import ContextRecipes from '../context/ContextRecipes';
import ShareIcon from '../images/shareIcon.svg';

const copy = require('clipboard-copy');

const ReceitasFeitas = () => {
  const { setHeaderInfo } = useContext(ContextRecipes);
  const [doneRecipes, setDoneRecipes] = useState([]);
  const [renderMSG, setRenderMSG] = useState(false);

  useEffect(() => {
    const doneRecipesFromLocalStorage = JSON.parse(localStorage.getItem('doneRecipes'));

    if (doneRecipesFromLocalStorage !== null) {
      setDoneRecipes(doneRecipesFromLocalStorage);
    }
    setHeaderInfo({
      pageTitle: 'Receitas Feitas',
    });
  }, [setHeaderInfo, setDoneRecipes]);

  const filterFood = () => {
    setDoneRecipes(JSON.parse(localStorage.getItem('doneRecipes'))
      .filter((done) => done.type === 'comida'));
  };

  const filterDrink = () => {
    setDoneRecipes(JSON.parse(localStorage.getItem('doneRecipes'))
      .filter((done) => done.type === 'bebida'));
  };

  const filterAll = () => {
    setDoneRecipes(JSON.parse(localStorage.getItem('doneRecipes')));
  };

  const msgTime = 5000;
  const copiarURL = (tipo, id) => {
    copy(`http://localhost:3000/${tipo}/${id}`);
    setRenderMSG(true);
    setTimeout(() => { setRenderMSG(false); }, msgTime);
  };
  const NUMERO_DE_CARDS_MAX = 4;
  const classCardHeigth = doneRecipes.length < NUMERO_DE_CARDS_MAX
    ? 'cardHeigth' : 'cardHeigth2';

  return (
    <section className={ `w-100 bg-dark ${classCardHeigth} receitasF` }>
      <Header />
      { doneRecipes.length === 0
        ? (
          <div className="cardBody">
            <h1>Nenhum Receita Feita...</h1>
            <h1>:-(</h1>
          </div>
        ) : (
          <div>
            <div className="buttonsList">
              <Button
                variant="success"
                className="categoryButton"
                type="button"
                checked
                data-testid="filter-by-all-btn"
                onClick={ filterAll }
              >
                All
              </Button>
              <Button
                variant="success"
                className="categoryButton"
                type="button"
                data-testid="filter-by-food-btn"
                onClick={ filterFood }
              >
                Food
              </Button>
              <Button
                variant="success"
                className="categoryButton"
                type="button"
                data-testid="filter-by-drink-btn"
                onClick={ filterDrink }
              >
                Drinks
              </Button>
            </div>
            <CardDeck className="d-flex flex-row flex-wrap justify-content-center p-2">
              { doneRecipes.map((doneRecipe, index) => (
                <Card key={ index } className="m-1 p-0 border-dark d-flex flex-row">
                  <Card.Body className="p-0 w-50">
                    <Nav.Link href={ `http://localhost:3000/${doneRecipe.type}s/${doneRecipe.id}` } className="p-0">
                      <Card.Img
                        variant="top"
                        src={ doneRecipe.image }
                        alt="Foto da receita"
                        data-testid={ `${index}-horizontal-image` }
                      />
                    </Nav.Link>
                  </Card.Body>
                  <Card.Body className="p-1 w-50">
                    <div className="d-flex flex-row justify-content-between mb-1">
                      <Card.Text
                        data-testid={ `${index}-horizontal-top-text` }
                        className="m-0"
                      >
                        <small>
                          {
                            doneRecipe.alcoholicOrNot === ''
                              ? `${doneRecipe.area} - ${doneRecipe.category}`
                              : (
                                `${doneRecipe.alcoholicOrNot}`
                              )
                          }
                        </small>
                      </Card.Text>
                      <input
                        type="image"
                        src={ ShareIcon }
                        alt="Botão Compartilhar"
                        data-testid={ `${index}-horizontal-share-btn` }
                        className="share"
                        onClick={ () => copiarURL(
                          `${doneRecipe.type}s`, doneRecipe.id,
                        ) }
                      />
                    </div>
                    {
                      renderMSG ? <h2>Link copiado!</h2>
                        : <h2 hidden>Link copiado!</h2>
                    }
                    <Nav.Link href={ `http://localhost:3000/${doneRecipe.type}s/${doneRecipe.id}` } className="m-0 p-0 mb-1">
                      <Card.Text
                        data-testid={ `${index}-horizontal-name` }
                        className="fs-5 mb-1 fw-bold"
                      >
                        { doneRecipe.name }
                      </Card.Text>
                    </Nav.Link>
                    <Card.Text className="m-0 mb-1">
                      <small
                        className="text-muted fst-italic"
                        data-testid={ `${index}-horizontal-done-date` }
                      >
                        { `Feito em: ${doneRecipe.doneDate}` }
                      </small>
                    </Card.Text>
                    { doneRecipe.tags.map((tag) => (
                      <span
                        key={ tag }
                        className="badge bg-primary m-1"
                        data-testid={ `${index}-${tag}-horizontal-tag` }
                      >
                        { tag }
                      </span>
                    )) }
                  </Card.Body>
                </Card>
              )) }
            </CardDeck>
          </div>) }
    </section>
  );
};

export default ReceitasFeitas;
