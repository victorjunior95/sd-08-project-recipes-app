import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { CardDeck, Card } from 'react-bootstrap';
import ContextRecipes from '../context/ContextRecipes';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MAX_CARDS = 12;

const Comidas = () => {
  const { dataByBusca } = useContext(ContextRecipes);
  const history = useHistory();
  const [dataComidas, setDataComidas] = useState([]);

  useEffect(() => {
    if (dataByBusca.meals !== undefined) {
      if (dataByBusca.meals.length > 1) {
        setDataComidas([...dataByBusca.meals]);
      } else if (dataByBusca.meals.length === 1) {
        history.push(`/comidas/${dataByBusca.meals[0].idMeal}`);
      }
    }
  }, [dataByBusca, history]);

  return (
    <section className="w-100">
      <Header />
      { dataComidas.length > 0 ? (
        <CardDeck className="m-2 d-flex flex-row flex-wrap justify-content-center">
          {
            dataComidas.map((bebida, index) => {
              if (index < MAX_CARDS) {
                return (
                  <Card
                    key={ bebida.idMeal }
                    data-testid={ `${index}-recipe-card` }
                    className="col-5 m-2"
                  >
                    <Card.Img
                      variant="top"
                      data-testid={ `${index}-card-img` }
                      src={ bebida.strMealThumb }
                    />
                    <Card.Body>
                      <Card.Title data-testid={ `${index}-card-name` }>
                        { bebida.strMeal }
                      </Card.Title>
                    </Card.Body>
                  </Card>
                );
              }
              return false;
            })
          }
        </CardDeck>
      ) : false }
      <Footer />
    </section>
  );
};

export default Comidas;
